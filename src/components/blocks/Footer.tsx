import Image from "next/image"
import ScrollReveal from "../helpers/ScrollReveal"
import Link from "next/link"
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('footer');
    const general = useTranslations('general');

    return (
        <ScrollReveal revealConfig={{ reset: false }}>
            <footer className="bg-footerBg/35 backdrop-blur-sm w-[80%] mx-auto rounded-xl mb-4 border-2 border-dotted border-axsoterBlue">
                <div className="mx-auto w-[80vw] p-4 px-12 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0 mr-[5vw]">
                            <Link href="https://axsoter.com/" className="flex items-center">
                                <Image src="/assets/img/axsoter-no-background.png" width={32} height={32} className="h-8 me-1" alt="Axsoter Logo" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap">Axsoter</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-6 sm:gap-6 sm:grid-cols-4">
                            <div>
                                <h2 className="mb-2 text-sm font-semibold text-white uppercase">{t('titles.contact')}</h2>
                                <ul className="font-medium">
                                    <li className="mb-4 text-gray-300">
                                        <a href="mailto:contact@axsoter.com" className="break-words">{t('contacts.email')} contact@axsoter.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-2 text-sm font-semibold text-white uppercase">{t('titles.terms')}</h2>
                                <ul className="font-medium">
                                    <li className="mb-[0.15rem] text-gray-300">
                                        <a href="/tos">{general('terms.tos')}</a>
                                    </li>
                                </ul>
                                <ul className="font-medium">
                                    <li className="mb-[0.15rem] text-gray-300">
                                        <a href="/privacy">{general('terms.privacy')}</a>
                                    </li>
                                </ul>
                                <ul className="font-medium">
                                    <li className="mb-[0.15rem] text-gray-300">
                                        <a href="/disclaimer">{general('terms.disclaimer')}</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-2 text-sm font-semibold text-white uppercase">{t('titles.links')}</h2>
                                <ul className="font-medium">
                                    <li className="mb-[0.15rem] text-gray-300">
                                        <a href="https://axsoter.com/console/">{general('console')}</a>
                                    </li>
                                </ul>
                                <ul className="font-medium">
                                    <li className="mb-[0.15rem] text-gray-300">
                                        <a href="https://axsoter.com/login/">{general('login')}</a>
                                    </li>
                                </ul>
                                <ul className="font-medium">
                                    <li className="mb-[0.15rem] text-gray-300">
                                        <a href="https://axsoter.com/register/">{general('signup')}</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-2 text-sm font-semibold text-white uppercase">{t('titles.other')}</h2>
                                <ul className="font-medium">
                                    <li className="mb-[0.15rem] text-gray-300">
                                        <a href="/blog/">{general('blog')}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm sm:text-center text-gray-400">
                            {general.rich('copyright', {
                                service: "Axsoter™",
                                weblink: (chunks) => <a href="/" className="hover:underline">{chunks}</a>
                            })}
                        </span>
                        <div className="flex mt-0 sm:justify-center items-center">
                            <a href="/youtube" className="text-[#FF0000] hover:text-white">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 28.57 20" aria-hidden="true"><g>
                                    <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" />
                                    <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="currentColor" className="text-footerBg" />
                                </g></svg>
                                <span className="sr-only">YouTube</span>
                            </a>
                            <a href="/discord" target="_blank" className="text-[#5865f2] hover:text-white ml-3">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 127.14 96.36" aria-hidden="true"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/></svg>
                                <span className="sr-only">Discord-yhteisö</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </ScrollReveal>
    )
}