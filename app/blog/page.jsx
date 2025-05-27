// app/blog/page.jsx
import Image from "next/image";
import Link from "next/link";

export const revalidate = 0;
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337";
export const dynamic = "force-dynamic";

function getImageUrl(path) {
  if (!path) return "/imgs/placeholder.png";
  return path.startsWith("http") ? path : `${API_URL}${path}`;
}

export default async function BlogPage() {
  let articles = [];

  try {
    const res = await fetch(
      `${API_URL}/api/articles?sort=publishedAt:desc&populate[cover]=*&populate[author]=*&populate[category]=*`,
      { cache: "no-store" }
    );
    if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
    const json = await res.json();
    articles = json.data.map((entry) => {
      const { id, attributes } = entry;
      return {
        id,
        title: attributes.title,
        slug: attributes.slug,
        publishedAt: attributes.publishedAt,
        cover: attributes.cover?.data?.attributes,
        author: attributes.author?.data?.attributes,
        category: attributes.category?.data?.attributes,
      };
    });
  } catch (err) {
    console.error("Fejl ved hentning af blogindlæg:", err);
  }

  if (!articles.length) {
    return <main className="p-8">Ingen blogindlæg fundet.</main>;
  }

  return (
    <main className="bg-[color:var(--color-warm-white)]">
      <div className="grid grid-cols-12 px-4 lg:px-0">
        <div className="col-span-12 lg:col-span-10 lg:col-start-2">
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
                <p className="text-center text-sm text-gray-500 mb-1">
                  {new Date(articles[0].publishedAt).toLocaleDateString()}
                </p>
                <p className="text-center text-sm text-gray-500 mb-4">
                  By{" "}
                  <Link
                    href={`/blog/author/${articles[0].author?.slug}`}
                    className="underline"
                  >
                    {articles[0].author?.name}
                  </Link>{" "}
                  in{" "}
                  <Link
                    href={`/blog/category/${articles[0].category?.slug}`}
                    className="underline"
                  >
                    {articles[0].category?.name}
                  </Link>
                </p>
                {(() => {
                  const cover = articles[0].cover;
                  const imgPath = cover?.formats?.medium?.url || cover?.url;
                  return imgPath ? (
                    <Image
                      src={getImageUrl(imgPath)}
                      width={1200}
                      height={600}
                      alt={articles[0].title}
                      className="w-full h-[400px] object-cover rounded-lg mb-6"
                    />
                  ) : null;
                })()}
                <div className="text-center">
                  <span className="btn-outline btn px-8 py-2">Read More</span>
                </div>
              </section>
            </Link>
          )}

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

          {/* Indlæg side om side */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {articles.slice(1, 3).map((article) => {
              const imgPath =
                article.cover?.formats?.medium?.url || article.cover?.url;
              return (
                <Link
                  key={article.id}
                  href={`/blog/${article.slug}`}
                  className="block bg-[color:var(--color-soft-beige)] rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {imgPath && (
                    <Image
                      src={getImageUrl(imgPath)}
                      width={600}
                      height={300}
                      alt={article.title}
                      className="w-full h-64 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <p className="text-xs uppercase text-[color:var(--color-deep-wine)] tracking-wider mb-1">
                      {article.category?.name} &nbsp;&bull;&nbsp;{" "}
                      {article.author?.name}
                    </p>
                    <h3 className="font-display text-2xl mt-2 mb-2">
                      {article.title}
                    </h3>
                    <time className="block text-sm text-gray-500 mb-4">
                      {new Date(article.publishedAt).toLocaleDateString()}
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

          {/* Arkiv-indlæg */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {articles.slice(3, 9).map((article) => {
              const imgPath =
                article.cover?.formats?.small?.url || article.cover?.url;
              return (
                <Link
                  key={article.id}
                  href={`/blog/${article.slug}`}
                  className="block bg-[color:var(--color-soft-beige)] rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {imgPath && (
                    <Image
                      src={getImageUrl(imgPath)}
                      width={400}
                      height={200}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <p className="text-xs uppercase text-[color:var(--color-golden)] tracking-wider mb-1">
                      {article.category?.name} &nbsp;&bull;&nbsp;{" "}
                      {article.author?.name}
                    </p>
                    <h4 className="font-display text-xl mt-1 mb-2">
                      {article.title}
                    </h4>
                    <time className="block text-sm text-gray-500 mb-4">
                      {new Date(article.publishedAt).toLocaleDateString()}
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
