// loosely based on this solution: https://github.com/hugo/remix-formatjs-example/tree/main
// for react-intl usage: https://formatjs.io/docs/react-intl

export * from 'react-intl';
export { IntlKeys } from './intlKeys';
export type { intlMapping, IntlDir, IntlMessage, IntlMap } from './intlMap';
export { getDirection, getMessages, withIntl } from './intl';
