// app/webshop/[slug]/page.jsx
import ProductDetail from "@/components/ProductDetail";
import { notFound } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337";

export async function generateStaticParams() {
  try {
    const res = await fetch(`${API}/api/products`);
    if (!res.ok) {
      console.error("Fejl ved hentning af produkter:", res.statusText);
      return [];
    }

    const json = await res.json();
    return json.data.map((item) => ({
      slug: item.attributes.slug, // lowercase slug
    }));
  } catch (error) {
    console.error("Fejl i generateStaticParams:", error);
    return [];
  }
}

export default async function ProductPage({ params }) {
  try {
    const res = await fetch(
      `${API}/api/products?filters[slug][$eq]=${params.slug}&populate=*`,
      { cache: "no-store" }
    );
    if (!res.ok) return notFound();

    const { data } = await res.json();
    if (!data.length) return notFound();

    const prod = data[0].attributes;
    const {
      title,
      description: descRaw,
      price,
      image: imgObj,
      colors,
      slug,
    } = prod;

    const description = Array.isArray(descRaw)
      ? descRaw
          .map((blk) => blk.children.map((ch) => ch.text).join(" "))
          .join("\n\n")
      : "";

    const mainPath = imgObj?.formats?.small?.url ?? imgObj?.url ?? null;
    const mainImage = mainPath ? `${API}${mainPath}` : null;

    const allRes = await fetch(`${API}/api/products?populate=*`, {
      cache: "no-store",
    });
    const { data: allData } = await allRes.json();

    const others = allData
      .filter((o) => o.attributes.slug !== slug)
      .slice(0, 3)
      .map((o) => {
        const io = o.attributes.image;
        const p = io?.formats?.small?.url ?? io?.url ?? null;
        return {
          title: o.attributes.title,
          slug: o.attributes.slug,
          imageUrl: p ? `${API}${p}` : null,
        };
      });

    return (
      <ProductDetail
        title={title}
        price={price}
        description={description}
        imageUrl={mainImage}
        slug={slug}
        others={others}
        colors={colors}
        note="Made to order. Limited edition drop—once it’s gone, it’s gone. Your order reserves your spot."
      />
    );
  } catch (err) {
    console.error("Fejl i ProductPage:", err);
    return notFound();
  }
}
