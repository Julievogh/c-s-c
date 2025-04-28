// app/blog/[slug]/page.jsx

import Image from "next/image";
import Link from "next/link";
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

  const { title, description, publishedAt, cover, longtext } = data[0];
  const src = cover?.formats?.large?.url || cover?.url;

  return (
    <main className="bg-[color:var(--color-warm-white)]">
      {/* 12-column grid with side margin */}
      <div className="grid grid-cols-12 px-4 lg:px-0">
        {/* Wrapper: 12 cols small, 10 cols from column 2 on lg */}
        <div className="col-span-12 lg:col-span-10 lg:col-start-2 py-12">
          {/* Back button */}
          <Link href="/blog" className="inline-block mb-8">
            <span className="btn-outline btn px-4 py-2">← Back to Blog</span>
          </Link>

          {/* Title */}
          <h1 className="font-accent text-[var(--font-accent-size)] text-center mb-4">
            {title}
          </h1>

          {/* Date */}
          <p className="text-center text-sm text-gray-500 mb-8">
            Published on {new Date(publishedAt).toLocaleDateString()}
          </p>

          {/* Cover image */}
          {src && (
            <div className="flex justify-center mb-12">
              <Image
                src={`http://localhost:1337${src}`}
                width={1000}
                height={600}
                alt={title}
                className="w-full max-w-[800px] h-auto object-cover rounded-lg"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose max-w-prose mx-auto mb-16">
            <p>{description}</p>
          </div>

          {/* Render longtext */}
          <div className="prose max-w-prose mx-auto mb-16">
            {longtext.map((block, index) => {
              switch (block.type) {
                case "paragraph":
                  return (
                    <p key={index}>
                      {block.children.map((child, idx) => child.text).join("")}
                    </p>
                  );
                case "heading":
                  return (
                    <h2 key={index}>
                      {block.children.map((child, idx) => child.text).join("")}
                    </h2>
                  );
                case "list":
                  return (
                    <ul key={index}>
                      {block.children.map((item, idx) => (
                        <li key={idx}>
                          {item.children.map((child, i) => child.text).join("")}
                        </li>
                      ))}
                    </ul>
                  );
                // Add more block types as needed
                default:
                  return null;
              }
            })}
          </div>

          {/* Decorative divider */}
          <div className="flex justify-center">
            <svg
              width="120"
              height="24"
              fill="none"
              stroke="var(--color-deep-wine)"
            >
              <path d="M0,12 C30,0 90,24 120,12" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}
