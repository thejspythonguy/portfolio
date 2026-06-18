import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://thejspythonguy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shailender Singh | Senior Full Stack Engineer & FinTech Pioneer",
    template: "%s | Shailender Singh",
  },
  description: "Portfolio of Shailender Singh, a Senior Full Stack Engineer with 12+ years of experience building secure, scalable FinTech platforms, AI risk engines, and digital onboarding systems.",
  keywords: [
    "Shailender Singh",
    "theJsPythonGuy",
    "Full Stack Engineer",
    "FinTech Developer",
    "AI Credit Risk Systems",
    "Citibank Lead Engineer",
    "Angular",
    "React",
    "Node.js",
    "FastAPI",
    "AWS",
    "MongoDB",
    "Developer Portfolio",
  ],
  authors: [{ name: "Shailender Singh", url: siteUrl }],
  creator: "Shailender Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Shailender Singh | Senior Full Stack Engineer & FinTech Pioneer",
    description: "Senior Full Stack Engineer with 12+ years building secure, scalable FinTech systems, AI risk engines, and compliance automation.",
    siteName: "Shailender Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shailender Singh | Senior Full Stack Engineer",
    description: "Senior Full Stack Engineer with 12+ years building secure, scalable FinTech systems.",
    creator: "@thejspythonguy",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for Search Engine Optimization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shailender Singh",
    "url": siteUrl,
    "jobTitle": "Senior Full Stack Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Tata Consultancy Services (embedded at CitiBank NA)",
    },
    "sameAs": [
      "https://github.com/thejspythonguy",
      "https://www.linkedin.com/in/thejspythonguy/",
      "https://twitter.com/thejspythonguy",
    ],
    "knowsAbout": [
      "Software Engineering",
      "Full Stack Development",
      "FinTech Credit Decisioning",
      "FICO Decision Modeler",
      "Machine Learning Risk Models",
      "Angular (NgRx)",
      "React (Redux)",
      "Node.js (Express)",
      "Python (FastAPI)",
      "AWS Integration",
      "MongoDB Database Design",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="p:domain_verify" content="0ec22921c3681b364aae1b71a43004fe" />
      </head>
      <body className="min-h-full flex flex-col">
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XEK3F9M1XB"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XEK3F9M1XB');`}
        </Script>
        {children}
      </body>
    </html>
  );
}
