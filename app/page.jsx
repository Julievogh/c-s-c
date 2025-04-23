import Image from "next/image";


import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Feature1 from "@/components/features/Feature1";
import Feature2 from "@/components/features/Feature2";
import Feature3 from "@/components/features/Feature3";
import Testimonial from "@/components/Testimonial";
import Events from "@/components/Events";
import Founder from "@/components/Founder";
import Story from "@/components/Story";
import Socials from "@/components/Socials";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="grid-mobile grid-desktop">
      <main className="row-start-2">

       
        {/* HEADER */}
        <Header />

        {/* HERO */}
      <Hero />

        {/* INTRO */}
      <Intro />

        {/* FEATURE 1 */}

        <Feature1 />

       

        {/* FEATURE 2 */}

        <Feature2 />
     

        {/* FEATURE 3 */}

        <Feature3 />

        {/* TESTIMONIAL */}
       <Testimonial />

      {/* EVENTS */}
     <Events />

        {/* FOUNDER */}

<Founder />


        {/* STORY */}
       <Story />

        {/* SOCIALS */}

        <Socials />
       
      <Footer />
</main>
    </div>
  );
}
