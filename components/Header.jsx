import Image from 'next/image';

const Header = () => {

return (
<header className="col-span-12 bg-[var(--color-warm-white)] py-6 shadow-lg fixed w-full z-50">
          <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <div className="flex space-x-8">
              <a href="#popup" className="uppercase">Pop-up Experience</a>
              <a href="#fine-dining" className="uppercase">Fine-Dining</a>
            </div>
            <div>
              <a href="#">
                <Image src="/imgs/logo.svg" alt="Cozy Social Club" width={200} height={200} />
              </a>
            </div>
            <div className="flex space-x-8">
              <a href="#your-event" className="uppercase">Your Event</a>
              <a href="#story" className="uppercase">The Story</a>
            </div>
            <button className="btn btn-primary uppercase">Webshop</button>
          </nav>
        </header>
)
}

        export default Header;