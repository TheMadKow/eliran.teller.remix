import type { IntlShape } from "@formatjs/intl";
import { createIntl, createIntlCache } from "@formatjs/intl";
import { intlMapping } from "./intlMap";
import type { LoaderFunction } from "@remix-run/node";

const cache = createIntlCache();

export const getMessages = (locale: string) =>
  intlMapping[locale]?.messages ?? intlMapping["en"].messages;

export const getDirection = (locale: string) =>
  intlMapping[locale]?.direction ?? intlMapping["en"].direction;

export type Next = (intl: IntlShape) => ReturnType<LoaderFunction>;

export let withIntl = (
  locale: string,
  messages: Record<string, string>,
  next: Next,
) =>
  next(
    createIntl(
      {
        locale: "en",
        defaultLocale: "en",
        messages,
      },
      cache,
    ),
  );
