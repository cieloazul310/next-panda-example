import type { ReactNode } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Drawer from "@/components/layout/drawer";
import ThemeProvider from "@/components/providers/theme-provider";
import { fontClassName } from "@/styles/fonts";
import { siteMetadata } from "@/utils/siteMetadata";
import { css, cx } from "styled-system/css";
import "@/styles/globals.css";

export const metadata = siteMetadata();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={cx(
          css({
            minHeight: "100vh",
            bgGradient: "to-b",
            gradientFrom: "bg.canvas",
            gradientTo: "accent.a1",
            backgroundAttachment: "fixed",
          }),
          fontClassName,
        )}
      >
        <ThemeProvider>
          <Header />
          <main>
            <article>{children}</article>
          </main>
          <Drawer />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
