// app/webshop/[slug]/page.jsx
import ProductDetail from "@/components/ProductDetail";
import { notFound } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_URL;

export async function generateStaticParams() {
  const res = await fetch(`${API}/api/products?populate=*`, {
    cache: "no-store",
  });
  if (!res.ok) return [];
  const { data } = await res.json();
  return data.map((item) => ({ slug: item.Slug }));
}

export default async function ProductPage({ params }) {
  const { slug } = params;

  // Fetch main product
  const res = await fetch(
    `${API}/api/products?filters[Slug][$eq]=${slug}&populate=*`,
    { cache: "no-store" }
  );
  if (!res.ok) return notFound();
  const { data } = await res.json();
  if (!data.length) return notFound();
  const prod = data[0];
  const { Title, Description, Price, Image: imgObj } = prod;

  // Flatten description
  const description = Array.isArray(Description)
    ? Description.map((blk) =>
        blk.children.map((ch) => ch.text).join(" ")
      ).join("\n\n")
    : "";

  // Build main image URL
  const mainPath = imgObj?.formats?.small?.url ?? imgObj?.url ?? null;
  const mainImage = mainPath ? `${API}${mainPath}` : null;

  // Fetch three other products
  const allRes = await fetch(`${API}/api/products?populate=*`, {
    cache: "no-store",
  });
  const { data: allData } = await allRes.json();
  const others = allData
    .filter((o) => o.Slug !== slug)
    .slice(0, 3)
    .map((o) => {
      const io = o.Image;
      const p = io?.formats?.small?.url ?? io?.url ?? null;
      return {
        title: o.Title,
        slug: o.Slug,
        imageUrl: p ? `${API}${p}` : null,
      };
    });

  // Hand off everything to a client component
  return (
    <ProductDetail
      title={Title}
      price={Price}
      description={description}
      imageUrl={mainImage}
      slug={slug}
      others={others}
    />
  );
}
