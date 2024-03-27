import React from "react";
import { Code as NextUICode } from "@nextui-org/react";

type ItemType = {
    color: 'success' | 'warning' | 'danger' | 'secondary' | 'primary';
    content: string;
}

interface CodeBlockProps {
    item: ItemType;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ item }) => {
    return (
        <div className="overflow-x-auto">
            <NextUICode color={item.color} className="m-[5px]">{item.content}</NextUICode>
        </div>
    );
}

export { CodeBlock };
