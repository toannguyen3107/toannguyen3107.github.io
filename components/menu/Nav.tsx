'use client'
import React from "react";
import { Avatar, Listbox, ListboxItem } from "@nextui-org/react";
import { roboto } from "@/config/fonts";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { Link } from "@nextui-org/react";
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
            <ListboxItem className={`mt-1 text-center mx-auto`} key={link.key}>{link.label}</ListboxItem>
          ))}
        </Listbox>
      </div>

      <div className="mx-auto footnav absolute bottom-10 left-[20%] flex flex-row gap-4">
        <Link
          href="https://github.com/toannguyen3107"
          className="text-3xl hover:text-white"
          color="success"
        ><FaGithub /></Link>
        <Link
          href=" javascript:location.href = 'mailto:' + ['minhtoanaglx','gmail.com'].join('@')" aria-label="email"
          className="text-3xl  hover:text-white"
          color="success"
        ><IoIosMail /></Link>
        <Link
          href="https://facebook.com/nguyenminhtoan07"
          className="text-3xl hover:text-white"
          color="success"
        ><FaFacebook /></Link>
      </div>
    </div>
  );
};

export default Nav;