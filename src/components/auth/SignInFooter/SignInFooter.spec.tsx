import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import jest-dom for extended assertions
import { SignInFooter } from "./SignInFooter";
import { PRIVACY_POLICY_ROUTE, TERMS_OF_SERVICE_ROUTE } from "@/routes/public";
import { describe, it, expect } from "@jest/globals";

describe("SignInFooter component", () => {
  it("renders the agreement text and links correctly", () => {
    const { getByText, getByRole } = render(<SignInFooter />);

    // Check if the agreement text is rendered
    expect(
      getByText(
        /By continuing with Google, Github, or Email, you agree to TaskScheduler's/i,
      ),
    ).toBeInTheDocument();

    // Check if the Terms of Service link is rendered with the correct route
    expect(getByRole("link", { name: /Terms of Service/i })).toHaveAttribute(
      "href",
      TERMS_OF_SERVICE_ROUTE,
    );

    // Check if the Privacy Policy link is rendered with the correct route
    expect(getByRole("link", { name: /Privacy Policy/i })).toHaveAttribute(
      "href",
      PRIVACY_POLICY_ROUTE,
    );
  });

  /* it("navigates to the correct route when Terms of Service link is clicked", () => {
    const { getByRole } = render(<SignInFooter />);

    // Mock the window.location.assign method
    const assignMock = jest.fn();
    Object.defineProperty(window, "location", {
      value: { assign: assignMock },
      writable: true,
    });

    // Click on the Terms of Service link
    fireEvent.click(getByRole("link", { name: /Terms of Service/i }));

    // Expect that window.location.assign is called with the correct route
    expect(assignMock).toHaveBeenCalledWith(TERMS_OF_SERVICE_ROUTE);
  });

  it("navigates to the correct route when Privacy Policy link is clicked", () => {
    const { getByRole } = render(<SignInFooter />);

    // Mock the window.location.assign method
    const assignMock = jest.fn();
    Object.defineProperty(window, "location", {
      value: { assign: assignMock },
      writable: true,
    });

    // Click on the Privacy Policy link
    fireEvent.click(getByRole("link", { name: /Privacy Policy/i }));

    // Expect that window.location.assign is called with the correct route
    expect(assignMock).toHaveBeenCalledWith(PRIVACY_POLICY_ROUTE);
  });
  */
});
