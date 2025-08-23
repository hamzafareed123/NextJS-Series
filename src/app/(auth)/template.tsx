'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLink = [
  { name: "Register", href: "/Register" },
  { name: "Login", href: "/Login" },
  { name: "Forgot Password", href: "/ForgotPassword" },
];



export default function Layout({ children }: { children: React.ReactNode }) {
    const pathName = usePathname();

    const [data ,setData] = useState('');

  return (
    <div className="mt-10 text-2xl text-center">
      <h1>Layout Page</h1>

      <input type="text" placeholder="Enter Text" value={data} onChange={(e)=>setData(e.target.value)}/>

      {navLink.map((link) => {

        const isActive = pathName === link.href;
        return(
        <div key={link.name}>
            
          <Link
            href={link.href}
            className={`border bg-black text-white px-2 py-1 ${isActive? 'bg-amber-300 text-black':'bg-blue-500 text-black'}`}
          >
            {link.name}
          </Link>
        </div>
)})}

     
      <div className="mt-6">{children}</div>
    </div>
  );
}
