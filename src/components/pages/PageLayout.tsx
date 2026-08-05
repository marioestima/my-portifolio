import { ReactNode } from "react";
import { PageContainer } from "../layout/PageContainer";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

interface PageLayoutProps {
  children: ReactNode;
  theme?: "dark" | "light";
}

export default function PageLayout({
  children,
  theme = "light",
}: PageLayoutProps) {
  return (
    <PageContainer variant={theme}>
      <Header variant={theme} />

      {children}

      <Footer variant={theme} />
    </PageContainer>
  );
}
