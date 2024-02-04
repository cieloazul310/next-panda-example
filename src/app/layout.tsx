import { Header, Footer, Providers } from "@/components";
import { fontClassName } from "@/styles";
import { siteMetadata } from "@/utils";
import { container } from "@styled-system/patterns";
import "../styles/globals.css";

export const metadata = siteMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={fontClassName}>
        <Providers>
          <Header />
          <main
            className={container({
              maxWidth: "content-max-width",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              minHeight: "100vh",
            })}
          >
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
