import { Divider } from "@nextui-org/react";
import HeaderBlog from "@/components/blog/HeaderBlog";
import TableContent from "@/components/blog/TableContent";
import SubHeader from "@/components/blog/SubHeader";
import SubPara from "@/components/blog/SubPara";
import { Code } from "@nextui-org/react";
import SubImage from "@/components/blog/SubImage";

export default function Page(){
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
        <div className="mt-3 w-full md:w-4/5 mx-auto">
            <HeaderBlog name="WifinetecTwo"/>
            <Divider />
            <TableContent items={items}/>
            <div id="introduction" className="my-2">
                <SubHeader item={{num: '1', content: 'Introduction'}}/>
                <SubPara content={'This challenge is from HackTheBox and is rated as medium difficulty. This challenge involves identifying vulnerabilities in OpenPLC and Wi-Fi connections.'} />
            </div>
            <div id="enumeration" className="my-2">
                <SubHeader item={{num: '2', content: 'Enumeration'}}/>
                <SubPara content={'To scan a target machine using the Nmap tool, execute the following command:'} />
                <Code color="success" >nmap -sV -A -p- --min-rate 1500 &lt;target_machine&gt;</Code>
                <SubPara content={'Upon scanning, you observe that two ports are open: Port 22 for SSH and Port 8080 for Werkzeug. When accessing http://<target_machine>:8080/, it redirects to /login, indicating the usage of OpenPLC. Scan dir with gobuster by run following command: '}/>
                <Code color="success">gobuster -w /usr/share/dirb/&lt;dirlist&gt; -u &lt;target_host&gt;:8080</Code>
                <SubImage img={{
                    alt: 'dirsearch',
                    path: '/images/wifinetictwo/dirsearch.png',
                    size: 400
                }}/>
                <SubPara content={''} />
            </div>
        </div>
    );
}