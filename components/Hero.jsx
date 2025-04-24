export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Cropped fullscreen video background */}
    {/*  <div className="absolute inset-0 -z-10">
        <iframe
          className="w-[177.77vw] h-[100vh] md:w-[100vw] md:h-[56.25vw] lg:w-[100vw] lg:h-[56.25vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/4MxhmYmU_rk?autoplay=1&mute=1&controls=0&loop=1&playlist=4MxhmYmU_rk&modestbranding=1&showinfo=0&rel=0"
          title="YouTube video background"
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
*/}
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Hero content */}
      <div className="relative z-20 flex items-center justify-center h-full px-6">
        <h1 className="font-hero text-h1 text-white text-center">
          Welcome to Cozy Social Club
        </h1>
      </div>
    </section>
  );
}
