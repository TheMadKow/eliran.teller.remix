import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '~/utils/test';
import SideNavigation from './Sidebar';
import { mockSideNavigation } from './_mock/mockData';
import Avatar from './Avatar/Avatar';

describe('<SideNavigation/>', async () => {
  afterEach(() => {
    cleanup();
  });

  it('should render component', async () => {
    // ARRANGE
    render(<SideNavigation {...mockSideNavigation} />);

    // ACT + ASSERT
    await screen.findByRole('menu');
  });

  it('should render (sub) components correctly', async () => {
    // ARRANGE
    render(<SideNavigation {...mockSideNavigation} />);

    // ACT
    const subSections = await screen.findAllByRole('document');

    // ASSERT
    expect(subSections.length).toBe(3);
  });

  describe('<Avatar />', async () => {
    it('should render correctly', async () => {
      // ARRANGE
      render(<Avatar {...mockSideNavigation.avatar} />);

      // ACT + ASSERT
      await screen.findByRole('document');
    });

    it('should render texts correctly', async () => {
      // ARRANGE
      render(<Avatar {...mockSideNavigation.avatar} />);

      // ACT + ASSERT
      await screen.findByText(mockSideNavigation.avatar.name);
      await screen.findByText(mockSideNavigation.avatar.subtitle);
    });

    it('should render image correctly', async () => {
      // ARRANGE
      render(<Avatar {...mockSideNavigation.avatar} />);

      // ACT + ASSERT
      const image = await screen.findByRole('img');
      expect(image.getAttribute('src')).toBe(
        mockSideNavigation.avatar.imageSrc,
      );
      expect(image.getAttribute('alt')).toBe(
        mockSideNavigation.avatar.imageAlt,
      );
    });
  });
});
