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
