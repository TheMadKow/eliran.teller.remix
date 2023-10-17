import Cookies from 'js-cookie';

const localeCookieKey = 'eliran-teller-locale';

function getHeaderLocale(request: Request) {
  const lang = request.headers.get('Accept-Language')?.split(',').shift();
  return lang?.split('-').shift();
}

function splitCookie(cookie: string): Record<string, string> {
  const keyVal = cookie.split('; ');
  const pairs: { [key: string]: string } = {};
  keyVal.forEach((element) => {
    const split = element.split('=');
    pairs[split[0]] = split[1];
  });
  return pairs;
}

function getCookieLocale(request: Request) {
  const cookie = request.headers.get('Cookie') || '';
  const pairs = splitCookie(cookie);
  return pairs[localeCookieKey];
}

function setCookieLocale(locale: string) {
  Cookies.set(localeCookieKey, locale);
}

export default {
  headers: {
    getLocaleFromAcceptLanguage: getHeaderLocale,
  },
  cookies: {
    getLocaleFromHeaderCookies: getCookieLocale,
    setLocaleToLocalCookies: setCookieLocale,
  },
};
