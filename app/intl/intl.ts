import type { IntlShape } from '@formatjs/intl';
import { createIntl, createIntlCache } from '@formatjs/intl';
import { IntlDir, intlMapping } from './intlMap';
import type { LoaderFunction } from '@remix-run/node';
import requests from '~/utils/requests';

const defaultLocale = 'en';
const cache = createIntlCache();

// get messages, english as baseline
export const getMessages = (locale: string) =>
  locale === defaultLocale
    ? intlMapping[defaultLocale].messages
    : {
        ...intlMapping[defaultLocale].messages,
        ...intlMapping[locale]?.messages,
      };

export const getDirection = (locale: string) =>
  intlMapping[locale]?.direction ?? IntlDir.LeftToRight;

export type Next = (intl: IntlShape) => ReturnType<LoaderFunction>;

export const getIntlParamsFromRequest = (request: Request) => {
  const locale =
    requests.cookies.getLocaleFromHeaderCookies(request) ||
    requests.headers.getLocaleFromAcceptLanguage(request) ||
    'en';
  const messages = getMessages(locale);
  const direction = getDirection(locale);
  return { locale, messages, direction };
};

export const createIntlFromRequest = (request: Request) => {
  const locale =
    requests.cookies.getLocaleFromHeaderCookies(request) ||
    requests.headers.getLocaleFromAcceptLanguage(request) ||
    'en';
  const messages = getMessages(locale);

  return createIntl(
    {
      locale: defaultLocale,
      defaultLocale: defaultLocale,
      messages,
    },
    cache,
  );
};

export const withIntl = (
  locale: string,
  messages: Record<string, string>,
  next: Next,
) =>
  next(
    createIntl(
      {
        locale: defaultLocale,
        defaultLocale: defaultLocale,
        messages,
      },
      cache,
    ),
  );
