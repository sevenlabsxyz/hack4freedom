import Script from "next/script";

export const UmamiAnalytics = () => {
  return (
    <Script
      defer
      src="https://cloud.umami.is/script.js"
      data-website-id="ecfba396-7cbb-4297-8fd0-c822e1ea53f8"
      strategy="afterInteractive"
    />
  );
};
