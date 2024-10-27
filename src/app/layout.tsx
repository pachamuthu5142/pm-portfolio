import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
export const metadata: Metadata = {
  title: "Pachamuthu Moorthy | Full Stack Developer - UI/UX Design & Web Development",
  description: "Pachamuthu Moorthy is a Full Stack Developer, UI/UX Designer, and Web Developer. He is passionate about building web applications and websites that are user-friendly and accessible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </Head>
      <body className={""} style={{ fontFamily: "Archivo, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
