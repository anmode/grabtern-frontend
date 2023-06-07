import "../styles/globals.css";
// import style from "../styles/contact.css";
import { useEffect, useState } from "react";
import { BreakpointProvider } from "react-socks";
import $ from "jquery";
import Head from "next/head";
import Script from "next/script";
import LogState from "../context/LogState";
function addProductJsonLd() {
  return {
    __html: `{
				"@context": "https://schema.org/", 
				"@type": "BreadcrumbList", 
				"itemListElement": [{
					"@type": "ListItem", 
					"position": 1, 
					"name": "Home",
					"item": "https://www.grabtern.com"  
				},{
					"@type": "ListItem", 
					"position": 2, 
					"name": "Internships",
					"item": "https://grabtern.com/internships"  
				},{
					"@type": "ListItem", 
					"position": 3, 
					"name": "About",
					"item": "https://grabtern.com/about"  
				},{
          "@type": "ListItem", 
					"position": 4, 
					"name": "Contact",
					"item": "https://grabtern.com/contact"  
        }]
			}`,
  };
}

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  setTimeout(function () {
    $("#preloader-active").fadeOut("fast");
    $(".loaderBackground").fadeOut("fast");
  }, 1400);

  return (
    <>
      <Head>
        <title>Internships | Education</title>
        <meta name="title" content="GrabTern" />
        <meta
          name="description"
          content="With GrabTern you can easly get your dream Intern from GSoc, MLH, Amazon ML Summer Intern and Many more that will be guide by mentor only just for ₹ 1 Rupee, So What are you waiting for? Sign Up the intern at GrabTern and will be guide by mentor and dream your intern job sooner!"
        />

        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://grabtern.com/" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Emupedia"
          href="https://grabtern.com/feed.xml"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://grabtern.com/" />
        <meta
          name="keywords"
          content="Intern, Internships, GSoc, MLH, Amazon ML Summer Intern, Outreachy, GrabTern, Internship, Adobe SHE Codes"
        />
        <meta property="og:title" content="GrabTern" />
        <meta
          property="og:description"
          content="With GrabTern you can easly get your dream Intern from GSoc, MLH, Amazon ML Summer Intern and Many more that will be guide by mentor only just for ₹ 1 Rupee, So What are you waiting for? Sign Up the intern at GrabTern and will be guide by mentor and dream your intern job sooner!"
        />
        <meta
          property="og:image"
          content="https://grabtern.com/grabtern_meta_img.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://grabtern.com/" />
        <meta property="twitter:title" content="GrabTern" />
        <meta
          property="twitter:description"
          content="With GrabTern you can easly get your dream Intern from GSoc, MLH, Amazon ML Summer Intern and Many more that will be guide by mentor only just for ₹ 1 Rupee, So What are you waiting for? Sign Up the intern at GrabTern and will be guide by mentor and dream your intern job sooner!"
        />
        <meta
          property="twitter:image"
          content="https://grabtern.com/grabtern_meta_img.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd()}
          key="product-jsonld"
        />
        {/* <script src="https://accounts.google.com/gsi/client" async defer ></script> */}
      </Head>

      <div className="loaderBackground"></div>
      <div id="preloader-active" style={{ transition: "all 0.5s" }}>
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="tw-flex tw-items-center tw-justify-center position-relative">
            <div className="preloader-circle"></div>
            <div className="preloader-img pere-text">
              <img src="/assets/img/logo/loder.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <BreakpointProvider>
        <LogState>
          <Component {...pageProps} />
        </LogState>
      </BreakpointProvider>
    </>
  );
}

export default MyApp;
