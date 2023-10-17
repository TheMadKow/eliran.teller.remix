import type { IntlShape } from '@formatjs/intl';
import { createIntl, createIntlCache } from '@formatjs/intl';
import { IntlDir, intlMapping } from './intlMap';
import type { LoaderFunction } from '@remix-run/node';

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

export let withIntl = (
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
