import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="col-span-12 h-screen relative bg-cover bg-center"
      style={{ backgroundImage: "url('/imgs/herovideo.png')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <h1 className="font-hero text-h1 text-white text-center">
          Welcome to Cozy Social Club
        </h1>
      </div>
    </section>
  );
}
