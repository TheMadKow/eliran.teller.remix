import { CogIcon, FaceIcon } from '~/components/Icons';
import type { SidebarProps } from '../Sidebar';

export const mockSideNavigation: SidebarProps = {
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
    languages: {
      onChange: (lang) => console.log('lang click: ', lang),
      active: 'en',
      allowed: [
        { code: 'en', name: 'English' },
        { code: 'nl', name: 'Nederlands' },
        { code: 'he', name: 'עברית' },
      ],
    },
    resume: {
      downloadUrl: '~/resources/pdfs/test.pdf',
      label: 'PDF',
    },
    contact: {
      email: 'eliran.teller@gmail.com',
      label: 'eliran.teller@gmail.com',
    },
  },
};
