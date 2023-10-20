import { CogIcon, FaceIcon } from '~/components/Icons';
import type { SideNavigationProps } from '../SideNavigation';

export const mockSideNavigation: SideNavigationProps = {
  avatar: {
    imageSrc: '../../../../public/resources/images/avatar.webp',
    imageAlt: 'Eliran Teller (Image)',
    name: `Eliran Teller`,
    subtitle: 'Software Developer',
  },
  links: {
    links: [
      {
        id: 'about',
        title: 'About Me',
        url: '/about',
        Icon: (props) => <FaceIcon {...props} />,
      },
      {
        id: 'resume',
        title: 'Resume',
        url: '/resume',
        Icon: (props) => <CogIcon {...props} />,
      },
    ],
  },
  quickActions: {
    language: {
      onChange: () => console.log(''),
      active: 'en',
      allowed: [
        { code: 'en', name: 'English' },
        { code: 'nl', name: 'Nederlands' },
        { code: 'he', name: 'עברית' },
      ],
    },
    resume: {
      downloadUrl: '#',
      label: 'PDF',
    },
    contact: {
      email: 'email@gmail.com',
      label: 'Email@gmail.com',
    },
  },
};
