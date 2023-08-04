import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

// Test the Button component
describe("Button component", () => {
  // Test button click event
  it("should call onClick when the button is clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button text="Test Button" onClick={onClickMock} />,
    );

    const button = getByText("Test Button");
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  // Test button with LeftIcon
  it("should render LeftIcon when provided", () => {
    // You can use a dummy icon component or create a mock component for testing
    const LeftIcon = () => <span data-testid="left-icon">Icon</span>;

    const { getByTestId, getByText } = render(
      <Button text="Button with Icon" LeftIcon={LeftIcon} />,
    );

    const iconElement = getByTestId("left-icon");
    const buttonText = getByText("Button with Icon");

    expect(iconElement).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  });

  // Test button variant classes
  it("should have the correct variant class applied", () => {
    const { getByText } = render(
      <Button text="Primary Button" variant="primary" />,
    );
    const primaryButton = getByText("Primary Button");

    expect(primaryButton).toHaveClass("btnPrimary");

    const { getByText: getByTextSecondary } = render(
      <Button text="Secondary Button" variant="secondary" />,
    );
    const secondaryButton = getByTextSecondary("Secondary Button");

    expect(secondaryButton).toHaveClass("btnSecondary");
  });
});
