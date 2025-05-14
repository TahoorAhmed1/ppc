import type React from "react";
import "./globals.css";
import { Poppins } from "next/font/google";
import Script from "next/script";
import type { Metadata } from "next";
import FollowCursor from "@/components/digital-marketing/components-of-pricing/follow-cursor";
import FixedPositionBalls from "@/components/moving-bulbs-background";
import AnimatedStarfield from "@/components/animated-starfield";
import MovingBulbsBackground from "@/components/moving-bulbs-background";

export const metadata: Metadata = {
  title: "Creative Agency 360",
  description: "We Build your Digital Business",
  keywords:
    "Software House, PPC Services, Pay-Per-Click Experts, Google Ads Management, Digital Marketing Agency, Web Development, SEO Services, Social Media Marketing, Creative Agency, Branding, Performance Marketing, Online Advertising, Conversion Optimization",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17027525580"
          strategy="afterInteractive"
        />
        <Script async id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17027525580');
          `}
        </Script>

        {/* Google Conversion Tracking */}
        <Script async id="google-conversion" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {
              'send_to': 'AW-17027525580/-bRfCL-IzbwaEMzXrbc_',
              'value': 1.0,
              'currency': 'USD'
            });
          `}
        </Script>

        <Script id="tawkto-widget" strategy="afterInteractive">
          {`
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function(){
              var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/681e77a508bed819150db3fb/1iqrg6nra';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin', '*');
              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script>
      </head>
      <body>
        <FollowCursor
          dotCount={4}
          maxSize={10}
          minSize={3}
          baseSpeed={8}
          colorful={true}
          cursorStyle="dot"
          cursorSize={14}
          customColors={["#3CBFAE", "#65CF5F", "#1F9BED", "#5ce0c6"]}
        />
        {children}
      </body>
    </html>
  );
}
