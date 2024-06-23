import LoginForm from '@/components/blocks/login/LoginForm';
import AxsoterLogo from '@/components/other/AxsoterLogo';
 
export default function LoginPage() {
  return (
    <main className="grow min-h-screen">
        <div className="h-screen my-auto flex items-center justify-center flex-col">
            <div className="flex items-center font-semibold text-lg py-4 gap-x-2">
                <AxsoterLogo />
            </div>
            <div className="max-w-lg w-full bg-footerBg rounded-2xl px-6 py-5">
                <LoginForm />
            </div>
        </div>
    </main>
  );
}