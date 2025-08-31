import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import Main from "@/components/layouts/Main";
import Statement from "@/components/sections/Statement";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Statement />
      </Main>
    </>
  );
}
