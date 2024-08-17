import Image from "next/image";

interface IconProps {
    color?: string,
    className?: string
}

export default function AxsoterIcon({color, className}: IconProps) {
    return (
        <Image src={`/assets/img/${(color == "black") ? "axsoter_black" : (color == "white") ? "axsoter_white" : "axsoter-no-background"}.png`} width={45} height={45} className={className} alt="Logo" />
    )
}