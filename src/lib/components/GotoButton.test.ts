import { cleanup, fireEvent, render, waitFor } from "@testing-library/svelte";
import { afterEach, describe, expect, it, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import GotoButton from "./GotoButton.svelte";

const fetchMock = createFetchMock(vi);
fetchMock.enableMocks();

describe("UserMenu", () => {
  afterEach(() => {
    cleanup();
  });

  it("calls the logout endpoint", async () => {
    const { findByText, component } = render(GotoButton);

    const testEventHandler = vi.fn();

    component.$on("test-event", testEventHandler);

    await findByText("Goto Test").then(fireEvent.click);

    await waitFor(() => {
      expect(testEventHandler).toHaveBeenCalledOnce();
    });
  });
});
