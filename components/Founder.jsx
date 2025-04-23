import Image from "next/image"

export default function Founder() { return(
        <section className="col-span-12 bg-[var(--color-lighter-terracotta)] py-16 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto items-center">
            <div className="lg:col-span-6 flex justify-center">
              <Image
                src="/imgs/juan.png"
                alt="Founder"
                width={500}
                height={500}
                className="rounded-full"
              />
            </div>
            <div className="lg:col-span-6">
              <h2 className="font-display text-h2 mb-4">Meet the founder</h2>
              <p className="font-accent mb-4">Come hungry, leave satisfied</p>
              <h3 className="font-subtitle text-h3 mb-4">
                <span>Juan</span> - The Chef Behind the Concept
              </h3>
              <p className="font-body mb-4">
                Juan is a chef from Los Angeles with a passion for blending tradition and innovation.
              </p>
              <p className="font-body mb-4">
                He grew up surrounded by bold flavors and diverse food cultures, and today he brings that same curiosity to Cozy Social Club.
              </p>
              <p className="font-body mb-6">
                Whether he’s slow-cooking a classic or reimagining a dish with a twist, Juan believes that food should spark connection.
              </p>
              <p className="font-body">
                His vision is simple: create shared experiences that feel personal, intimate, and delicious—like a dinner party with soul.
              </p>
            </div>
          </div>
        </section>

        )}