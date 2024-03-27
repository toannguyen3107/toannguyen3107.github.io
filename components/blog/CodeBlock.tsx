import React, { useEffect } from "react";
import { Code as NextUICode } from "@nextui-org/react";
import hljs from "highlight.js";
import 'highlight.js/styles/atom-one-dark.css';

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

type FormatType = {
    content: string;
    code: string;
};

interface CodeFormatProps {
    item: FormatType;
};

const CodeFormat: React.FC<CodeFormatProps> = ({ item }) => {
    useEffect(() => {
        // Attempting to register the language dynamically
        try {
            hljs.registerLanguage(item.code, require(`highlight.js/${item.code}`));
        } catch (error) {
            console.error(`Failed to register language '${item.code}'`);
        }
    }, [item.code]);

    return (
        <pre className="overflow-auto my-4 border-1 rounded-[2rem]">
            <code className={item.code}>{item.content}</code>
        </pre>
    );
};

export { CodeBlock, CodeFormat };
