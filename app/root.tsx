import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { IntlDir, IntlMessage } from "./localization";
import { getMessages, getDirection } from "./localization";
import { IntlProvider } from "react-intl";
import requests from "./utils/requests";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

interface LoaderProps {
  locale: string;
  messages: IntlMessage;
  direction: IntlDir;
}
export const loader: LoaderFunction = async ({ request }) => {
  const locale = requests.cookies.getLocale(request); // ?? requests.headers.getLocale(request) ?? "en";
  const messages = getMessages(locale);
  const direction = getDirection(locale);

  return { locale, messages, direction };
};

export default function App() {
  const { locale, messages, direction } = useLoaderData<LoaderProps>();

  console.log({ locale, messages, direction });

  const setLanguage = (lang: string) => {
    requests.cookies.setLocale(lang);
  };

  return (
    <html lang={locale} dir={direction}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <IntlProvider locale={locale} messages={messages}>
          <a href="#" onClick={() => setLanguage("he")}>
            HE |
          </a>
          <a href="#" onClick={() => setLanguage("nl")}>
            NL |
          </a>
          <a href="#" onClick={() => setLanguage("en")}>
            EN
          </a>
          <Outlet />
        </IntlProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
