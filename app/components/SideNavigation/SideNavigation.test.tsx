import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SideNavigation from "./SideNavigation";
import { mockSideNavigation } from "./_mock/mockData";
import { RemixBrowser } from "@remix-run/react";

describe("<SideNavigation/>", () => {
  it("should render", async () => {
    // ARRANGE
    render(<SideNavigation {...mockSideNavigation} />, {
      wrapper: RemixBrowser,
    });

    // ACT
    const menu = await screen.findByRole("menu");

    // ASSERT
    expect(menu).toBeDefined();
  });
});
