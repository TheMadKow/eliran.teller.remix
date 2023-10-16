import Cookies from "js-cookie";

const localeCookieKey = "eliran-teller-locale";

function getHeaderLocale(request: Request) {
  const lang = request.headers.get("Accept-Language")?.split(",").shift();
  return lang?.split("-").shift();
}

function getCookieLocale(request: Request) {
  const headers = request.headers.get("Cookie") || "";
  const keyVal = headers.split("; ");
  const pairs: { [key: string]: string } = {};
  keyVal.forEach((element) => {
    const split = element.split("=");
    pairs[split[0]] = split[1];
  });
  return pairs[localeCookieKey];
}

function setCookieLocale(locale: string) {
  Cookies.set(localeCookieKey, locale);
}

export default {
  headers: {
    getLocale: getHeaderLocale,
  },
  cookies: {
    getLocale: getCookieLocale,
    setLocale: setCookieLocale,
  },
};
