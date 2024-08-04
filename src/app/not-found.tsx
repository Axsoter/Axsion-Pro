import DefaultButton from "@/components/buttons/Default";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function NotFound() {
    const t = useTranslations('pages.404');

    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-8xl tracking-tight font-extrabold lg:text-9xl text-axsoterBlue">4<Link href="https://www.youtube.com/watch?v=jeg_TJvkSjg">0</Link>4</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold lg:text-4xl text-white">{t('title')}</p>
                    <p className="mb-4 text-lg font-light text-gray-400">{t('description')}</p>
                    <div className="max-w-fit mx-auto"><DefaultButton href="/">{t('button')}</DefaultButton></div>
                </div>   
            </div>
        </section>
    )
}