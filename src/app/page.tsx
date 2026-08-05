import Description from "../components/layout/Description";
import About from "../components/layout/About";
import GetInTouch from "../components/layout/GetInTouch";
import ContactInfo from "../components/layout/ContactInfo";
import WorkPreview from "../components/layout/WorkPreview";
import Hero from "../components/layout/Hero";
import PageLayout from "../components/pages/PageLayout";

export default function Home() {
  return (
    <PageLayout theme="light">
      <main>
        <Hero />

        <Description />

        <About />

        <WorkPreview />

        <GetInTouch />

        <ContactInfo />
      </main>
    </PageLayout>
  );
}
