import axios from "axios";

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = resolve;
    document.body.appendChild(script);
  });
};

const createCustomEvent = (message, number) => {
  return document.dispatchEvent(
    new CustomEvent("razorpay", {
      detail: {
        status: number,
        message: message,
      },
    }),
  );
};

const bookedSession = async (
  paymentProof,
  sessionDetails,
  mentorDetail,
  selectedDay,
  selectedTime,
) => {
  console.log("payment proof", paymentProof);
  try {
    const requestData = {
      mentorUsername: mentorDetail.username,
      sessionID: sessionDetails._id,
      sessionDate: new Date(selectedDay).toDateString(),
      sessionTime: selectedTime,
      paymentProof: paymentProof,
    };

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/bookSessionMail`,
      requestData,
      { withCredentials: true },
    );

    console.log("response", response);

    if (response.data) {
      console.log("You have successfully booked a session!");
      // window.location.href = "/";
    } else {
      console.error(
        "Error booking session: Unexpected response from the server.",
      );
    }
  } catch (error) {
    if (error.response?.data?.message) {
      // toast.error(error.response.data.message);
      console.error("Error booking session:", error.response.data.message);
    } else {
      // toast.error("Error booking session: An unexpected error occurred.");
      console.error("Error booking session:", error);
    }
  }
};

// const verifyOrder = async (orderDetails, sessionDetails, mentorDetail, selectedDay, selectedTime) => {
//   try {
//     const response = await axios.post(
//       `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/payment/verifyOrder`,
//       orderDetails,
//     );
//     if (response.status == 200) {
//       // createCustomEvent('Payment has been verified', 0);
//       bookedSession(sessionDetails, mentorDetail, selectedDay, selectedTime, orderDetails)
//     } else {
//       createCustomEvent('Payment could not be verified', 1);
//     }
//   } catch (err) {
//     createCustomEvent('Payment could not be verified', 1);
//   }
// };

const createRazorpayObject = async (
  sessionDetails,
  mentorDetail,
  selectedDay,
  selectedTime,
) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/payment/createOrder`,
    sessionDetails,
  );
  const { id, amount, currency, notes } = response.data;
  const options = {
    key: "rzp_test_T6Il7sPWsuqEPB",
    amount: amount,
    currency: "INR",
    name: "Grabtern",
    description: notes?.description,
    image:
      "https://th.bing.com/th/id/OIP.cs4xLIcOvEpEa8xYyPjzfwAAAA?rs=1&pid=ImgDetMain",
    order_id: id,
    handler: function (paymentProof) {
      bookedSession(
        paymentProof,
        sessionDetails,
        mentorDetail,
        selectedDay,
        selectedTime,
      );
    },
    prefill: {
      //user information need to be added here using login info of user
      contact: "8604078497",
      name: "Sayyed Arib",
      email: "sayyedaribhussain4321@gmail.com",
    },
    notes: notes,
    theme: {
      color: "#2300a3",
    },
  };
  const razorpayObject = new Razorpay(options);

  razorpayObject.on("payment.failed", function (response) {
    // createCustomEvent('Payment failed', 1);
    alert("Payment failed");
  });

  return razorpayObject;
};

let razorpayObjectPromise;

export const getRazorpayObject = async (
  sessionDetails,
  mentorDetail,
  selectedDay,
  selectedTime,
) => {
  if (!razorpayObjectPromise) {
    // Load the script and create the Razorpay object only once
    razorpayObjectPromise = loadRazorpayScript().then(() =>
      createRazorpayObject(
        sessionDetails,
        mentorDetail,
        selectedDay,
        selectedTime,
      ),
    );
  }

  return razorpayObjectPromise;
};

export const razorpay_object = async (
  e,
  sessionDetails,
  mentorDetail,
  selectedDay,
  selectedTime,
) => {
  e.preventDefault();
  const razorpayObject = await getRazorpayObject(
    sessionDetails,
    mentorDetail,
    selectedDay,
    selectedTime,
  );
  razorpayObject.open();
};
