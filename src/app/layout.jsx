import TopBar from "@/components/navbar/TopBar";
import "./globals.css";

/**
 * Fonts are loaded via standard <link> tags in the <head> below rather than
 * next/font/google. This avoids a build-time network dependency on Google
 * Fonts (some CI/sandbox environments restrict outbound access), while the
 * fonts still load normally for end users in the browser. CSS variables are
 * declared in globals.css and mapped to these font families in
 * tailwind.config.js.
 */

export const metadata = {
  title: {
    default: "S. Alam Digital Diagnostic Center | Trusted Diagnosis, Better Care",
    template: "%s | S. Alam Digital Diagnostic Center",
  },
  description:
    "S. Alam Digital Diagnostic Center offers advanced laboratory, imaging and cardiology diagnostics, experienced specialist doctors and home sample collection across Bangladesh.",
  keywords: [
    "diagnostic center Bangladesh",
    "S. Alam Digital Diagnostic Center",
    "lab test Dhaka",
    "health checkup package",
    "MRI CT scan Dhaka",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <TopBar />
        
        <main className="flex-1">{children}</main>
      
      </body>
    </html>
  );
}
