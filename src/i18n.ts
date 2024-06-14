import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = 'fi';
 
  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default
  };
});