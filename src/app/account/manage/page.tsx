import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function AccountManager() {
    const session = await auth()

    if (!session || !session.user) {redirect('/login')} else {
        return (
            <main className="flex gap-4 flex-col">
                <div className="flex gap-4 w-full">
                    <div className="bg-defaultBg rounded-2xl flex-1 inline-flex flex-col items-center justify-center p-7">
                        <div className="inline-flex items-center justify-center mr-auto">
                            { session.user.image ? <img className="w-16 h-16 rounded-md mr-2" src={session.user.image} alt="Avatar" /> : "" }
                            <p className="ml-2 font-bold text-xl">
                                {session.user.name}
                            </p>
                        </div>
                    </div>
                    <div className="bg-defaultBg rounded-2xl flex-1 inline-flex flex-col items-center justify-center p-7"></div>
                </div>
                <div className="flex gap-4 w-full">
                    <div className="bg-defaultBg rounded-2xl flex-1 inline-flex flex-col items-center justify-center p-7"></div>
                    <div className="bg-defaultBg rounded-2xl flex-1 inline-flex flex-col items-center justify-center p-7"></div>
                </div>
            </main>
        )
    };
}