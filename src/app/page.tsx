"use client"; //todo remove use client from here
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <main className="min-h-screen bg-white w-full text-primary-foreground relative">
      <div className="h-[2px] w-full bg-main-gradient absolute top-0 z-50"></div>
      <div className="min-h-screen h-screen" id="home">
        <Hero />
      </div>
      <section id="heading">
        {/* <Heading /> */}
      </section>
      <section id="gallery">
        {/* <Gallery /> */}
      </section>
      <section id="about">
        {/* <About /> */}
      </section>
      <section id="evolutionOfLogo">
        {/* <EvolutionOfLogo /> */}
      </section>
    </main>
  );
}
