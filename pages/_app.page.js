import "../styles/globals.css";
import { useEffect, useState } from "react";
import { BreakpointProvider } from "react-socks";
import Head from "next/head";
import { AuthProvider } from "../context/AuthContext";
function addProductJsonLd() {
  return {
    __html: {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.grabtern.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Internships",
          item: "https://grabtern.com/internships",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "About",
          item: "https://grabtern.com/about",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Contact",
          item: "https://grabtern.com/contact",
        },
      ],
    },
  };
}
function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  const [preloaderActive, setPreloaderActive] = useState(true);
  useEffect(() => {
    setShowChild(true);
    setTimeout(() => {
      setPreloaderActive(false);
    }, 1400);
  }, []);
  if (!showChild) {
    return null;
  }

  return (
    <>
      <Head>
        <title>GrabTern | Grab Your Internship</title>
        <meta name="title" content="GrabTern" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/img/favicon1.ico" />
        <link rel="canonical" href="https://grabtern.com/" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Emupedia"
          href="https://grabtern.com/feed.xml"
        />
        <meta 
            name="robots" 
            content="index, follow"
        />
        <meta 
            name="language" 
            content="en"
        />
        <meta 
            name="revisit-after" 
            content="7 days"
        />
        <meta 
            name="distribution" 
            content="global"
        />
        <meta 
            name="geo.region" 
            content="india"
        />
        <meta 
            name="googlebot" 
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta 
            http-equiv="content-language" 
            content="en"
        />
        <meta 
            name="description"
            content="With GrabTern you can easly get your dream Intern from GSoc, MLH, Amazon ML Summer Intern and Many more that will be guide by mentor only just for ₹ 1 Rupee, So What are you waiting for? Sign Up the intern at GrabTern and will be guide by mentor and dream your intern job sooner!"
        />
        <meta 
            name="keywords"
            content="Intern, Internships, GSoc, MLH, Amazon ML Summer Intern, Outreachy, GrabTern, Internship, Adobe SHE Codes"
        />
        <link 
            rel="canonical" 
            href="https://grabtern.com/"
        />
        <meta 
            http-equiv="X-UA-Compatible" 
            content="IE=edge" 
        />
        <meta 
            name="theme-color" 
            content="#0000" 
        />
        <meta 
            name="msapplication-navbutton-color" 
            content="#0000" 
        />
        <meta 
            name="msapplication-TileColor" 
            content="#ffffff" 
        />
        <meta 
            name="apple-mobile-web-app-capable" 
            content="yes" 
        />
        <meta 
            name="apple-mobile-web-app-status-bar-style" 
            content="#0000" 
        />
        <meta 
            name="theme-color" 
            content="#0000" 
        />
        <meta
            name="linkedin:profile"
            content="https://www.linkedin.com/company/grabtern/"
        />
        <meta
            property="instagram:username"
            content="https://www.instagram.com/grabtern.guide/"
        />
        <meta 
            property="og:type" 
            content="website" 
        />
        <meta 
            name="og:author" 
            content="anmode"
        />
        <meta 
            name="og:video" 
            content="https://raw.githubusercontent.com/anmode/grabtern-frontend/develop/public/video.mp4"
        />
        <meta 
            property="og:url" 
            content="https://grabtern.com/" 
        />
        <meta 
             property="og:site_name" 
             content="GrabTern"
        />
        <meta 
            name="og:title"
            content="GrabTern | Grab your first Internship."
        />
        <meta 
            name="og:description"
            content="With GrabTern you can easly get your dream Intern from GSoc, MLH, Amazon ML Summer Intern and Many more that will be guide by mentor only just for ₹ 1 Rupee, So What are you waiting for? Sign Up the intern at GrabTern and will be guide by mentor and dream your intern job sooner!"
        />
        <meta 
            property="og:image" 
            content="https://raw.githubusercontent.com/anmode/grabtern-frontend/develop/public/whitelogo.webp" 
        />
        <meta 
            name="twitter:card" 
            content="https://raw.githubusercontent.com/anmode/grabtern-frontend/develop/public/whitelogo.webp"
        />
        <meta 
            name="twitter:site" 
            content="@grabtern"
        />
        <meta 
            name="twitter:image" 
            content="https://raw.githubusercontent.com/anmode/grabtern-frontend/develop/public/whitelogo.webp"
        />
        <meta 
            property="twitter:url" 
            content="https://www.grabtern.com/" 
        />
        <meta 
            property="twitter:title" 
            content="Grabtern" 
        />
        <meta
            property="twitter:description"
            content="With GrabTern you can easly get your dream Intern from GSoc, MLH, Amazon ML Summer Intern and Many more that will be guide by mentor only just for ₹ 1 Rupee, So What are you waiting for? Sign Up the intern at GrabTern and will be guide by mentor and dream your intern job sooner!"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd()}
          key="product-jsonld"
        />
        <script
          type="module"
          src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.js"
        ></script>
        {/* <script src="https://accounts.google.com/gsi/client" async defer ></script> */}
      </Head>

      {preloaderActive && (
        <div className="preloader-container">
          <div className="loaderBackground"></div>
          <div id="preloader-active" style={{ transition: "all 0.5s" }}>
            <div className="preloader d-flex align-items-center justify-content-center">
              <div className="tw-flex tw-items-center tw-justify-center position-relative">
                <div className="preloader-circle"></div>
                <div className="preloader-img pere-text">
                  <img src="/assets/img/logo/loder.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <BreakpointProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </BreakpointProvider>
    </>
  );
}

export default MyApp;
