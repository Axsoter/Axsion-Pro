import Image from "next/image";
import Link from "next/link";

export default function AxsoterLogo() {
    return (
        <Link className="font-MatterTRIAL cursor-pointer flex items-center justify-center gap-4 lg:min-w-48 lg:mx-auto" href='/'>
            <Image src="/assets/img/icon.webp" width={45} height={45} className="w-[45px]" alt="Logo" />
            <strong className="text-[2rem]">
                Axsoter
            </strong>
        </Link>
    )
}