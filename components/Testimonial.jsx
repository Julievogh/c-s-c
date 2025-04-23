import Image from "next/image";

export default function Testimonial() { return(<section className="col-span-12 bg-[var(--color-pantone-2023)] py-16 text-center">
    <h4 className="mb-4">But what are people saying?</h4>
    <blockquote className="font-body italic mb-2 text-body">
      "Cozy Social Club made our event unforgettable! The attention to detail and warm atmosphere created a magical experience for our guests. Highly recommend!"
    </blockquote>
    <p className="mb-6">- Sarah Johnson</p>
    <Image
      src="/imgs/sjlrenglogo.png"
      alt="Partner"
      width={200}
      height={80}
      className="mx-auto rounded-[20px]"
    />
    </section>) }