import React from "react";
interface HeaderProps{
    name: string;
}
const HeaderBlog: React.FC<HeaderProps> = ({name}) => {
    return  <p className="ml-4 my-4 text-red-600 text-2xl font-bold">{name}</p>
}

export default HeaderBlog;