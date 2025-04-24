import type React from "react";
import "./globals.css";

import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Agency 360",
  description: "We Build your Digital Business",
  keywords:
    "Software House, PPC Services, Pay-Per-Click Experts, Google Ads Management, Digital Marketing Agency, Web Development, SEO Services, Social Media Marketing, Creative Agency, Branding, Performance Marketing, Online Advertising, Conversion Optimization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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

        <Script async id="google-conversion" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {
              'send_to': 'AW-17027525580/-bRfCL-IzbwaEMzXrbc_',
              'value': 1.0,
              'currency': 'USD'
            });
          `}
        </Script>

        <Script id="livechat-widget" strategy="beforeInteractive">
          {`
            window.__lc = window.__lc || {};
            window.__lc.license = 19138666;
            window.__lc.integration_name = "manual_onboarding";
            window.__lc.product_name = "livechat";
            (function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
          `}
        </Script>

        <noscript>
          <a href="https://www.livechat.com/chat-with/19138666/" rel="nofollow">
            Chat with us
          </a>
          , powered by{" "}
          <a
            href="https://www.livechat.com/?welcome"
            rel="noreferrer noopener nofollow"
            target="_blank"
          >
            LiveChat
          </a>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
