import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction, LoaderFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { createIntlFromRequest, getIntlParamsFromRequest } from './intl';
import type { IntlShape } from 'react-intl';
import { IntlProvider } from 'react-intl';
import '~/styles/app.css';
import Layout from './components/Layout/Layout';
import type { AvatarProps } from './components/Sidebar/Avatar/Avatar';
import type { LinksProps } from './components/Sidebar/Links/Links';
import type {
  LanguageCode,
  QuickActionsProps,
} from './components/Sidebar/QuickActions/QuickActions';
import type { SidebarProps } from './components/Sidebar/Sidebar';
import requests from './utils/requests';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];

const createSidebarProps = (locale: string, intl: IntlShape) => {
  // Create Avatar
  const avatar: AvatarProps = {
    name: intl.formatMessage({ id: 'sidebar.name' }),
    subtitle: intl.formatMessage({ id: 'sidebar.subtitle' }),
    imageAlt: intl.formatMessage({ id: 'sidebar.name' }),
    imageSrc: '/resources/images/avatar.webp',
  };

  // Create Links
  const links: LinksProps = {
    about: {
      id: 'about',
      title: intl.formatMessage({ id: 'sidebar.aboutMe' }),
      url: '/',
    },
    cv: {
      id: 'cv',
      title: intl.formatMessage({ id: 'sidebar.cv' }),
      url: '/cv',
    },
  };

  // Create Quick Actions
  const quickActions: QuickActionsProps = {
    contact: {
      email: intl.formatMessage({ id: 'sidebar.email' }),
      label: intl.formatMessage({ id: 'sidebar.email' }),
    },
    resume: {
      downloadUrl: '/',
      label: intl.formatMessage({ id: 'sidebar.pdf' }),
    },
    languages: {
      active: locale as LanguageCode,
      // Should be overridden in the client
      handleChange: () => {},
      allowed: [
        {
          code: 'en',
          name: intl.formatMessage({ id: 'sidebar.lang.english' }),
        },
        { code: 'nl', name: intl.formatMessage({ id: 'sidebar.lang.dutch' }) },
        { code: 'he', name: intl.formatMessage({ id: 'sidebar.lang.hebrew' }) },
      ],
    },
  };

  const props: SidebarProps = {
    avatar,
    links,
    quickActions,
  };

  return props;
};

export const loader: LoaderFunction = async ({ request }) => {
  const { direction, locale, messages } = getIntlParamsFromRequest(request);
  const intl = createIntlFromRequest(request);
  const sidebarProps = createSidebarProps(locale, intl as IntlShape);
  return { locale, messages, direction, sidebarProps };
};

export default function App() {
  const { locale, messages, direction, sidebarProps } =
    useLoaderData<typeof loader>();

  if (sidebarProps.quickActions.languages) {
    sidebarProps.quickActions.languages.handleChange = (lang: LanguageCode) => {
      requests.cookies.setLocaleToLocalCookies(lang);
      window.location.reload();
    };
  }

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
          <Layout sidebar={sidebarProps}>
            <Outlet />
          </Layout>
        </IntlProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
