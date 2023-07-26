import { Html, Head, Main, NextScript } from "next/document";
import { AuthProvider } from "../context/AuthContext";
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>GrabTern</title>
        <Script src="https://accounts.google.com/gsi/client" strategy="beforeInteractive"></Script>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        {/* Favicon */}
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/aasets/img/favicon1.ico"
        />

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
      </Head>
      <body>
        <AuthProvider />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
