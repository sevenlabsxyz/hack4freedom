import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "Hack4Freedom - When Women Build, Freedom Follows",
  description:
    "Hack4Freedom trains and empowers women developers to build open-source freedom technology using Bitcoin.",
  openGraph: {
    title: "Hack4Freedom - When Women Build, Freedom Follows",
    description:
      "Hack4Freedom trains and empowers women developers to build open-source freedom technology using Bitcoin.",
    url: "https://hack4freedom.com",
    siteName: "Hack4Freedom",
    images: [
      {
        url: "/seo.png",
        width: 1200,
        height: 630,
        alt: "Hack4Freedom - When Women Build, Freedom Follows",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hack4Freedom - When Women Build, Freedom Follows",
    description:
      "Hack4Freedom trains and empowers women developers to build open-source freedom technology using Bitcoin.",
    images: ["/seo.png"],
    creator: "@evento_so",
    site: "@evento_so",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmMono.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
