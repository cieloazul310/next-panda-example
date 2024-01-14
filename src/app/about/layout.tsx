import { Jumbotron } from "@/components";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article>
      <Jumbotron title="About" />
      {children}
    </article>
  );
}
