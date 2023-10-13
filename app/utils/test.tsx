import { unstable_createRemixStub } from "@remix-run/testing";
import type { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";
import type { ReactElement } from "react";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper"> & { path?: string }
) => {
  let RemixStub = unstable_createRemixStub([
    {
      path: options?.path || "/",
      Component: () => ui,
    },
  ]);

  return render(<RemixStub />, { ...options });
};

export * from "@testing-library/react";
export { customRender as render };
