import { signIn } from "@/auth"

export default function LoginForm() {
    return (
        <div>
            <h2 className="text-lg font-semibold">Login to continue</h2>
            <form
                action={async () => {
                    "use server"
                    await signIn("keycloak")
                }}
            >
                <button type="submit" className="mt-3 py-2 px-4 w-full rounded-md text-center font-medium !flex gap-x-2 items-center justify-center bg-axsoterBlue hover:bg-brandGradient">                    
                    Sign in with Axsoter ID
                </button>
            </form>
            <div className="flex items-center my-2">
                <div className="w-full h-0.5 bg-white"></div>
                <div className="px-5 text-center">or</div>
                <div className="w-full h-0.5 bg-white"></div>
            </div>
            <a href="" className="mt-3 py-2 px-4 rounded-md text-center font-medium !flex gap-x-2 items-center justify-center bg-slate-600">                    
                Migrate from legacy account
            </a>
        </div>
    )
}