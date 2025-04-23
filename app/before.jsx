import Image from "next/image";

export default function Home() {
  return (
    <div className="grid-mobile grid-desktop">
      <main className="row-start-2">
        {/* HEADER */}
        <header className="col-span-12 bg-[var(--color-warm-white)] py-6 shadow-lg fixed w-full z-50">
          <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <div className="flex space-x-8">
              <a href="#popup" className="uppercase">Pop-up Experience</a>
              <a href="#fine-dining" className="uppercase">Fine-Dining</a>
            </div>
            <div>
              <a href="#">
                <Image src="/libs/logo.svg" alt="Cozy Social Club" width={200} height={200} />
              </a>
            </div>
            <div className="flex space-x-8">
              <a href="#your-event" className="uppercase">Your Event</a>
              <a href="#story" className="uppercase">The Story</a>
            </div>
            <button className="btn btn-primary uppercase">Webshop</button>
          </nav>
        </header>

        {/* HERO */}
        <section
          id="home"
          className="col-span-12 h-screen relative bg-cover bg-center"
          style={{ backgroundImage: "url('/libs/herovideo.png')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 flex items-center justify-center h-full px-6">
            <h1 className="font-hero text-h1 text-white text-center">
              Welcome to Cozy Social Club
            </h1>
          </div>
        </section>

        {/* INTRO */}
        <section className="col-span-12 lg:col-start-3 lg:col-span-8 text-center py-16 px-6">
          <h2 className="font-display text-h2 mb-4">Cozy Social Club</h2>
          <p className="font-accent mb-4">You have been cordially invited</p>
          <p className="font-body text-[var(--color-muted)]">
            Crafted Catering, Unforgettable Moments
          </p>
        </section>

        {/* FEATURE 1 */}
        <section className="col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 py-16 max-w-7xl mx-auto">
          <div className="lg:col-span-6">
            <h3 className="font-display text-h2 mb-2">Welcome to Cozy Social Club</h3>
            <h4 className="font-subtitle text-h3 mb-4">
              Crafted Catering, Unforgettable Moments
            </h4>
            <p className="font-body mb-6">
              Cozy Social Club is a full-service event and hospitality brand dedicated to crafting warm, inviting experiences that bring people together. We create memorable gatherings with exceptional service, thoughtful details, and a welcoming atmosphere.
            </p>
            <button className="btn btn-primary">Contact Us</button>
          </div>
          <div className="lg:col-span-6">
            <Image
              src="/libs/firstimage.png"
              alt="Welcome"
              width={600}
              height={400}
              className="rounded-[20px]"
            />
          </div>
        </section>

        {/* FEATURE 2 */}
        <section className="col-span-12 bg-[var(--color-pantone-2023)] py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 max-w-7xl mx-auto items-center">
            <div className="lg:col-span-6">
              <Image
                src="/libs/secondimage.png"
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
        </section>

        {/* FEATURE 3 */}
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
              src="/libs/thirdimage.png"
              alt="Celebrate"
              width={600}
              height={400}
              className="rounded-[20px]"
            />
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="col-span-12 bg-[var(--color-pantone-2023)] py-16 text-center">
          <h4 className="mb-4">But what are people saying?</h4>
          <blockquote className="font-body italic mb-2 text-body">
            "Cozy Social Club made our event unforgettable! The attention to detail and warm atmosphere created a magical experience for our guests. Highly recommend!"
          </blockquote>
          <p className="mb-6">- Sarah Johnson</p>
          <Image
            src="/libs/sjlrenglogo.png"
            alt="Partner"
            width={200}
            height={80}
            className="mx-auto rounded-[20px]"
          />
        </section>

      {/* EVENTS */}
      <section id="popup" className="col-span-12 py-16 px-6">
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
                  src={`/libs/${key}.png`}
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
        </section>

        {/* FOUNDER */}
        <section className="col-span-12 bg-[var(--color-lighter-terracotta)] py-16 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto items-center">
            <div className="lg:col-span-6 flex justify-center">
              <Image
                src="/libs/juan.png"
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

        {/* STORY */}
        <section
          id="story"
          className="col-span-12 lg:col-start-2 lg:col-span-10 story-bg"
        >
          <div className="relative max-w-4xl mx-auto text-center py-16 px-6 space-y-8">
            <h2 className="font-display text-h2">The story</h2>
            <h3 className="font-display text-h3">More Than Just Food – A Cozy Invitation</h3>
            <p className="font-body">
              Cozy Social Club is more than just food – it’s an experience you become part of. We create intimate pop-up dinners and curated catering events where the atmosphere is just as important as the flavors. It’s a space where people from different walks of life gather around a shared table, great wine, and food made with love and intention.
            </p>
            <h3 className="font-display text-h3">Where It All Began</h3>
            <p className="font-body">
              Our concept was born from close friendships and long evenings filled with conversation, laughter, and quiet moments of connection in the middle of busy lives. That’s why our experiences aren’t just about what’s on the plate – but what happens around the table.
            </p>
            <p className="font-accent text-accent italic">
              "We wanted to bottle that magical feeling of a night with great friends, music, and wine."
            </p>
            <h2 className="font-display text-h2">Curated With Care</h2>
            <p className="font-body">
              Each event is carefully curated with attention to detail, aesthetics, and warmth. From location to menu to music – everything is chosen to create a cozy, informal, and exclusive vibe. We collaborate with local chefs, farmers, and creatives to bring you food that tastes like something – and feels like something.
            </p>
            <h3 className="italic">You're invited. Welcome to the table.</h3>
            <p className="font-accent text-accent">Juan Lomeli</p>
            <Image
              src="/libs/logo.svg"
              alt="CSC Logo"
              width={100}
              height={100}
              className="mx-auto"
            />
          </div>
        </section>

        {/* SOCIALS */}
        <section className="col-span-12 py-16 text-center">
          <a href="https://instagram.com/cozysocialclub" className="text-lg text-[var(--color-dark-espresso)]">
            @cozysocialclub
          </a>
          <div className="flex justify-center space-x-8 my-8">
            {['socials1', 'socials2', 'socials3', 'socials4'].map((icon, i) => (
              <Image key={i} src={`/libs/${icon}.png`} alt={icon} width={80} height={80} />
            ))}
          </div>
          <div className="flex justify-center space-x-6">
            <Image src="/libs/instalogo.png" alt="Instagram" width={60} height={60} />
            <Image src="/libs/fblogo.png" alt="Facebook" width={60} height={60} />
            <Image src="/libs/xlogo.png" alt="Twitter" width={60} height={60} />
          </div>
        </section>
      
      <footer className=" text-[var(--color-text)] px-6 py-16">
  <div className="max-w-7xl mx-auto flex flex-col gap-16">
    
    {/* Decorative line image */}
    <div className="flex justify-center">
      <Image src="/libs/line.png" alt="Decorative line" width={800} height={80} />
    </div>

    {/* Main content area */}
    <div className="flex flex-col md:flex-row justify-between gap-12 text-sm">

      {/* Left: Logo + Message + Contact */}
      <div className="max-w-md">
        <Image src="/libs/logo.svg" alt="Cozy Social Club" width={120} height={120} />
        <p className="font-accent text-accent text-xl mt-2">
          You have been cordially invited
        </p>
        <p className="mt-4 text-[var(--color-muted)]">
          At our Copenhagen headquarters, our event specialists are dedicated to ensuring your celebration is flawless.
        </p>
        <div className="border-t border-[var(--color-accent-green)] my-4" />
        <div className="space-y-1 text-[var(--color-muted)]">
          <p><strong>Call Us:</strong> +45 23 34 45 56</p>
          <p><strong>Email us:</strong> contact@cozysocialclub.com</p>
          <p><strong>Find us:</strong> Copenhagen N, Denmark</p>
        </div>
      </div>
<div className="flex flex-col justify-between">
      {/* Middle: Links */}
      <div className="grid grid-cols-3 gap-8 text-sm">
        <div>
          <h5 className="text-[var(--color-terracotta)] font-semibold mb-2">About</h5>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Meet the team</li>
            <li>Gallery</li>
          </ul>
        </div>
        <div>
          <h5 className="text-[var(--color-terracotta)] font-semibold mb-2">Services</h5>
          <ul className="space-y-1">
            <li>Catering</li>
            <li>Pop-up</li>
            <li>Food</li>
          </ul>
        </div>
        <div>
          <h5 className="text-[var(--color-terracotta)] font-semibold mb-2">Follow</h5>
          <ul className="space-y-1">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>

      {/* Right: Newsletter */}
      <div className="max-w-sm">
        <h5 className="text-[var(--color-terracotta)] font-semibold text-lg mb-2">
          Do you want to join the club?
        </h5>
        <form className="flex items-center border border-[var(--color-accent-green)] rounded-sm overflow-hidden">
          <input
            type="email"
            placeholder="Email"
            className="flex-grow p-2  text-white placeholder:text-[var(--color-muted)] outline-none"
          />
          <button
            type="submit"
            className="bg-[var(--color-terracotta)] text-white px-4 py-2 font-bold text-xs"
          >
            SIGN ME UP
          </button>
        </form>
      </div>
    </div>
    </div>
    {/* Bottom line and copyright */}
    <div className="border-t border-[var(--color-accent-green)] pt-6 text-xs text-[var(--color-muted)] flex flex-col md:flex-row justify-between items-center gap-4">
      <p>© Cozy Social Club. All rights reserved.</p>
      <p className="flex items-center gap-2">site by NORDALF <span className="rounded-full border border-white w-4 h-4"></span></p>
    </div>
  </div>
</footer>
</main>
    </div>
  );
}
