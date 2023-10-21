import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { createIntlFromRequest } from '~/intl';

export const loader: LoaderFunction = async ({ request }) => {
  const intl = createIntlFromRequest(request);
  return { boo: intl.formatMessage({ id: 'menu.test' }) };
};

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return <div>'boo'</div>;
}
