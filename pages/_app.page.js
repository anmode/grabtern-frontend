import '../styles/globals.css';
import { useEffect, useState } from 'react'
import Script from 'next/script'
import { Breakpoint, BreakpointProvider } from 'react-socks';
import $ from 'jquery'

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false)
  const [loadDone, setLoadDone] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  setTimeout(function() {
    $('#preloader-active').fadeOut('fast');
    $('.loaderBackground').fadeOut('fast');
}, 1400)

  return (

    <>
      <div className="loaderBackground"></div>
      <div id="preloader-active" style={{ transition: "all 0.5s" }}>
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="preloader-circle"></div>
            <div className="preloader-img pere-text">
              <img src="/assets/img/logo/loder.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <Script id="scriptAfterInteractive" src="/assets/js/vendor/modernizr-3.5.0.min.js" />
          <Script id="scriptAfterInteractive" src="/assets/js/vendor/jquery-1.12.4.min.js" />
          <Script id="scriptAfterInteractive" src="/assets/js/popper.min.js" />
          <Script id="scriptAfterInteractive" src="/assets/js/bootstrap.min.js" />
          <Script id="scriptAfterInteractive" src="/assets/js/jquery.slicknav.min.js" />
          <Script id="scriptAfterInteractive" src="/assets/js/owl.carousel.min.js" />
          <Script id="scriptAfterInteractive" src="/assets/js/slick.min.js" />
          <Script id="scriptAfterInteractive" src="/assets/js/wow.min.js" />
          <Script id="scriptAfterInteractive" src="/assets/js/animated.headline.js" />
          <Script id="scriptAfterInteractive" src="/assets/js/jquery.magnific-popup.js" />
          <Script id="scriptAfterInteractive" src="/assets/js/gijgo.min.js" />
          <Script id="scriptAfterInteractive" src="/assets/js/jquery.nice-select.min.js" />
          <Script id="scriptAfterInteractive" src="/assets/js/jquery.sticky.js" />
          <Script id="scriptAfterInteractive" src="/assets/js/jquery.barfiller.js" />
          <Script id="scriptAfterInteractive" src="/assets/js/jquery.counterup.min.js" />
          <Script id="scriptAfterInteractive" src="/assets/js/waypoints.min.js" />
          <Script id="scriptAfterInteractive" src="/assets/js/jquery.countdown.min.js" />
          <Script id="scriptAfterInteractive" src="/assets/js/hover-direction-snake.min.js" />
          <Script id="scriptAfterInteractive" src="/assets/js/contact.js" />
          <Script id="scriptAfterInteractive" src="/assets/js/jquery.form.js" />
          <Script id="scriptAfterInteractive" src="/assets/js/jquery.validate.min.js" />
          <Script id="scriptAfterInteractive" src="/assets/js/mail-script.js" />
          <Script id="scriptAfterInteractive" src="/assets/js/jquery.ajaxchimp.min.js" />
          <Script id="scriptAfterInteractive" src="/assets/js/plugins.js" />
          <Script id="scriptAfterInteractive" src="/assets/js/main.js" /> */}
      <BreakpointProvider>
        <Component {...pageProps} />
      </BreakpointProvider>
    </>
  )


}

export default MyApp
