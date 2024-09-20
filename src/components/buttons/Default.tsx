import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
    href?: string | undefined,
    children: ReactNode,
    className?: string | undefined
}

export default function DefaultButton({href, children, className}: ButtonProps) {
    return href ? (
        <Link href={href} className={`inline-flex items-center justify-center gap-x-2 shadow-[-2px_0px_20px] shadow-axsoterBlue py-3 px-7 text-center cursor-pointer bg-axsoterBlue font-MatterTRIAL no-underline transition-all duration-300 hover:scale-110 rounded-full w-full h-full ` + className}>
            {children}
        </Link>
    ) : (
        <div className={`inline-flex items-center justify-center gap-x-2 shadow-[-2px_0px_20px] shadow-axsoterBlue py-3 px-7 text-center cursor-pointer bg-axsoterBlue font-MatterTRIAL no-underline transition-all duration-300 hover:scale-110 rounded-full w-full h-full ` + className}>
            {children}
        </div>
    );
}