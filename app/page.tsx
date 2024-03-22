'use client';
import { Span } from "next/dist/trace";
import React, { ReactNode } from "react";
import { Typewriter } from 'react-simple-typewriter';
import {Divider} from "@nextui-org/react";
export default function App() {
  return (
    <div>
      <div className="w-full bg-[#27272A] px-2 py-1">
        <h2 className="font-extrabold text-xl">Toan Nguyen&apos;s personal site</h2>
      </div>
      <div className="mt-[3rem] w-4/5 mx-auto drop-shadow-xl contrast-200">
      <p className="font-extrabold text-3xl text-[#d8d8d8] blur-[0.1px] italic">Hello everyone</p>
      <span className="text-[#17c964] font-semibold text-lg">
        <Typewriter
          words={['Welcome to my blog.', 'My name is Nguyen Minh Toan.', 'This blog shares my knowledge within the realms of learning about software engineering and cybersecurity, focusing mainly on penetration testing.']}
          loop={true}
          cursor={true}
          cursorBlinking={true}
          // cursorColor="red"
          cursorStyle={<span className="text-bold text-xl text-[#17c964]">|</span>}
          typeSpeed={50}
          deleteSpeed={10}
        />
      </span>

      <div className="absolute top-[20vh] bottom-[20vh]">
        <Divider className="mt-4 my-4"/>
        <p className="font-semibold text-xl text-[#00BFFF]">Explore</p>
      </div>
    </div>
    </div>
    
  );
}
