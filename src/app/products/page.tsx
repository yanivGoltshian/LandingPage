import type { Metadata } from "next";
import { products, categories } from "@/lib/data";
import ProductsCatalog from "@/components/ProductsCatalog";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "קטלוג המוצרים",
  description: "כל סוגי השקיות ופתרונות האריזה של אימפריית הניילון – שקיות נשיאה, מזון, גלילים, יוקרה ושקיות ממותגות.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="קטלוג"
        title="כל המוצרים שלנו"
        subtitle="סננו לפי קטגוריה, חפשו מוצר או הציגו רק שקיות הניתנות למיתוג."
      />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <ProductsCatalog products={products} categories={categories} />
      </div>
    </>
  );
}
