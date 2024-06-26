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

    if (loading) {
        return <div>Loading...</div>;
    }

    return session != null ? (
        <div>
            <div className="inline-flex items-center justify-center">
                <img className="w-8 h-8 rounded-md" src={session.user.image} alt="Avatar" />
                <p className="p-2 font-bold">
                    {session.user.name}
                </p>
            </div>
        </div>
    ) : (
        <Link href="/login" className="inline-block py-3 px-7 text-center cursor-pointer bg-axsoterBlue font-MatterTRIAL no-underline ease-in-out duration-700 hover:bg-brandGradient lg:rounded-full rounded-lg w-full lg:w-auto mt-3 lg:mt-0">
            {general('login')}
        </Link>
    );
}
