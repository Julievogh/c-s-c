import Image from "next/image";

export default function Home() {
  return (
    <div className="grid-mobile grid-desktop">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

      <header className="w-full bg-[var(--color-warm-white)] py-6 shadow-lg">
  <nav className="flex items-center justify-between max-w-7xl mx-auto px-6">
    {/* Left Side Menu */}
    <div>
    <div className="flex space-x-8">
      <a href="#home" className="text-lg text-gray-700 hover:text-gray-900">HOME</a>
      <a href="#about" className="text-lg text-gray-700 hover:text-gray-900">POP-UP EXPERIENCE</a>
      <a href="#services" className="text-lg text-gray-700 hover:text-gray-900">FINE-DINING</a>
      </div>
      <span>---------------</span>
    </div>

    {/* Centered Logo */}
    <div className="flex justify-center items-center">
    <a href="#" className="text-2xl font-bold text-gray-800"> <Image src="libs/logo.svg" alt="fun" width={200} height={200}/>
      </a>
    </div>
    <div>
    <div className="flex space-x-8">
      
      <a href="#about" className="text-lg text-gray-700 hover:text-gray-900">YOUR EVENT</a>
      <a href="#services" className="text-lg text-gray-700 hover:text-gray-900">THE STORY</a>
    </div>
    <span>---------------</span>
    {/* Right Side Button */}
    </div>
    <div>
    
      
      <button className="btn btn-primary">WEBSHOP</button>
    </div>
  </nav>
</header>


<section className="relative w-full h-screen bg-contain bg-center bg-no-repeat bg-[url('/libs/herovideo.png')] sm:bg-contain sm:bg-[url('/libs/herovideo.png')]">
  
  <div className="absolute inset-0 flex justify-center items-center text-center text-white z-10">
    <h1 className="font-hero text-h1 sm:text-4xl md:text-5xl lg:text-6xl">Welcome to Cozy Social Club</h1>
  </div>
</section>






        <div>
        <h1 className="font-hero text-h1">Hero Heading</h1>
        <p className="font-accent text-accent">You have been cordially invited</p>
       <span> ------------------ </span>
        </div>

        <div className="flex flex-col gap-[32px] sm:flex-row items-center">
          <div>
        <h4 className="font-display text-h2">Welcome to Cozy Social Club</h4>
        <h3 className="font-subtitle text-h3">Crafted Catering, Unforgettable Moments</h3>
        <p className="font-body text-body">Cozy Social Club is a full-service event and hospitality brand dedicated to crafting warm, inviting experiences that bring people together. We create memorable gatherings with exceptional service, thoughtful details, and a welcoming atmosphere. Whether it’s an intimate get-together or a lively celebration, we ensure every event feels special, effortless, and truly cozy.</p>
        <button className="btn btn-primary">CONTACT US</button>
        </div>
        <Image src="/libs/firstimage.png" alt="First Image" width={500} height={500} className="rounded-[20px] " />
          
        
        </div>

        <div className="flex flex-col gap-[32px] sm:flex-row items-center  bg-[url('/libs/ternetbg.png')] bg-cover bg-center w-full h-full">
        <Image src="/libs/secondimage.png" alt="First Image" width={500} height={500} className="rounded-[20px] " />
          
        
          <div>
        <h4 className="font-display text-h2">Experience the Magic of Connection</h4>
        <h3 className="font-subtitle text-h3">Friends, family & colleagues</h3>
        <p className="font-body text-body">Our amazing community is at the heart of Cozy Social Club. The connections we build—with our guests, team, and friends—make our work meaningful and inspire us to create unforgettable moments.
        We believe in the power of people and the joy of shared experiences. Our approach is rooted in warmth and hospitality, from thoughtfully curated menus to our attentive, welcoming staff. Every detail is designed to reflect personality, comfort, and the magic of bringing people together.</p>
        <button className="btn btn-secondary">BOOK -</button>
        </div>
       
        </div>
        <span> ------------------ </span>
        <div className="flex flex-col gap-[32px] sm:flex-row items-center">
          
          <div>
        <h4 className="font-display text-h2">Designed to Delight, Crafted to Celebrate</h4>
        <h3 className="font-subtitle text-h3">The Art of Cozy Celebrations</h3>
        <p className="font-body text-body">Our dedicated team carefully plans every detail to create a seamless and stress-free experience. From the first consultation to the final cleanup, we handle it all—so you can simply enjoy the moment.
        What sets Cozy Social Club apart is our passion for crafting immersive gatherings that truly reflect your vision. With a deep love for hospitality, we curate unique, thoughtful experiences that leave a lasting impression on your guests.</p>
        <button className="btn btn-secondary-outline">BOOK</button>
        </div>
        <Image src="/libs/thirdimage.png" alt="First Image" width={500} height={500} className="rounded-[20px] " />
          
        
        </div>
       
        <span> ------------------ </span>

      
      
<div className="bg-[var(--color-pantone-2023)] flex flex-col gap-[32px] sm:flex-col items-center">

<h3>But what are people saying?</h3>

<blockquote className="font-body text-body">"Cozy Social Club made our event unforgettable! The attention to detail and warm atmosphere created a magical experience for our guests. Highly recommend!"</blockquote>
<p className="font-body text-body">- Sarah Johnson</p>

<Image src="/libs/sjlrenglogo.png" width={400} height={400} alt="Sjælands Rengøring" className="rounded-[20px]" />

</div>

<div>


<h4 className="font-display text-h2">Don’t miss out!</h4>
<h3 className="font-display text-h2">Our next pop-up events</h3>
<div className="flex flex-col gap-[32px] sm:flex-row items-center">

  <div>
    <div className="bg-[var(--color-terracotta)]">
    <h4>Nørrebro Teater</h4>
    <h3 className="font-subtitle text-h3 text-[var(--color-warm-white)]">8th April</h3>
    <h4 >19:00</h4>
    <Image src="/libs/popup1.png" alt="First Image" width={400} height={400}  />
    </div>
    <div className="border border-[var(--color-light-green)] p-4">
    <h4>Taco Tuesday Fiesta</h4>
    <p className="font-body text-body">Join us for a fun-filled Taco Tuesday where we’re bringing the flavor and the fiesta straight to your table! Expect a delicious selection of tacos, from classic carnitas to zesty veggie options, all paired with refreshing drinks and vibrant vibes. Let’s make your Tuesday taste like a celebration!</p>
    <button className="btn btn-primary">SIGN UP</button>
  </div>
  </div>
  <div>
    <div className="bg-[var(--color-terracotta)]">
    <h4>Nørrebro Teater</h4>
    <h3 className="font-subtitle text-h3 text-[var(--color-warm-white)]">8th April</h3>
    <h4>19:00</h4>
    <Image src="/libs/popup2.png" alt="First Image" width={400} height={400}  />
    </div>

    <div className="border border-[var(--color-light-green)] p-4">
    <h4>Taco Tuesday Fiesta</h4>
    <p className="font-body text-body">Join us for a fun-filled Taco Tuesday where we’re bringing the flavor and the fiesta straight to your table! Expect a delicious selection of tacos, from classic carnitas to zesty veggie options, all paired with refreshing drinks and vibrant vibes. Let’s make your Tuesday taste like a celebration!</p>
    <button className="btn btn-primary">SIGN UP</button>
  </div>
  </div>
  <div>
    <div className="bg-[var(--color-terracotta)]">
    <h4>Nørrebro Teater</h4>
    <h3 className="font-subtitle text-h3 text-[var(--color-warm-white)]">8th April</h3>
    <h4>19:00</h4>
    <Image src="/libs/popup3.png" alt="First Image" width={400} height={400}  />
    </div>
    <div className="border border-[var(--color-light-green)] p-4">
    <h4>Taco Tuesday Fiesta</h4>
    <p className="font-body text-body">Join us for a fun-filled Taco Tuesday where we’re bringing the flavor and the fiesta straight to your table! Expect a delicious selection of tacos, from classic carnitas to zesty veggie options, all paired with refreshing drinks and vibrant vibes. Let’s make your Tuesday taste like a celebration!</p>
    <button className="btn btn-primary">SIGN UP</button>
    </div>
  </div>

  
</div>

<span>-------------</span>
</div>

<section className="flex flex-col gap-[32px] sm:flex-row items-center bg-[var(--color-lighter-terracotta)]">
  <div>
    <Image src="/libs/juan.png" alt="Juan the Founder" width={500} height={500} />
  </div>
<div>
<h2>Meet the founder</h2>
<p className="font-accent text-accent"> Come hungry, leave satisfied</p>
<h3><span>Juan</span> - The Chef Behind the Concept</h3>
<p>
Juan is a chef from Los Angeles with a passion for blending tradition and innovation. 

He grew up surrounded by bold flavors and diverse food cultures, and today he brings that same curiosity to Cozy Social Club. 

Whether he’s slow-cooking a classic or reimagining a dish with a twist, Juan believes that food should spark connection. 

His vision is simple: create shared experiences that feel personal, intimate, and delicious—like a dinner party with soul.</p>
</div>
</section>
        
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
