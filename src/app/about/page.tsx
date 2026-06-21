import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/data";
import PageHero from "@/components/PageHero";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "אודות",
  description: "אימפריית הניילון – מפעל ישראלי מוביל לייצור שקיות ושקיות ממותגות, עם ניסיון של עשרות שנים ותקני איכות מחמירים.",
};

const values = [
  { title: "ייצור עצמי", text: "מפעל בבעלותנו ביבנה – שליטה מלאה באיכות ובזמני האספקה." },
  { title: "אחריות סביבתית", text: "אפשרות לחומרים מתכלים ופתרונות ידידותיים לסביבה." },
  { title: "שירות אישי", text: "ליווי וייעוץ מקצועי מההזמנה ועד האספקה." },
  { title: "תקנים מחמירים", text: "ISO 9001 ותקן 5113 למגע עם מזון." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="מי אנחנו"
        title="אימפריית הניילון"
        subtitle="עשרות שנות ניסיון בייצור שקיות ופתרונות אריזה לעסקים בכל הארץ."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 grid gap-10 lg:grid-cols-2 items-center">
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
          <Image src={asset("/images/banners/factory.jpg")} alt="המפעל שלנו" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-black">פתרונות אריזה, מקצה לקצה</h2>
          <p className="mt-4 text-muted leading-relaxed">
            אימפריית הניילון היא חברה מובילה בישראל לייצור שקיות, שקיות ממותגות, שקיות ניילון ופתרונות אריזה מתקדמים.
            אנו מייצרים מגוון רחב של שקיות – מנשיאה יומיומית, דרך שקיות מזון העומדות בתקן, ועד שקיות יוקרה ממותגות –
            הכול בהתאמה אישית מלאה למידות, לצבעים ולהדפסה הנדרשים.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            עם ייצור עצמי במפעל, שליטה מלאה על איכות החומרים ושירות אישי לכל לקוח, אנו מספקים את הפתרון המדויק לכל עסק –
            בכל כמות ולכל מקום בישראל.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {site.certifications.map((c) => (
              <span key={c} className="rounded-full bg-surface border border-border px-4 py-2 text-sm font-medium">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-center text-3xl font-black">הערכים שמנחים אותנו</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white border border-border border-t-2 border-t-gold p-6">
                <h3 className="font-display font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
