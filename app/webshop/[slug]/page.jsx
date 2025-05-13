import ProductDetail from "@/components/ProductDetail";
import { notFound } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337";

// 👇 Stop trying to fetch slugs at build time
export const dynamic = "force-dynamic";

export default async function ProductPage({ params }) {
  try {
    const res = await fetch(
      `${API}/api/products?filters[Slug][$eq]=${params.slug}&populate=*`,
      { cache: "no-store" }
    );
    if (!res.ok) return notFound();

    const { data } = await res.json();
    if (!data.length) return notFound();

    const prod = data[0].attributes;
    const { Title, Description, Price, Image: imgObj, Colors, Slug } = prod;

    const description = Array.isArray(Description)
      ? Description.map((blk) =>
          blk.children.map((ch) => ch.text).join(" ")
        ).join("\n\n")
      : "";

    const mainPath = imgObj?.formats?.small?.url ?? imgObj?.url ?? null;
    const mainImage = mainPath ? `${API}${mainPath}` : null;

    const allRes = await fetch(`${API}/api/products?populate=*`, {
      cache: "no-store",
    });
    const { data: allData } = await allRes.json();
    const others = allData
      .filter((o) => o.attributes.Slug !== Slug)
      .slice(0, 3)
      .map((o) => {
        const io = o.attributes.Image;
        const p = io?.formats?.small?.url ?? io?.url ?? null;
        return {
          title: o.attributes.Title,
          slug: o.attributes.Slug,
          imageUrl: p ? `${API}${p}` : null,
        };
      });

    return (
      <ProductDetail
        title={Title}
        price={Price}
        description={description}
        imageUrl={mainImage}
        slug={Slug}
        others={others}
        colors={Colors}
        note="Made to order. Limited edition drop—once it’s gone, it’s gone."
      />
    );
  } catch (err) {
    console.error("Fejl i ProductPage:", err);
    return notFound();
  }
}
