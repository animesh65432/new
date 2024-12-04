import type { Metadata } from "next";
import { Oxygen, Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "../components"

const oxygen = Oxygen({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});
const openSans = Open_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

const OpenPoppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})



export const metadata: Metadata = {
  title: "Qulture",
  icons: {
    icon: [
      { url: "/Icon.svg", type: "image/svg+xml" },
      { url: "/Icon.png", type: "image/png", sizes: "96x96" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/Icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Qulture",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 96,
        height: 96,
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${oxygen.className} ${openSans.className} ${OpenPoppins.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

