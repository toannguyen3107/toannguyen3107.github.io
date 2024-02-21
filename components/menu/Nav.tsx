'use client'
import React from "react";
import { Avatar, Listbox, ListboxItem } from "@nextui-org/react";
import { roboto } from "@/config/fonts";

type Key = string | number;

const Nav: React.FC<{ className?: string }> = ({ className }) => {
  const handleNavigation = (key: Key) => {
    alert(key);
  };

  const navigationLinks = [
    { key: "home", label: "HOME" },
    { key: "categories", label: "CATEGORIES" },
    { key: "tags", label: "TAGS" },
    { key: "archives", label: "ARCHIVES" },
    { key: "about", label: "ABOUT" },
  ];

  return (
    <div className={`${className}`}>
      <div className="avt">
        <Avatar isBordered src="/toan.png" className="mt-[3rem] w-36 h-36 mx-auto" />
        <p className="mt-2 fw-extrabold text-2xl mx-auto w-[max-content] text-slate-100">Minh Toan</p>
        <p className={`w-[max-content] mx-auto mt-1 text-slate-400 text-sm italic ${roboto.className}`}>learner - software - pentester</p>
      </div>

      <div className="lst">
        <Listbox
          aria-label="Actions"
          onAction={handleNavigation}
          className="mt-[3rem]"
        >
          {navigationLinks.map((link) => (
            <ListboxItem className={`text-center mx-auto`} key={link.key}>{link.label}</ListboxItem>
          ))}
        </Listbox>
      </div>
    </div>
  );
};

export default Nav;