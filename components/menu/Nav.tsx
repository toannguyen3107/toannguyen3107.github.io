import React from "react";
import { Avatar } from "@nextui-org/react";
interface NavProps {
    className?: String;
}

const Nav: React.FC<NavProps> = ({className}) =>  {
    
    return (
        <div className={`${className}`}>
            <Avatar isBordered src="/toan.png" className={`mt-[3rem] w-36 h-36 mx-auto`}/>
        </div>
    );
}
export default Nav;