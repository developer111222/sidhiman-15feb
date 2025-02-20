import { useEffect } from "react";

const HeadLinks = () => {
  useEffect(() => {
    // Load CSS files dynamically
    const stylesheets = [
      "/assets/css/bootstrap.min.css",
      "/assets/css/owl.carousel.min.css",
      "/assets/css/owl.theme.default.min.css",
      "/assets/css/slick.css",
      "/assets/css/fontawesome.min.css",
      "/assets/css/slick-theme.css",
      "/assets/css/odometer-theme.css",
      "/assets/css/style.css",
      "/assets/css/style-dark.css",
      "/assets/css/responsive.css",
      "/assets/css/color.css",
    ];

    stylesheets.forEach((href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    });

    // Load JavaScript files dynamically
    const scripts = [
      "/assets/js/jquery-3.6.0.min.js",
      "/assets/js/bootstrap.min.js",
      "/assets/js/owl.carousel.min.js",
      "/assets/js/slick.min.js",
      "/assets/js/circle-progres.js",
      "/assets/js/odometer.js",
      "https://checkout.razorpay.com/v1/checkout.js",
      "/assets/js/custom.js",
    ];

    scripts.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });
  }, []);

  return null; // This component doesn't render anything
};

export default HeadLinks;
