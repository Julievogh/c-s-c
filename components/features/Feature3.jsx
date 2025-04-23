import Image from "next/image";

export default function Feature3() { return( 
        <section className="col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 py-16 max-w-7xl mx-auto">
          <div className="lg:col-span-6">
            <h3 className="font-display text-h2 mb-2">
              Designed to Delight, Crafted to Celebrate
            </h3>
            <h4 className="font-subtitle text-h3 mb-4">
              The Art of Cozy Celebrations
            </h4>
            <p className="font-body mb-6">
              Our dedicated team carefully plans every detail to create a seamless and stress-free experience. From the first consultation to the final cleanup, we handle it all—so you can simply enjoy the moment. What sets Cozy Social Club apart is our passion for crafting immersive gatherings that truly reflect your vision.
            </p>
            <button className="btn btn-secondary-outline">Book</button>
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
) }