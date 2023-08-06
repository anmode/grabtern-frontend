import Head from "next/head";

const Fallback = () => (
  <>
    <Head>
      <title>Offline</title>
    </Head>
    <h1 className="tw-text-center tw-text-2xl tw-items-center tw-font-semibold">
      This is offline fallback page. Please turn on your internet to check the
      website.
    </h1>
  </>
);

export default Fallback;
