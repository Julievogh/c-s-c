import Image from "next/image";
import Link from "next/link";

export const revalidate = 0;

const API_URL = process.env.API_URL ?? "http://localhost:1337";

export default async function BlogPage() {
  const res = await fetch(
    `${API_URL}/api/articles?populate=cover&sort=publishedAt:desc`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
  const { data: articles } = await res.json();

  return (
    <main className="bg-[color:var(--color-warm-white)]">
      <div className="grid grid-cols-12 px-4 lg:px-0">
        <div className="col-span-12 lg:col-span-10 lg:col-start-2">
          {/* Titel & undertekst */}
          <h1 className="font-accent text-[var(--font-accent-size)] text-center mt-16">
            Blog
          </h1>
          <p className="font-accent text-xl text-center mt-2 mb-12">
            You have been cordially invited
          </p>

          {/* Hero-post */}
          {articles[0] && (
            <Link href={`/blog/${articles[0].slug}`} className="block">
              <section className="bg-[color:var(--color-pantone-2024)] p-6 rounded-lg mb-16 hover:shadow-lg transition-shadow">
                <p className="text-center text-sm uppercase tracking-widest text-[color:var(--color-golden)]">
                  Best inspiring stories
                </p>
                <h2 className="font-display text-4xl text-center my-4">
                  {articles[0].title}
                </h2>
                <p className="text-center text-sm text-gray-500 mb-4">
                  {new Date(articles[0].publishedAt).toLocaleDateString()}
                </p>
                {articles[0].cover && (
                  <Image
                    src={`${API_URL}${
                      articles[0].cover.formats?.medium?.url ||
                      articles[0].cover.url
                    }`}
                    width={1200}
                    height={600}
                    alt={articles[0].title}
                    className="w-full h-[400px] object-cover rounded-lg mb-6"
                  />
                )}
                <div className="text-center">
                  <span className="btn-outline btn px-8 py-2">Read More</span>
                </div>
              </section>
            </Link>
          )}

          {/* Divider */}
          <div className="flex justify-center mb-16">
            <svg
              width="100"
              height="20"
              fill="none"
              stroke="var(--color-deep-wine)"
            >
              <path d="M0,10 C25,0 75,20 100,10" strokeWidth="2" />
            </svg>
          </div>

          {/* Kategori-navigation */}
          <nav className="flex justify-center gap-8 mb-8 text-xs uppercase tracking-wide">
            {[
              "Behind the Menu",
              "Setting Your Holiday Table",
              "Another Category",
            ].map((cat) => (
              <button
                key={cat}
                className="font-display hover:text-[color:var(--color-deep-wine)]"
              >
                {cat}
              </button>
            ))}
          </nav>

          {/* To indlæg side-om-side */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {articles.slice(1, 3).map((article) => {
              const { id, title, slug, cover, publishedAt } = article;
              const imageUrl = cover?.formats?.medium?.url || cover?.url;

              return (
                <Link
                  key={id}
                  href={`/blog/${slug}`}
                  className="block bg-[color:var(--color-soft-beige)] rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {imageUrl && (
                    <Image
                      src={`${API_URL}${imageUrl}`}
                      width={600}
                      height={300}
                      alt={title}
                      className="w-full h-64 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <p className="text-xs uppercase text-[color:var(--color-deep-wine)] tracking-wider">
                      Featured
                    </p>
                    <h3 className="font-display text-2xl mt-2 mb-2">{title}</h3>
                    <time className="block text-sm text-gray-500 mb-4">
                      {new Date(publishedAt).toLocaleDateString()}
                    </time>
                    <div className="text-center">
                      <span className="btn-primary btn px-6 py-2">
                        Read More
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </section>

          {/* Divider */}
          <div className="flex justify-center mb-16">
            <svg
              width="100"
              height="20"
              fill="none"
              stroke="var(--color-deep-wine)"
            >
              <path d="M0,10 C25,20 75,0 100,10" strokeWidth="2" />
            </svg>
          </div>

          {/* Tidligere indlæg */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {articles.slice(3, 9).map((article) => {
              const { id, title, slug, cover, publishedAt } = article;
              const imageUrl = cover?.formats?.small?.url || cover?.url;

              return (
                <Link
                  key={id}
                  href={`/blog/${slug}`}
                  className="block bg-[color:var(--color-soft-beige)] rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {imageUrl && (
                    <Image
                      src={`${API_URL}${imageUrl}`}
                      width={400}
                      height={200}
                      alt={title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <p className="text-xs uppercase text-[color:var(--color-golden)] tracking-wider">
                      Archive
                    </p>
                    <h4 className="font-display text-xl mt-1 mb-2">{title}</h4>
                    <time className="block text-sm text-gray-500 mb-4">
                      {new Date(publishedAt).toLocaleDateString()}
                    </time>
                    <span className="btn-outline btn px-5 py-1">Read More</span>
                  </div>
                </Link>
              );
            })}
          </section>
        </div>
      </div>
    </main>
  );
}
