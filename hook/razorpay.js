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

const verifyOrder = async (orderDetails) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/payment/verifyOrder`,
      orderDetails,
    );
    if (response.status == 200) console.log("Payment has been verified");
    else console.log("Payment could not be verified");
  } catch (err) {
    console.error("payment could not be verified due to the error: ", err);
  }
};

const createRazorpayObject = async (sessionDetails) => {
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
    handler: function (response) {
      verifyOrder(response);
      alert("This step of Payment Succeeded");
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
    alert("This step of Payment Failed");
  });

  return razorpayObject;
};

let razorpayObjectPromise;

export const getRazorpayObject = async (sessionDetails) => {
  if (!razorpayObjectPromise) {
    // Load the script and create the Razorpay object only once
    razorpayObjectPromise = loadRazorpayScript().then(() =>
      createRazorpayObject(sessionDetails),
    );
  }

  return razorpayObjectPromise;
};

export const razorpay_object = async (e, sessionDetails) => {
  e.preventDefault();
  const razorpayObject = await getRazorpayObject(sessionDetails);
  // Use razorpayObject here
  razorpayObject.open();
};
