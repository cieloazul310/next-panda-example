import { Header, Footer, Providers, MyDrawer } from "@/components";
import { fontClassName } from "@/styles";
import { siteMetadata } from "@/utils";
import { css, cx } from "@styled-system/css";
import "../styles/globals.css";

export const metadata = siteMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <Providers>
          <Header />
          <main>
            <article>{children}</article>
          </main>
          <MyDrawer />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
