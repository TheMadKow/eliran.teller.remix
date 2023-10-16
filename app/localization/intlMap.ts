import fs from "fs";
import path from "path";

export enum IntlDir {
  RightToLeft = "rtl",
  LeftToRight = "ltr",
}

export type IntlMessage = Record<string, string>;

export interface IntlMap {
  messages: IntlMessage;
  direction: IntlDir;
}

function readLocaleFile(locale: string) {
  return JSON.parse(
    fs.readFileSync(
      path.resolve(
        process.cwd(),
        `app/localization/translations/${locale}.json`
      ),
      "utf-8"
    )
  ) as IntlMessage;
}

export const intlMapping: Record<string, IntlMap> = {
  en: {
    direction: IntlDir.LeftToRight,
    messages: readLocaleFile("en"),
  },
  he: {
    direction: IntlDir.RightToLeft,
    messages: readLocaleFile("he"),
  },
  nl: {
    direction: IntlDir.LeftToRight,
    messages: readLocaleFile("nl"),
  },
};
