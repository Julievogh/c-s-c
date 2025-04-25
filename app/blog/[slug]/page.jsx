// app/blog/[slug]/page.jsx
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:1337/api/articles");
  const { data } = await res.json();
  return data.map(({ slug }) => ({ slug }));
}

export default async function ArticlePage({ params }) {
  const res = await fetch(
    `http://localhost:1337/api/articles?filters[slug][$eq]=${params.slug}&populate=cover`,
    { cache: "no-store" }
  );
  if (!res.ok) return notFound();
  const { data } = await res.json();
  if (!data.length) return notFound();

  const { title, description, publishedAt, cover } = data[0];
  const src = cover?.formats?.large?.url || cover?.url;

  return (
    <article className="prose mx-auto p-4">
      <h1>{title}</h1>
      {src && (
        <Image
          src={`http://localhost:1337${src}`}
          width={1000}
          height={666}
          alt={title}
          className="mb-6 rounded-lg"
        />
      )}
      <p className="text-gray-700">{description}</p>
      <p className="mt-4 text-sm text-gray-500">
        Published on {new Date(publishedAt).toLocaleDateString()}
      </p>
    </article>
  );
}
