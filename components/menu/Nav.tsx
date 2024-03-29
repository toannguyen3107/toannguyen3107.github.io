'use client'
import React, { useEffect } from "react";
import { Avatar, Listbox, ListboxItem } from "@nextui-org/react";
import { roboto } from "@/config/fonts";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { Link } from "@nextui-org/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const Nav: React.FC<{ className?: string }> = ({ className }) => {

  const router = useRouter();
  const pathname = usePathname();
  const firstSegmentOfPathname = '/'+pathname.split('/')[1];
  console.log(firstSegmentOfPathname);
  const handleNavigation = (link: string) => () => {
    router.push(link);
  };

  const lst = "absolute w-[max-content] p-[1rem] top-[10%] bg-slate-500 h-[max-content] right-[10%] z-50 rounded-[1rem]";
  useEffect(() => {
    if (typeof window !== 'undefined' && window.screen.width > 768) {
      setMenuVisible(false);
    }
  }, []);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const handleMenu = () => {
    setMenuVisible(!menuVisible);
  }
  const navigationLinks = [
    { key: "home", label: "HOME", link: '/' },
    { key: "categories", label: "CATEGORIES", link: '/categories' },
    { key: "tags", label: "TAGS", link: '/tags' },
    { key: "posts", label: "BLOG", link: '/posts' },
    { key: "about", label: "ABOUT", link: '/about' },
  ];
  return (
    <div className={`${className} relative md:block grid grid-cols-12 grid-rows-12 gap-4`}>
      <div className="avt drop-shadow-xl contrast-150 col-span-6 row-span-12">
        <Avatar isBordered src="/toan.png" className="mt-[3rem] w-[5rem] h-[5rem] md:w-[50%] md:h-[50%] mx-auto" />
        <p className="mt-2 fw-extrabold text-sm md:text-xl lg:text-2xl mx-auto w-[max-content] text-slate-100">Minh Toan</p>
        <p className={`text-center mx-auto mt-1 text-slate-400 text-[0.65rem] italic ${roboto.className}`}>Software Engineering and Cybersecurity Enthusiast</p>
      </div>
      <GiHamburgerMenu
        className="block md:hidden my-auto col-span-6 row-span-6 m-auto font-bold text-xl hover:text-white active:text-red-500"
        onClick={handleMenu}
      />

        <Listbox
          aria-label="Actions"
          className={`mt-[3rem] ${menuVisible ? lst : ''}`}
        >
          {navigationLinks.map((link) => (
            <ListboxItem
              onClick={handleNavigation(link.link)}
              variant="solid"
              color={firstSegmentOfPathname === link.link ? 'warning' : 'secondary'}
              className={`mt-1 text-center mx-auto hover:transition hover:ease-in-out hover:delay-150 ${firstSegmentOfPathname == link.link ? 'text-warning' : 'secondary'}`}
              key={link.key}>{link.label}</ListboxItem>
          ))}
        </Listbox>



      <div className="block md:absolute m-auto md:mx-auto footnav bottom-10 flex items-center flex-row gap-4 justify-center bottom-[5%] left-[50%] right-[50%]">
        <Link
          href="https://github.com/toannguyen3107"
          className="text-3xl"
          isExternal
        ><FaGithub className="text-gray-800 hover:text-slate-50" /></Link>
        <Link
          href="mailto:minhtoanaglx@gmail.com"
          aria-label="email"
          isExternal
          className="text-3xl"
        ><IoIosMail className="text-gray-800 hover:text-slate-50" /></Link>
        <Link
          href="https://facebook.com/nguyenminhtoan07"
          className="text-3xl"
          isExternal
          color="success"
        ><FaFacebook className="text-gray-800 hover:text-slate-50" /></Link>
      </div>
    </div>
  );
};

export default Nav;