import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import GlobalDataProvider from "@/contexts/GlobalDataProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata = {
  title: "World's First Covid-19 Unvaccinated Platform – Unjected",
  description: "Unvaccinated dating, friendships and community. Build a profile and get connecting with other likeminded, unvaccinated humans around the world.",
  openGraph: {
    title: "World's First Covid-19 Unvaccinated Platform – Unjected",
    description:
      "Unvaccinated dating, friendships and community. Build a profile and get connecting with other likeminded, unvaccinated humans around the world.",
    url: "https://unjected.com/",
    siteName: "Unjected",
    images: [
      {
        url: "/images/Unjected_FullColour_Long_Logo.png",
        width: 1200,
        height: 628,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@UNJECTED",
    title: "World's First Covid-19 Unvaccinated Platform – Unjected",
    description:
      "Unvaccinated dating, friendships and community. Build a profile and get connecting with other likeminded, unvaccinated humans around the world.",
    images: ["/images/Unjected_FullColour_Long_Logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalDataProvider>
          <div className="max-w-screen-2xl">{children}</div>
        </GlobalDataProvider>
      </body>
    </html>
  );
}
