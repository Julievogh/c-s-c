// app/blog/page.jsx
import Image from "next/image";
import Link from "next/link";

export default async function BlogPage() {
  const res = await fetch("http://localhost:1337/api/articles?populate=cover", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
  const { data: articles } = await res.json();

  return (
    <main className="prose mx-auto p-4">
      <h1>Blog</h1>
      <ul>
        {articles.map(
          ({ id, title, slug, description, publishedAt, cover }) => {
            // pick your size
            const src = cover?.formats?.medium?.url || cover?.url;
            return (
              <li key={id} className="mb-8">
                <Link href={`/blog/${slug}`} className="text-2xl font-bold">
                  {title}
                </Link>
                {src && (
                  <Image
                    src={`http://localhost:1337${src}`}
                    width={750}
                    height={500}
                    alt={title}
                    className="my-4 rounded-lg"
                  />
                )}
                <p className="mt-2">{description}</p>
                <p className="mt-1 text-sm text-gray-500">
                  {new Date(publishedAt).toLocaleDateString()}
                </p>
              </li>
            );
          }
        )}
      </ul>
    </main>
  );
}
