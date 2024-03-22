import React from "react";
import { Divider } from "@nextui-org/react";

interface FooterBlogProps {
    date: string;
}

const FooterBlog: React.FC<FooterBlogProps> = ({ date }) => {
    return (
        <div className="my-3 flex flex-col justify-items-center">
            <Divider />
            <p className="text-[1.3rem] text-center text-red-500">Thanks for Reading</p>
            <p className="text-[1rem] text-center text-red-500">{date}</p>
            <p className="text-[1rem] text-center text-red-500">Nguyen Minh Toan</p>
        </div>
    );
}

export default FooterBlog;
