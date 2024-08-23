import AxsoterLogo from '@/components/other/AxsoterLogo';
import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations('pages.admin.dashboard');
    return (
      <main className="min-h-screen">
        <div className="h-screen my-auto flex items-center justify-center flex-col">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pb-10">
              <div className="flex items-center font-semibold text-lg py-4 gap-x-4">
                <AxsoterLogo />
              </div>
              <div className="max-w-lg w-full bg-defaultBg rounded-2xl px-6 py-5 border-2 border-dotted border-axsoterBlue">
                <strong className="text-[1.5rem]">
                  {t('info')}
                </strong>
              </div>
              <div className="max-w-lg w-full bg-defaultBg rounded-2xl px-6 py-5 border-2 border-dotted border-axsoterBlue">
                <strong className="text-[1.5rem]">
                  {t('stats')}
                </strong>
              </div>
              <div className="max-w-lg w-full bg-defaultBg rounded-2xl px-6 py-5 border-2 border-dotted border-axsoterBlue">
                <strong>{t('welcome')}</strong>
              </div>
              <div className="max-w-lg w-full bg-defaultBg rounded-2xl px-6 py-5 border-2 border-dotted border-axsoterBlue">
                <svg
                 xmlns="http://www.w3.org/2000/svg"
                  height="48px"
                  className="w-10 h-10 bg-axsoterBlue rounded-lg mr-4"
                  viewBox="0 -960 960 960"
                  width="48px"
                  fill="currentColor"
                >
                  <path d="M286.79-81Q257-81 236-102.21t-21-51Q215-183 236.21-204t51-21Q317-225 338-203.79t21 51Q359-123 337.79-102t-51 21Zm400 0Q657-81 636-102.21t-21-51Q615-183 636.21-204t51-21Q717-225 738-203.79t21 51Q759-123 737.79-102t-51 21ZM205-801h589.07q22.97 0 34.95 21 11.98 21-.02 42L694-495q-11 19-28.56 30.5T627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Z"/>              
                </svg>
              </div>
              <div className="max-w-lg w-full bg-defaultBg rounded-2xl px-6 py-5 border-2 border-dotted border-axsoterBlue">
              <svg
                 xmlns="http://www.w3.org/2000/svg"
                  height="48px"
                  className="w-10 h-10 bg-axsoterBlue rounded-lg mr-4"
                  viewBox="0 -960 960 960"
                  width="48px"
                  fill="currentColor"
                >
                  <path d="M286.79-81Q257-81 236-102.21t-21-51Q215-183 236.21-204t51-21Q317-225 338-203.79t21 51Q359-123 337.79-102t-51 21Zm400 0Q657-81 636-102.21t-21-51Q615-183 636.21-204t51-21Q717-225 738-203.79t21 51Q759-123 737.79-102t-51 21ZM205-801h589.07q22.97 0 34.95 21 11.98 21-.02 42L694-495q-11 19-28.56 30.5T627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Z"/>              
                </svg>
              </div>
            </div>
        </div>
      </main>
    )
}