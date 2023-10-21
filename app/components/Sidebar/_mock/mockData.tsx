import type { SidebarProps } from '../Sidebar';

export const mockSideNavigation: SidebarProps = {
  avatar: {
    imageSrc: '../../../../public/resources/images/avatar.webp',
    imageAlt: 'Eliran Teller (Image)',
    name: `Eliran Teller`,
    subtitle: 'Software Developer',
  },
  links: {
    about: {
      id: 'about',
      title: 'About Me',
      url: '/about',
    },
    cv: {
      id: 'cv',
      title: 'Resume',
      url: '/resume',
    },
  },
  quickActions: {
    languages: {
      handleChange: (lang) => console.log('lang click: ', lang),
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
