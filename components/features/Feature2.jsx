import Image from "next/image";

export default function Feature2() {
    return(   <section className="col-span-12 bg-[var(--color-pantone-2023)] py-16 bg-[url('/imgs/ternetbg2.png')] bg-cover bg-no-repeat bg-center">
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
                  <h3 className="font-display text-h2 mb-2">
                    Experience the Magic of Connection
                  </h3>
                  <h4 className="font-subtitle text-h3 mb-4">
                    Friends, family & colleagues
                  </h4>
                  <p className="font-body mb-6">
                    Our amazing community is at the heart of Cozy Social Club. The connections we build—with our guests, team, and friends—make our work meaningful and inspire us to create unforgettable moments.
                  </p>
                  <button className="btn btn-secondary">Book</button>
                </div>
              </div>
            </section>)
}