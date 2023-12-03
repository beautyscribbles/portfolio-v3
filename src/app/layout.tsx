import { TailwindIndicator } from "@/components/utils/tailwind-indicator";
import SectionContextProvider from "@/context/SectionContext";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Fragment } from "react";
import "./globals.css";

// Font files can be colocated inside of `app`
const satoshi = localFont({
  src: "./satoshi/Satoshi-Light.otf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Monique McIntyre | Frontend Developer",
  description:
    "Hi, I'm Monique. Developer by day, book enthusiast by night. With a keen eye for design and an obsession for pixel perfection, I specialize in crafting elegant and user-friendly websites with my knowledge of various technologies",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${satoshi.className} text-primary grainy`}>
        <SectionContextProvider>
          <Fragment>{children}</Fragment>
          <Fragment>{modal}</Fragment>
        </SectionContextProvider>

        <TailwindIndicator />
      </body>
    </html>
  );
}
