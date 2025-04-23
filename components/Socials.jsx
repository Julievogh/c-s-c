import Image from "next/image";

export default function Socials() { return( <section className="col-span-12 py-16 text-center">
    <a href="https://instagram.com/cozysocialclub" className="text-lg text-[var(--color-dark-espresso)]">
      @cozysocialclub
    </a>
    <div className="flex justify-center space-x-8 my-8">
      {['socials1', 'socials2', 'socials3', 'socials4'].map((icon, i) => (
        <Image key={i} src={`/imgs/${icon}.png`} alt={icon} width={80} height={80} />
      ))}
    </div>
    <div className="flex justify-center space-x-6">
      <Image src="/imgs/instalogo.png" alt="Instagram" width={60} height={60} />
      <Image src="/imgs/fblogo.png" alt="Facebook" width={60} height={60} />
      <Image src="/imgs/xlogo.png" alt="Twitter" width={60} height={60} />
    </div>
  </section>)}