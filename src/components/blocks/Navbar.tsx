"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from 'next-intl';

export default function Navbar() {
    const [mobileNav, setMobileNav] = useState(false)
    const general = useTranslations('general');

    function hamburger() {
        if (mobileNav == false) {
            setMobileNav(true);
        } else {
            setMobileNav(false);
        }
    }

    return (
        <nav className="w-[80%] h-[5.25rem] m-auto mt-7 lg:bg-navbarBg bg-footerBg text-center backdrop-blur-sm rounded-xl fixed left-[10%] top-0 border-[1px] border-dotted border-axsoterBlue">
            <div className="mx-16 flex items-center justify-between min-h-full">
                { /* Logo */ }
                <Link className="font-MatterTRIAL cursor-pointer flex items-center justify-center gap-4" href='/'>
                    <Image src="/assets/img/icon.webp" width={45} height={45} className="w-[45px] rounded-lg" alt="Logo" />
                    <strong className="text-[2rem]">
                        Axsoter
                    </strong>
                </Link>

                { /* hamburger */ }
                <div className="lg:hidden block pl-6" onClick={hamburger}>
                    <span className="w-7 h-[2px] bg-white block"></span>
                    <span className="w-7 h-[2px] my-2 bg-white block"></span>
                    <span className="w-7 h-[2px] bg-white block"></span>
                </div>

                { /* tää on turhaa miks tänne tuut kattoo */}
                <div className={
                mobileNav ? "flex items-center font-MatterTRIAL top-0 left-0 " +
                "max-lg:fixed max-lg:-z-10 max-lg:border-[1px] max-lg:border-dotted max-lg:border-axsoterBlue max-lg:bg-footerBg max-lg:w-full max-lg:flex-col max-lg:pt-20 max-lg:pb-9 max-lg:ease-in-out max-lg:duration-300" +
                " max-lg:opacity-100 max-lg:block" : "flex items-center font-MatterTRIAL top-0 left-0 " +
                "max-lg:fixed max-lg:-z-10 max-lg:border-[1px] max-lg:border-dotted max-lg:border-axsoterBlue max-lg:bg-footerBg max-lg:w-full max-lg:flex-col max-lg:pt-20 max-lg:pb-9 max-lg:ease-in-out max-lg:duration-300" +
                " max-lg:opacity-0 max-lg:hidden"
                }>
                    <ul className="list-none flex items-center max-lg:flex-col">
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

                    <div className="lg:w-auto lg:relative lg:right-0 w-full px-4">
                        <Link href="https://console.axsoter.com" className="inline-block py-3 px-7 text-center cursor-pointer bg-axsoterBlue font-MatterTRIAL no-underline ease-in-out duration-700 hover:bg-brandGradient lg:rounded-full rounded-lg w-full mt-3 lg:mt-0" target="_blank">
                            {general('console')}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}