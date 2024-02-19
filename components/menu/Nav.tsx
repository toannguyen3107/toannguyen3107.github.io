import { Link } from "@nextui-org/react";
export default function Nav() {
    return (
        <div className="grid grid-cols-12 gap-3 px-3 py-4 bg-[#264653] border-b-2 border-[#457b9d]">
            <Link href="/">
                <div className="col-span-1 p-3 border-[0.1rem] rounded-[50%] w-[max-content] bg-yellow-400">
                    <p className="text-red-700 font-extrabold w-[max-content] text-2xl">TN</p>
                </div>
            </Link>
            <div className="col-span-1 my-auto">
                <Link href="/" isBlock color="warning" className="px-3 py-2 font-bold" >Home</Link>
            </div>
            <div className="col-span-1 my-auto">
                <Link href="/blog" isBlock color="warning" className="px-3 py-2 font-bold" >Blog</Link>
            </div>
        </div>
    );
}