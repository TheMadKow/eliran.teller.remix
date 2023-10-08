import type { MetaFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import { useChangeLanguage } from "remix-i18next";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
    const { t, i18n } = useTranslation();

    const changeLang = (lang: string) => {
      i18n.changeLanguage(lang, (err) => {
        console.log(err)
      })
    }

    return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>{t('menu.about')}</h1>
      <button onClick={() => changeLang('he')}>HE</button>
      <button onClick={() => changeLang('en')}>EN</button>
      <button onClick={() => changeLang('nl')}>NL</button>
      <h1>{t('menu.about')}</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
