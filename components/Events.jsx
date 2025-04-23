import Image from "next/image";

export default function Events() { return( <section id="popup" className="col-span-12 py-16 px-6">
          <div className="text-center mb-8">
            <h2 className="font-display text-h2">Don’t miss out! Our next pop-up events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { key: 'popup1', title: 'Nørrebro Teater' },
              { key: 'popup2', title: 'Street Feast' },
              { key: 'popup3', title: 'Urban Gardens' }
            ].map(({ key, title }) => (
              <div key={key} className="flex flex-col overflow-hidden rounded-2xl shadow-lg">
                <div className="bg-[var(--color-terracotta)] px-6 py-4">
                  <h4 className="font-display text-h4 text-[var(--color-warm-white)]">{title}</h4>
                  <p className="font-subtitle text-h3 text-[var(--color-warm-white)]">8th April</p>
                  <p className="font-subtitle text-h3 text-[var(--color-warm-white)]">19:00</p>
                </div>
                <Image
                  src={`/imgs/${key}.png`}
                  alt={title}
                  width={400}
                  height={400}
                  className="w-full object-cover"
                />
                <div className="border border-[var(--color-light-green)] p-6 flex-1 flex flex-col justify-between">
                  <p className="font-body text-body mb-4">
                    Join us for a fun-filled pop-up experience! Expect delicious food, vibrant vibes, and memorable moments.
                  </p>
                  <button className="btn btn-primary self-start">Sign Up</button>
                </div>
              </div>
            ))}
          </div>
        </section>)}