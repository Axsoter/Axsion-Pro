import {getRequestConfig} from 'next-intl/server';
import { cookies } from 'next/headers';

const locale = cookies().get('lang')?.value;
 
export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = cookies().get('lang')?.value ? cookies().get('lang')?.value : "debug";
 
  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default
  };
});