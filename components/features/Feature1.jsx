import Image from "next/image"  

export default function Feature1() { return(

<section className="col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 py-16 max-w-7xl mx-auto">
          <div className="lg:col-span-6">
            <h4 className=" mb-2">Welcome to Cozy Social Club</h4>
            <h2 className="mb-4 text-[var(--color-dark-green)] ">
              Crafted Catering, Unforgettable Moments
            </h2>
            <p className="font-body mb-6">
            Cozy Social Club is a full-service event and hospitality brand dedicated to crafting warm, inviting experiences that bring people together. We create memorable gatherings with exceptional service, thoughtful details, and a welcoming atmosphere. Whether it’s an intimate get-together or a lively celebration, we ensure every event feels special, effortless, and truly cozy.            </p>
            <button className="btn btn-primary">Contact Us</button>
          </div>
          <div className="lg:col-span-6">
            <Image
              src="/imgs/firstimage.png"
              alt="Welcome"
              width={600}
              height={400}
              className="rounded-[20px]"
            />
          </div>
        </section>)}