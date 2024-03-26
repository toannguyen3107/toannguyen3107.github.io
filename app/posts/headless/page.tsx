'use client';
import { Divider } from "@nextui-org/react";
import HeaderBlog from "@/components/blog/HeaderBlog";
import TableContent from "@/components/blog/TableContent";
import SubHeader from "@/components/blog/SubHeader";
import SubPara from "@/components/blog/SubPara";
import { Code } from "@nextui-org/react";
import SubImage from "@/components/blog/SubImage";
import { Link } from "@nextui-org/react";
import FooterBlog from '@/components/blog/Footer'
import { list_post } from "@/config/post";
import hljs from "highlight.js";
import 'highlight.js/styles/atom-one-dark.css';
import { useEffect } from "react";

export default function Page() {
    hljs.registerLanguage('shell', require('highlight.js/lib/languages/shell'));

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

    const date = findDate('Headless');
    const items = [
        {
            key: 'Introduction',
            label: 'Introduction',
            idx: '#introduction'
        },
        {
            key: 'Enumeration',
            label: 'Enumeration',
            idx: '#enumeration'
        },
        {
            key: 'Exploitation',
            label: 'Exploitation',
            idx: '#exploitation'
        },
        {
            key: 'PrivilegeEscalation',
            label: 'Privilege Escalation',
            idx: '#privilegeescalation'
        }
    ];
    return (
        <div className="mt-3 w-[90%] md:w-4/5 mx-auto">
            <HeaderBlog name="Headless" />
            <Divider />
            <TableContent items={items} />
            <div id="introduction" className="my-2">
                <SubHeader item={{ num: '1', content: 'Introduction' }} />
                <SubPara content={'This challenge is from HackTheBox and is rated as easy difficulty. This challenge involves identifying vulnerabilities in XSS attack and setup bad shellcode in linux system.'} />
            </div>
            <div id="enumeration" className="my-2">
                <SubHeader item={{ num: '2', content: 'Enumeration' }} />
                <SubPara content='Using nmap tool' />
                <SubImage img={{
                    alt: 'Nmap tool image',
                    path: '/images/headless/img1.png',
                    size: 500
                }} />
                <div className="overflow-x-auto">
                    <Code color="success" className="my-3">{`Dir seach -> /dashboard  and /support`}</Code>
                </div>
                <SubPara content='Navigate to /support. Upon visiting this page, if you inject a malicious payload such as <script>alert(1)</script>, it triggers a table titled "Hacking Attempt Detection." As illustrated in the image below, this table displays the rendered content in the header to notify users and detects the User-Agent. By exploiting this vulnerability, you can display this table and manipulate the User-Agent to precisely obtain the admin&apos;s cookie. This type attack is XXS attack.' />
                <SubImage img={{
                    alt: 'Nmap tool image',
                    path: '/images/headless/img2.png',
                    size: 700
                }} />
            </div>
            <FooterBlog date={date} />
        </div>
    );
}