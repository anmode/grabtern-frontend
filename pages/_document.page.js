import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import { AuthProvider } from "../context/AuthContext";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>GrabTern</title>
        <Script
          src="https://accounts.google.com/gsi/client"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="beforeInteractive"
        ></Script>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        {/* Favicon */}
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/aasets/img/faviconn.ico"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/progressbar_barfiller.css" />
        <link rel="stylesheet" href="/assets/css/gijgo.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <script
          async
          src="https://kit.fontawesome.com/c26b883059.js"
          crossOrigin="anonymous"
        ></script>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6172950963478417"
          crossOrigin="anonymous"
        ></script>
        <script src="/scripts/no-flash.js" async />
      </Head>
      <body>
        <AuthProvider />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
