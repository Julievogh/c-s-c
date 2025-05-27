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
      `${API_URL}/api/articles?populate=cover,author,category&sort=publishedAt:desc`,
      { cache: "no-store" }
    );
    if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
    const json = await res.json();
    articles = json.data.map((entry) => ({
      id: entry.id,
      ...entry.attributes,
    }));
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

          {/* Hero Post */}
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
                    className="underline hover:text-[color:var(--color-dark-green)]"
                  >
                    {articles[0].author?.name}
                  </Link>{" "}
                  in{" "}
                  <Link
                    href={`/blog/category/${articles[0].category?.slug}`}
                    className="underline hover:text-[color:var(--color-dark-green)]"
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

          {/* Featured & Archive Posts (omit for simplicity or copy more slices here) */}
        </div>
      </div>
    </main>
  );
}
