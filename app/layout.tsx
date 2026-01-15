import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Yeshu — Full Stack Developer",
  description: "Portfolio of Yeshu Agarwal. I build practical web and systems tools that solve real problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased relative`}>
        <div className="top-0 left-0 sticky font-['offbit-dot'] uppercase md:text-sm  text-xs font-bold tracking-wide md:px-5 px-5 pt-4 z-50 bg-zinc-950 text-white flex items-center justify-between w-full h-[5vh]">
          {/* left navbar */}
          <Link href={"/"} className="md:text-base text-sm">Yeshu Agarwal</Link>
          {/* right nav */}
          <div className="flex items-center md:gap-5 gap-3 uppercase">
            <Link href={"https://medium.com/@work.yeshuagarwal"}>Blog</Link>
            <Link href={"mailto:work.yeshuagarwal@gmail.com"}>Contact</Link>
            <Link href={"https://www.linkedin.com/in/yeshu-agarwal-linkdedin/"}>Linkedin</Link>
            <Link href={"https://github.com/yeshu2004"} className="hidden md:flex">GitHub</Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
