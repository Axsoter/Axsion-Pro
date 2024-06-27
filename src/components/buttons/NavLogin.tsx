import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations } from 'next-intl';

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

    return (session != null && !loading) ? (
        <div className="flex items-center justify-center flex-col lg:flex-row">
            <hr className="border-gray-700 lg:hidden rounded-full my-3 w-full" />
            <div className="flex items-center lg:justify-center w-full lg:w-auto">
                <button onClick={openPopup} className="flex relative items-center justify-center">
                    <div className="inline-flex items-center justify-center mr-1.5 p-2 lg:rounded-xl rounded-lg ease-in-out duration-300 hover:bg-slate-600/80">
                        <img className="w-8 h-8 rounded-md" src={session.user.image} alt="Avatar" />
                        <p className={`pl-2 font-bold ${session.user.name.length >= 10 ? "text-sm" : "text-base"}`}>
                            {session.user.name}
                        </p>
                    </div>
                    <div className={`absolute ${popupState ? "" : "hidden"} left-0 top-12 w-60 mt-2 origin-top-right bg-navbarBg backdrop-blur-sm border-2 border-dotted border-axsoterBlue rounded-lg font-normal text-start`}>
                        <div className="p-2">
                            <a href="/api/auth/signout" className="rounded p-2 hover:bg-secondary-300 flex gap-x-2 ease-in-out duration-300 hover:bg-slate-600">logout</a>
                        </div>
                    </div>
                </button>
                
                <Link href="/billing/cart" className="flex items-center justify-center lg:ml-1.5 ml-auto p-3 lg:rounded-xl rounded-lg ease-in-out duration-300 hover:bg-slate-600/80">
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" className="w-6 h-6" viewBox="0 -960 960 960" width="48px" fill="currentColor"><path d="M286.79-81Q257-81 236-102.21t-21-51Q215-183 236.21-204t51-21Q317-225 338-203.79t21 51Q359-123 337.79-102t-51 21Zm400 0Q657-81 636-102.21t-21-51Q615-183 636.21-204t51-21Q717-225 738-203.79t21 51Q759-123 737.79-102t-51 21ZM205-801h589.07q22.97 0 34.95 21 11.98 21-.02 42L694-495q-11 19-28.56 30.5T627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Z"/></svg>
                </Link>
            </div>
        </div>
    ) : (
        <Link href="/login" className="inline-block py-3 px-7 text-center cursor-pointer bg-axsoterBlue font-MatterTRIAL no-underline ease-in-out duration-700 hover:bg-brandGradient lg:rounded-full rounded-lg w-full lg:w-auto mt-3 lg:mt-0">
            {general('login')}
        </Link>
    );
}
