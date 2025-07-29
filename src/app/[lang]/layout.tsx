import type { Metadata } from "next";
import { i18n, Locale } from "@/lib/i18n.config";
import { getTranslation } from "@/lib/get-translation";
import TranslationsType from "@/translations/translations.definition";
import { Libre_Franklin } from "next/font/google";
import Header from "@/components/Header";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre-franklin"
});


const arialNarrow = localFont({
  src: [
    {
      path: "../../../public/fonts/arialnarrow.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/arialnarrow_italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/arialnarrow_bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/arialnarrow_bolditalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-arial-narrow",
});

const facebookSans = localFont({
  src: [
    {
      path: "../../../public/fonts/facebook-sans/FacebookSansHeavy.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-facebook-sans",
});

const timesNewRoman = localFont({
  src: [
    {
      path: "../../../public/fonts/timesnewroman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/timesnewroman_italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-times-new-roman",
});

/*
 * Generate differents versions of dynamic route [lang]
 * to avoid page rendering on demand and improve performance
 */
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getTranslation(lang);
  const { hero, header } = dictionary;
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : `http://localhost:${process.env.PORT || 3000}`;

  return {
    title: {
      default: "KYA Energy Group",
      template: `%s | KYA Energy Group`,
    },
    description: hero.subtitle,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        "en-US": "/en",
        "fr-FR": "/fr",
      },
    },
    openGraph: {
      title: "KYA Energy Group",
      description: hero.subtitle,
      url: `/${lang}`,
      siteName: "KYA Energy Group",
      images: [
        {
          url: "/logo.webp",
          width: 800,
          height: 600,
          alt: header.logo,
        },
      ],
      locale: lang,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "KYA Energy Group",
      description: hero.subtitle,
      images: ["/logo.webp"],
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/logo.webp",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;
  const dictionary: TranslationsType = await getTranslation(lang);

  return (
    <html lang={lang}>
      <body
        className={`bg-gray-100 dark:bg-gray-900 ${libreFranklin.variable} ${libreFranklin.className} ${facebookSans.variable}  ${arialNarrow.variable} ${timesNewRoman.variable} antialiased`}>
        <Header dictionary={dictionary} />
        <main className="pt-24 md:pt-36">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
