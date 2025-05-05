"use client";

import Image from "next/image";
import Button from "@/components/Button/page";
import { motion } from "framer-motion";

export default function Feature3() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="…"
    >
      <section className="col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 py-16 max-w-7xl mx-auto">
        <div className="lg:col-span-6">
          <h4 className="mb-2">Designed to Delight, Crafted to Celebrate</h4>
          <h2 className=" mb-4 text-[var(--color-deep-wine)] ">
            The Art of Cozy Celebrations
          </h2>
          <p className="font-body mb-6">
            Our dedicated team carefully plans every detail to create a seamless
            and stress-free experience. From the first consultation to the final
            cleanup, we handle it all—so you can simply enjoy the moment. What
            sets Cozy Social Club apart is our passion for crafting immersive
            gatherings that truly reflect your vision. With a deep love for
            hospitality, we curate unique, thoughtful experiences that leave a
            lasting impression on your guests.{" "}
          </p>
          <Button variant="outlineSecondary">Celebrate</Button>
        </div>
        <div className="lg:col-span-6">
          <Image
            src="/imgs/thirdimage.png"
            alt="Celebrate"
            width={600}
            height={400}
            className="rounded-[20px]"
          />
        </div>
      </section>
    </motion.section>
  );
}
