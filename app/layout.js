import { Nunito } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";

const fontTypo = Nunito({ subsets: ["latin"], weight: ["500"] });

export const metadata = {
  title: "NextTalk - Real Time Chat App",
  description: "A real time chat app developed using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontTypo.className}>
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 h-screen text-white overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
