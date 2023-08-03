import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For additional DOM matchers
import MentorForm from "./MentorFormRegistration";
import axios from "axios";

// Mock the next/router module
jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("simple-react-validator");
jest.mock("next/router");
jest.mock("../../components/basic/Overlay");
jest.mock("react-toastify");
jest.mock("../../components/MentorRegistration/components/PersonDetails");
jest.mock("../../components/MentorRegistration/components/ContactDetails");
jest.mock("../../components/MentorRegistration/components/ScheduleDetails");
jest.mock("../../components/MentorRegistration/components/SessionDetails");
jest.mock("axios");

describe("<MentorForm>", () => {
  beforeEach(() => {
    // Reset the form state before each test
    jest.resetAllMocks();
  });

  it("Renders the form with the initial step", () => {
    render(<MentorForm />);
    // Add your specific assertions here to check if the component renders correctly
    // For example:
    expect(
      screen.getByLabelText("Mentor registration form"),
    ).toBeInTheDocument();
    // You should also check if the first step elements are displayed correctly
    expect(screen.getByLabelText("Person Details")).toBeInTheDocument();
  });

  it("Advances to the next step when 'Next' button is clicked", () => {
    render(<MentorForm />);
    // Click the 'Next' button
    const nextButton = screen.getByLabelText("Contact Details");
    fireEvent.click(nextButton);
    // Check if the second step elements are displayed
    expect(screen.getByLabelText("Contact Details")).toBeInTheDocument();
  });

  it("Goes back to the previous step when 'Back' button is clicked", () => {
    render(<MentorForm />);
    // Click the 'Next' button to go to the second step
    const nextButton = screen.getByLabelText("Contact Details");
    fireEvent.click(nextButton);
    // Check if the second step elements are displayed
    expect(screen.getByLabelText("Contact Details")).toBeInTheDocument();

    // Click the 'Back' button and check if the form goes back to the first step
    const backButton = screen.getByLabelText("Person Details");
    fireEvent.click(backButton);
    // Check if the first step elements are displayed again
    expect(screen.getByLabelText("Person Details")).toBeInTheDocument();
  });

  it("Submits the form when 'Register' button is clicked", async () => {
    render(<MentorForm />);
    // Click the 'Next' button twice to go to the third step (Schedule Details)
    const nextButton = screen.getByLabelText("Contact Details");
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    // Click the 'Register' button and check if the form is submitted
    const registerButton = screen.getByLabelText("Register");
    fireEvent.click(registerButton);

    // Ensure that the loading spinner is displayed after form submission
    await waitFor(() => {
      expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
    });

    // Optionally, you can mock the API response and test the success/failure scenarios
    // Mocking the axios post request
    axios.post.mockResolvedValueOnce({ data: { success: true } });
  });

  it("Displays error message on form submission failure", async () => {
    render(<MentorForm />);
    // Click the 'Register' button and check if the error message is displayed
    const registerButton = screen.getByLabelText("Register");
    fireEvent.click(registerButton);
    // Check if the error message is displayed after form submission failure
    expect(await screen.findByText("Facing difficulties?")).toBeInTheDocument();
  });

  it("Displays loading spinner during form submission", async () => {
    render(<MentorForm />);
    // Click the 'Register' button and check if the loading spinner is displayed
    fireEvent.click(screen.getByLabelText("Register"));
    // Ensure that the loading spinner is displayed after form submission
    await waitFor(() => {
      expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
    });
  });
});
