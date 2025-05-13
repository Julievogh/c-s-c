import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337";

export async function generateStaticParams() {
  try {
    const res = await fetch(`${API_URL}/api/articles`);
    if (!res.ok) {
      console.error("Fejl ved hentning af artikler:", res.statusText);
      return [];
    }

    const json = await res.json();
    return json.data.map((item) => ({
      slug: item.attributes.slug, // OBS! lowercase og inde i attributes
    }));
  } catch (error) {
    console.error("Fejl i generateStaticParams:", error);
    return [];
  }
}

export default async function ArticlePage({ params }) {
  try {
    const res = await fetch(
      `${API_URL}/api/articles?filters[slug][$eq]=${params.slug}&populate=cover`,
      { cache: "no-store" }
    );
    if (!res.ok) return notFound();

    const { data } = await res.json();
    if (!data.length) return notFound();

    const article = data[0].attributes;
    const { title, description, publishedAt, cover, longtext } = article;
    const src = cover?.formats?.large?.url || cover?.url;

    return (
      <main className="bg-[color:var(--color-warm-white)]">
        <div className="grid grid-cols-12 px-4 lg:px-0">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2 py-12">
            {/* Tilbage til blog */}
            <Link href="/blog" className="inline-block mb-8">
              <span className="btn-outline btn px-4 py-2">← Back to Blog</span>
            </Link>

            {/* Titel */}
            <h1 className="font-accent text-[var(--font-accent-size)] text-center mb-4">
              {title}
            </h1>

            {/* Dato */}
            <p className="text-center text-sm text-gray-500 mb-8">
              Published on {new Date(publishedAt).toLocaleDateString()}
            </p>

            {/* Cover billede */}
            {src && (
              <div className="flex justify-center mb-12">
                <Image
                  src={`${API_URL}${src}`}
                  width={1000}
                  height={600}
                  alt={title}
                  className="w-full max-w-[800px] h-auto object-cover rounded-lg"
                />
              </div>
            )}

            {/* Beskrivelse */}
            {description && (
              <div className="prose max-w-prose mx-auto mb-16">
                <p>{description}</p>
              </div>
            )}

            {/* Lang tekst */}
            {Array.isArray(longtext) && longtext.length > 0 && (
              <div className="prose max-w-prose mx-auto mb-16">
                {longtext.map((item, index) => {
                  if (item.type === "paragraph") {
                    return <p key={index}>{item.children?.[0]?.text || ""}</p>;
                  } else if (item.type === "heading") {
                    return (
                      <h2 key={index}>{item.children?.[0]?.text || ""}</h2>
                    );
                  }
                  return null;
                })}
              </div>
            )}
          </div>
        </div>
      </main>
    );
  } catch (err) {
    console.error("Fejl i ArticlePage:", err);
    return notFound();
  }
}
