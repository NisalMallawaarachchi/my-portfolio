import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

const siteUrl = "https://nisalmallawaarachchi.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Nisal Mallawaarachchi — Full-Stack Developer & Software Engineer",
    template: "%s | Nisal Mallawaarachchi",
  },

  description:
    "Nisal Mallawaarachchi is a backend-focused Full-Stack Developer specializing in scalable APIs, system design, and AI-integrated applications. BSc (Hons) IT at SLIIT. View projects, skills, and get in touch.",

  keywords: [
    "Nisal Mallawaarachchi",
    "Nisal",
    "Mallawaarachchi",
    "Full-Stack Developer",
    "Software Engineer",
    "Backend Developer",
    "Web Developer Sri Lanka",
    "SLIIT",
    "Node.js Developer",
    "React Developer",
    "Next.js Developer",
    "Java Spring Boot",
    "Portfolio",
    "Nisal Mallawaarachchi Portfolio",
    "Nisal Mallawaarachchi SLIIT",
    "Sri Lanka Software Engineer",
  ],

  authors: [{ name: "Nisal Mallawaarachchi", url: siteUrl }],
  creator: "Nisal Mallawaarachchi",
  publisher: "Nisal Mallawaarachchi",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Nisal Mallawaarachchi — Portfolio",
    title: "Nisal Mallawaarachchi — Full-Stack Developer & Software Engineer",
    description:
      "Backend-focused Full-Stack Developer specializing in scalable APIs, system design, and AI-integrated applications. Explore projects, skills, and experience.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nisal Mallawaarachchi — Full-Stack Developer Portfolio",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nisal Mallawaarachchi — Full-Stack Developer & Software Engineer",
    description:
      "Backend-focused Full-Stack Developer specializing in scalable APIs, system design, and AI-integrated applications.",
    images: ["/og-image.png"],
    creator: "@nisalmallawaarachchi",
  },

  verification: {
    google: "9ObmKCa5V3jZDJNdwr_koYRwzc1BIPN9836SAciYETY",
  },

  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
