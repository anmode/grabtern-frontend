import axios from "axios";

export async function checkUserNameAvailability(userName) {
  try {
    const value = userName.trim();

    if (value) {
      await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentor?username=${value}`,
      );
      return { status: true, message: "User name is available" };
    } else {
      return { status: false, message: "Enter a valid value" };
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { status: false, message: error.response.data.message };
    } else {
      return { status: false, message: "An error occurred" };
    }
  }
}
