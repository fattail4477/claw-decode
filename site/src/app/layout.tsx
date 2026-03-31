import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claw Decode — Inside Claude Code's 512K Line Source Leak",
  description: "The complete analysis of Claude Code's leaked source: 43 tools, 7 hidden features, ASCII pets, undercover mode, and everything Anthropic didn't want you to see.",
  openGraph: {
    title: "Claw Decode — Inside Claude Code's 512K Line Source Leak",
    description: "512,000 lines. 43 tools. 7 hidden features. 1 capybara.",
    url: "https://clawdecode.net",
    type: "website",
    images: ["/logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claw Decode — Inside Claude Code's 512K Line Source Leak",
    description: "512,000 lines. 43 tools. 7 hidden features. 1 capybara.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
