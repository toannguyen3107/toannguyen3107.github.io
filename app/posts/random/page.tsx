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
import { CodeBlock, CodeFormat } from "@/components/blog/CodeBlock";

export default function Page() {
    
    hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
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
    const date = findDate('Random');
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
        }
    ];
    return (
        <div className="mt-3 w-[90%] md:w-4/5 mx-auto">
            <HeaderBlog name="Random" />
            <Divider />
            <TableContent items={items} />
            <div id="introduction" className="my-2">
                <SubHeader item={{ num: '1', content: 'Introduction' }} />
                <SubPara content={`Daddy, teach me how to use random value in programming!`} />
                <CodeBlock item={
                    {
                        content: `ssh random@pwnable.kr -p2222 (pw:guest)`,
                        color: 'success'
                    }
                } />
            </div>
            <div id="exploitation" className="my-2">
                <SubHeader item={{ num: '2', content: 'Exploitation' }} />
                <CodeFormat item={
                    {content: `
                    ## random.c 
                    #include <stdio.h>

                    int main(){
                            unsigned int random;
                            random = rand();        // random value!
                    
                            unsigned int key=0;
                            scanf("%d", &key);
                    
                            if( (key ^ random) == 0xdeadbeef ){
                                    printf("Good!\\n");
                                    system("/bin/cat flag");
                                    return 0;
                            }
                    
                            printf("Wrong, maybe you should try 2^32 cases.\\n");
                            return 0;
                    }
                    `,
                    code: 'c'
                }
                }/>
                <SubImage img={{
                    alt: 'Write program test',
                    path: '/images/random/writeprogram.png',
                    size: 800
                }} />
                <SubPara content={`You may notice from the image above that the rand() function is not being used correctly, resulting in the same value being generated repeatedly`}/>
                <CodeBlock item={
                    {
                        content: `we have x xor y = z => z xor y = x xor y xor y = x`,
                        color: 'warning'
                    }
                } />
                <SubImage img={{
                    alt: 'Calculate and result',
                    path: '/images/random/result.png',
                    size: 800
                }} />
                <CodeBlock item={
                    {
                        content: `Congratulations! The flag has been found.`,
                        color: 'warning'
                    }
                } />
            </div>
            <FooterBlog date={date} />
        </div>
    );
}
