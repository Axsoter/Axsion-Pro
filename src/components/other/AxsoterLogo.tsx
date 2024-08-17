import Image from "next/image";
import Link from "next/link";

interface LogoProps {
    color?: string
}

export default function AxsoterLogo({color}: LogoProps) {
    return (
        <Link className="font-MatterTRIAL cursor-pointer flex items-center justify-center gap-4 lg:min-w-48 lg:mx-auto" href='/'>
            <Image src={`/assets/img/${(color == "black") ? "axsoter_black" : (color == "white") ? "axsoter_white" : "axsoter-no-background"}.png`} width={45} height={45} className="w-[45px]" alt="Logo" />
            <strong className="text-[2rem]">
                Axsoter
            </strong>
        </Link>
    )
}