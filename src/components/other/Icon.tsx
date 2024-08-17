import { ReactNode } from "react";

interface IconProps {
    children: ReactNode,
    size?: number
}

export default function Icon({children, size = 6}: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            className={`w-${size} h-${size}`}
            viewBox="0 -960 960 960"
            width="48px"
            fill="currentColor"
        >
            {children}
        </svg>
    )
}

// <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/></svg>