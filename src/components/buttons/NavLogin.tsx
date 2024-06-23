import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function NavLoginButton() { 
    const general = useTranslations('general');

    if (true) return (
        <Link href="/login" className="inline-block py-3 px-7 text-center cursor-pointer bg-axsoterBlue font-MatterTRIAL no-underline ease-in-out duration-700 hover:bg-brandGradient lg:rounded-full rounded-lg w-full lg:w-auto mt-3 lg:mt-0">
            {general('login')}
        </Link>
    );


}