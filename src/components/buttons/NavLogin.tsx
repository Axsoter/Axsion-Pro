import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import DefaultButton from "./Default";

interface User {
    name: string;
    email: string;
    image: string;
}

interface Session {
    user: User;
}

export default function NavLoginButton() { 
    const general = useTranslations('general');
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);
    const [popupState, setPopupState] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/auth/session');
                const json = await res.json();
                setSession(json);
            } catch (error) {
                console.error('Error fetching session:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    function openPopup() {
        setPopupState(!popupState);
    }
    
    const truncateName = (name: string, length: number) => 
        name.length > length - 3 ? name.substring(0, length - 5) + "..." : name;      

    return (session != null && !loading) ? (
        <div className="flex items-center justify-center flex-col lg:flex-row">
            <hr className="border-gray-700 lg:hidden rounded-full my-3 w-full" />
            <div className="flex items-center lg:justify-center w-full lg:w-auto">
                <button onClick={openPopup} className="flex relative items-center justify-center mr-1.5 p-2 lg:rounded-xl rounded-lg ease-in-out duration-300 hover:bg-slate-600/80">
                    <div className="inline-flex items-center justify-center">
                        <img className="w-8 h-8 rounded-md" src={session.user.image} alt="Avatar" />
                        <p className={`pl-2 font-bold max-lg:break-words ${session.user.name.length >= 8 ? "lg:text-sm text-base" : "text-base"}`}>
                            {window.innerWidth >= 1024 ? truncateName(session.user.name, 10) : session.user.name}
                        </p>
                    </div>
                </button>

                {/* Popup */}

                <div className={`absolute ${popupState ? "" : "hidden"} left-0 p-4 lg:top-12 top-[33.75rem] lg:w-72 w-full mt-2 origin-top-right bg-defaultBg backdrop-blur-sm border-2 border-dotted border-axsoterBlue rounded-lg font-normal text-start`}>
                    <div className="flex items-center justify-center">
                        <div className="inline-flex items-center justify-center mr-auto">
                            <img className="w-8 h-8 rounded-md" src={session.user.image} alt="Avatar" />
                            <p className="ml-2 font-bold break-words max-w-36">
                                {session.user.name}
                            </p>
                        </div>
                        <Link href="/account/manage" className="flex items-center justify-center lg:ml-1.5 ml-auto p-2 lg:rounded-xl rounded-lg ease-in-out duration-300 hover:bg-slate-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="48px"
                                className="w-6 h-6"
                                viewBox="0 -960 960 960"
                                width="48px"
                                fill="currentColor"
                            >
                                <path d="M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z"/>
                            </svg>
                        </Link>
                    </div>
                    <hr className="border-gray-700 rounded-full my-3 w-full" />
                    <a href="/api/auth/signout" className="rounded p-2 mb-2 flex items-center gap-x-2 ease-in-out duration-300 hover:bg-slate-600 bg-slate-800">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="48px"
                            className="w-5 h-5"
                            viewBox="0 -960 960 960"
                            width="48px"
                            fill="currentColor"
                        >
                            <path d="m260-520 220-360 220 360H260ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-20v-320h320v320H120Zm580-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-500-20h160v-160H200v160Zm202-420h156l-78-126-78 126Zm78 0ZM360-340Zm340 80Z"/>
                        </svg>

                        Your services
                    </a>
                    <a href="/api/auth/logout" className="rounded p-2 mt-2 flex items-center gap-x-2 ease-in-out duration-300 hover:bg-slate-600 bg-slate-800">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="48px"
                            className="w-5 h-5"
                            viewBox="0 -960 960 960"
                            width="48px"
                            fill="currentColor"
                        >
                            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/>
                        </svg>

                        Logout
                    </a>
                </div>
                
                <Link href="/billing/cart" className="flex items-center justify-center lg:ml-1.5 ml-auto p-3 lg:rounded-xl rounded-lg ease-in-out duration-300 hover:bg-slate-600/80">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48px"
                        className="w-6 h-6"
                        viewBox="0 -960 960 960"
                        width="48px"
                        fill="currentColor"
                    >
                        <path d="M286.79-81Q257-81 236-102.21t-21-51Q215-183 236.21-204t51-21Q317-225 338-203.79t21 51Q359-123 337.79-102t-51 21Zm400 0Q657-81 636-102.21t-21-51Q615-183 636.21-204t51-21Q717-225 738-203.79t21 51Q759-123 737.79-102t-51 21ZM205-801h589.07q22.97 0 34.95 21 11.98 21-.02 42L694-495q-11 19-28.56 30.5T627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Z"/>
                    </svg>
                </Link>
            </div>
        </div>
    ) : (
        <div className="w-full lg:w-fit mt-3 lg:mt-0">
            <DefaultButton href="/login" className="hover:scale-100 lg:hover:scale-110">
                {general('login')}
            </DefaultButton>
        </div>
    );
}
