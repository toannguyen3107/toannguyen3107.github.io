import React, { useEffect } from "react";
import { Code as NextUICode } from "@nextui-org/react";

type ItemType = {
    color: 'success' | 'warning' | 'error' | 'secondary' | 'primary' | 'danger';
    content: string;
}

interface CodeBlockProps {
    item: ItemType;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ item }) => {
    return (
        <div className="overflow-x-auto">
            <NextUICode color={item.color} css={{ m: "5px" }}>{item.content}</NextUICode>
        </div>
    );
}



export { CodeBlock,  };
