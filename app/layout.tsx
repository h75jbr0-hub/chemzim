import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { GamificationProvider } from "@/contexts/GamificationContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import FloatingAssistant from "@/components/assistant/FloatingAssistant";
import ServiceWorkerRegistration from "@/components/pwa/ServiceWorkerRegistration";
import InstallPrompt from "@/components/pwa/InstallPrompt";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ChemZim — Master IGCSE & A-Level Chemistry",
    template: "%s | ChemZim",
  },
  description:
    "The ultimate chemistry learning platform for IGCSE and A-Level students. Practice with past paper questions, track your progress, and level up your chemistry skills.",
  manifest: "/manifest.json",
  keywords: [
    "IGCSE Chemistry",
    "A-Level Chemistry",
    "Cambridge Chemistry",
    "Chemistry Practice",
    "Past Papers",
    "MCQ",
    "Chemistry Quiz",
    "O-Level Chemistry",
    "AS Chemistry",
  ],
  authors: [{ name: "ChemZim" }],
  openGraph: {
    title: "ChemZim — Master IGCSE & A-Level Chemistry",
    description:
      "The ultimate chemistry learning platform for IGCSE and A-Level students.",
    type: "website",
    locale: "en_US",
    siteName: "ChemZim",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChemZim — Master IGCSE & A-Level Chemistry",
    description:
      "The ultimate chemistry learning platform for IGCSE and A-Level students.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col antialiased bg-background text-foreground transition-colors duration-200">
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <ThemeProvider>
          <AuthProvider>
            <GamificationProvider>
              {children}
              <FloatingAssistant />
              <ServiceWorkerRegistration />
              <InstallPrompt />
            </GamificationProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
