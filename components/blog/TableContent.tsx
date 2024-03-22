'use client';
import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation"; // Import useRouter hook for navigation

type item = {
    key: string;
    label: string;
    idx: string;
}

interface TableContentProps {
    items: item[];
}

const TableContent: React.FC<TableContentProps> = ({ items }) => {
    const router = useRouter(); // Initialize useRouter hook

    const handleItemClick = (idx: string) => {
        router.push(idx);
    };

    return (
        <div className="my-3 w-[200px]">
            <Dropdown type="listbox">
                <DropdownTrigger>
                    <Button variant="solid">Table Content</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Dynamic Actions">
                    {items.map((item) => (
                        <DropdownItem key={item.key} onClick={() => handleItemClick(item.idx)}>
                            {item.label}
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </div>

    );
}

export default TableContent;
