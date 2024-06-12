"use client"
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [mobileNav, setMobileNav] = useState(true)
    return (
        <nav className="w-[80%] h-[5.25rem] m-auto mt-7 bg-navbarBg text-center backdrop-blur-sm rounded-xl fixed left-[10%] border-[1px] border-dotted border-axsoterBlue">
            <div className="mx-16 flex items-center justify-between min-h-full">
                <a className="font-MatterTRIAL cursor-pointer flex items-center justify-center gap-4" href='/'>
                    <Image src="/assets/img/icon.webp" width={45} height={45} className="w-[45px] rounded-lg" alt="Logo" />
                    <strong className="text-[2rem]">
                        Axsoter
                    </strong>
                </a>
                <div className="lg:hidden block pl-6 w-7 h-[2px] mb-2">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={
                mobileNav ? "list-none flex items-center font-MatterTRIAL top-0 left-0 " +
                "max-lg:fixed max-lg:border-[1px] max-lg:border-dotted max-lg:border-axsoterBlue max-lg:w-full max-lg:flex-col max-lg:pt-20 max-lg:pb-9 max-lg:ease-in-out max-lg:duration-300" +
                " max-lg:opacity-100" : "list-none flex items-center font-MatterTRIAL " +
                "max-lg:fixed max-lg:border-[1px] max-lg:border-dotted max-lg:border-axsoterBlue max-lg:w-full max-lg:flex-col max-lg:pt-20 max-lg:pb-9 max-lg:ease-in-out max-lg:duration-300" +
                " max-lg:opacity-0"
                }>
                    <li className="relative"><a className="cursor-pointer tracking-wide text-2xl ease-in-out duration-500 hover:text-axsoterBlue" href="/">Etusivu</a></li>
                    <span className="lg:inline text-3xl text-[#333] mx-5 hidden">/</span>
                    <li className="relative"><a className="cursor-pointer tracking-wide text-2xl ease-in-out duration-500 hover:text-axsoterBlue" href="/about">Tietoa</a></li>
                    <span className="lg:inline text-3xl text-[#333] mx-5 hidden">/</span>
                    <li className="relative"><a className="cursor-pointer tracking-wide text-2xl ease-in-out duration-500 hover:text-axsoterBlue" href="/team">Tiimi</a></li>
                    <span className="lg:inline text-3xl text-[#333] mx-5 hidden">/</span>
                    <li className="relative"><a className="cursor-pointer tracking-wide text-2xl ease-in-out duration-500 hover:text-axsoterBlue" href="/blog">Blogi</a></li>
                    <span className="lg:inline text-3xl text-[#333] mx-5 hidden">/</span>
                    <li className="relative"><a className="cursor-pointer tracking-wide text-2xl ease-in-out duration-500 hover:text-axsoterBlue" target="_blank" href="https://axsoter.com/status/">Tila</a></li>

                    <div className="lg:hidden block w-full px-4">
                        <a href="https://console.axsoter.com" className="inline-block py-3 px-7 text-center cursor-pointer bg-axsoterBlue font-MatterTRIAL no-underline ease-in-out duration-700 hover:bg-brandGradient rounded-lg w-full mt-3" target="_blank">
                            Console
                        </a>
                    </div>
                </ul>
                <div className="lg:block hidden">
                    <a href="https://console.axsoter.com" className="inline-block py-3 px-7 text-center cursor-pointer bg-axsoterBlue font-MatterTRIAL no-underline mr-[50px] ease-in-out duration-700 hover:bg-brandGradient rounded-full" target="_blank">
                        Console
                    </a>
                </div>
            </div>
        </nav>
    )
}