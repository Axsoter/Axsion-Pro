import { signIn } from "@/auth"
import AxsoterIcon from "@/components/other/AxsoterIcon"
import { useTranslations } from 'next-intl';

export default function LoginForm({queryParams}: {queryParams: { [key: string]: string | undefined }}) {
    const t = useTranslations('pages.login');
    const general = useTranslations('general');


    return (
        <div>
            <h2 className="text-lg font-semibold">{t('title')}</h2>
            <div className="mt-3">
                <form
                    action={async () => {
                        "use server"
                        await signIn("keycloak", {redirectTo: queryParams.callbackUrl})
                    }}
                >
                    <button type="submit" className="mb-4 py-2 px-4 w-full rounded-md text-center font-medium !flex gap-x-2 items-center justify-center bg-axsoterBlue hover:bg-brandGradient">
                        <AxsoterIcon color="white" className="h-6 w-6" />
                        {t('signInAxsoterID')}
                    </button>
                </form>
                <a href="" className="mt-4 py-2 px-4 rounded-md text-center font-medium !flex gap-x-2 items-center justify-center bg-slate-600">
                    {t('migrate')}
                </a>
            </div>
            <div className="flex items-center my-2">
                <div className="w-full h-0.5 bg-white" />
                <div className="px-5 text-center">{general('or')}</div>
                <div className="w-full h-0.5 bg-white" />
            </div>
            <div>
                <form
                    action={async () => {
                        "use server"
                        await signIn("discord", {redirectTo: queryParams.callbackUrl})
                    }}
                >
                    <button type="submit" className="mt-3 py-2 px-4 w-full rounded-md text-center font-medium !flex gap-x-2 items-center justify-center bg-slate-600">
                        <svg className="w-5 h-5 text-white" viewBox="0 0 127.14 96.36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path className="cls-1" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"></path>
                            </g>
                        </svg>
                        {t('signInWith', {service: "Discord"})}
                    </button>
                </form>
            </div>
        </div>
    )
}