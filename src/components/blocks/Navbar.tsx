"use client"

import AxsoterLogo from "../other/AxsoterLogo";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from 'next-intl';
import NavLoginButton from "../buttons/NavLogin";

export default function Navbar() {
    const [mobileNav, setMobileNav] = useState(false)
    const general = useTranslations('general');

    function hamburger() {
        setMobileNav(!mobileNav)
    }

    return (
        <nav className={
            `min-w-[80%] h-[5.25rem] m-auto mt-7 bg-navbarBg text-center backdrop-blur-sm rounded-xl fixed left-[10%] top-0 
             ${!mobileNav ? "border-2" : ""} border-dotted border-axsoterBlue z-30`
          }>          
            <div className="mx-16 flex items-center justify-between min-h-full">
                { /* Logo */ }
                <AxsoterLogo />

                { /* hamburger */ }
                <div className="lg:hidden block pl-6" onClick={hamburger}>
                    <span className="w-7 h-[2px] bg-white block"></span>
                    <span className="w-7 h-[2px] my-2 bg-white block"></span>
                    <span className="w-7 h-[2px] bg-white block"></span>
                </div>

                { /* tää on turhaa miks tänne tuut kattoo */}
                <div className={
                    `flex items-center font-MatterTRIAL top-0 left-0 w-full 
                    max-lg:fixed max-lg:-z-10 max-lg:border-2 max-lg:border-dotted max-lg:border-axsoterBlue 
                    max-lg:bg-footerBg max-lg:w-full max-lg:flex-col max-lg:pt-20 max-lg:pb-9 max-lg:ease-in-out 
                    max-lg:duration-300 max-lg:rounded-xl 
                    ${mobileNav ? "max-lg:opacity-100 max-lg:block" : "max-lg:opacity-0 max-lg:hidden"}`
                }>
                    <ul className="list-none flex items-center justify-center max-lg:flex-col w-fit mx-auto grow">
                        <li className="relative lg:p-0 py-5"><Link className="cursor-pointer tracking-wide text-2xl ease-in-out duration-500 hover:text-axsoterBlue" href="/">{general('homepage')}</Link></li>
                        <span className="lg:inline text-3xl text-[#333] mx-5 hidden">/</span>
                        <li className="relative lg:p-0 py-5"><Link className="cursor-pointer tracking-wide text-2xl ease-in-out duration-500 hover:text-axsoterBlue" href="/billing/products">{general('shop')}</Link></li>
                        <span className="lg:inline text-3xl text-[#333] mx-5 hidden">/</span>
                        <li className="relative lg:p-0 py-5"><Link className="cursor-pointer tracking-wide text-2xl ease-in-out duration-500 hover:text-axsoterBlue" href="/about">{general('about')}</Link></li>
                        <span className="lg:inline text-3xl text-[#333] mx-5 hidden">/</span>
                        <li className="relative lg:p-0 py-5"><Link className="cursor-pointer tracking-wide text-2xl ease-in-out duration-500 hover:text-axsoterBlue" href="/blog">{general('blog')}</Link></li>
                        <span className="lg:inline text-3xl text-[#333] mx-5 hidden">/</span>
                        <li className="relative lg:p-0 py-5"><Link className="cursor-pointer tracking-wide text-2xl ease-in-out duration-500 hover:text-axsoterBlue" target="_blank" href="https://status.axsoter.com/">{general('status')}</Link></li>
                    </ul>

                    <div className="lg:w-48 lg:relative lg:right-0 w-full px-4 lg:px-0">
                        <NavLoginButton />
                    </div>
                </div>
            </div>
        </nav>
    )
}