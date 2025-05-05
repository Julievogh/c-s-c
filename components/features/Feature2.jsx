"use client";

import Image from "next/image";
import Button from "@/components/Button/page";
import { motion } from "framer-motion";

export default function Feature2() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="…"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 max-w-7xl mx-auto items-center">
        <div className="lg:col-span-6">
          <Image
            src="/imgs/secondimage.png"
            alt="Connection"
            width={600}
            height={400}
            className="rounded-[20px]"
          />
        </div>
        <div className="lg:col-span-6">
          <h4 className="mb-2">Experience the Magic of Connection</h4>
          <h2 className="mb-4 text-[var(--color-espresso)] ">
            Friends, family & colleagues
          </h2>
          <p className="font-body mb-6">
            Our amazing community is at the heart of Cozy Social Club. The
            connections we build—with our guests, team, and friends—make our
            work meaningful and inspire us to create unforgettable moments. We
            believe in the power of people and the joy of shared experiences.
            Our approach is rooted in warmth and hospitality, from thoughtfully
            curated menus to our attentive, welcoming staff. Every detail is
            designed to reflect personality, comfort, and the magic of bringing
            people together.{" "}
          </p>
          <Button variant="secondary">Book</Button>
        </div>
      </div>
    </motion.section>
  );
}
