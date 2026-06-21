import Image from "next/image";
import Link from "next/link";
import { homepage, categories, products, getProduct, site, whatsappLink, telLink } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import LeadForm from "@/components/LeadForm";
import ProductCube from "@/components/ProductCube";
import GallerySlideshow from "@/components/GallerySlideshow";
import { asset } from "@/lib/asset";

const galleryImages = ["g1", "g2", "g3", "g4", "g5", "g6"];

export default function Home() {
  const featured = homepage.featuredCategories
    .map((id) => getProduct(products.find((p) => p.id === id)?.slug ?? ""))
    .filter(Boolean);

  const bagTypes = homepage.bagTypes
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden hero-glow text-white">
        <div className="absolute inset-0">
          <Image src={asset(homepage.hero.image)} alt="בניין אימפריית הניילון באזור התעשייה ביבנה" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-l from-ink via-ink/85 to-ink/35" />
          <div className="absolute inset-0 hero-glow opacity-55 mix-blend-multiply" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-block rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-sm font-semibold text-gold">
              {homepage.hero.eyebrow}
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              {homepage.hero.title}
            </h1>
            <div className="mt-5 h-0.5 w-24 gold-rule rounded-full" />
            <p className="mt-5 text-lg text-white/80 leading-relaxed">{homepage.hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={homepage.hero.ctaPrimary.href} className="rounded-full bg-eco px-7 py-3.5 font-semibold text-white shadow-lg hover:bg-eco-dark transition">
                {homepage.hero.ctaPrimary.label}
              </Link>
              <Link href={homepage.hero.ctaSecondary.href} className="rounded-full bg-white/10 px-7 py-3.5 font-semibold text-white ring-1 ring-white/30 hover:bg-white/20 transition">
                {homepage.hero.ctaSecondary.label}
              </Link>
            </div>
          </div>
        </div>
        <div className="relative bg-gradient-to-l from-brand via-brand-dark to-brand">
          <div className="mx-auto max-w-6xl px-4 py-3 text-center text-sm font-medium tracking-wide">
            {homepage.announcement}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="mx-auto max-w-6xl px-4 -mt-10 relative z-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homepage.advantages.map((a) => (
            <div key={a.title} className="rounded-2xl border border-border border-t-2 border-t-gold bg-surface p-5 card-elegant">
              <h3 className="font-display font-bold">{a.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO / WELCOME */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="text-gold-dark font-bold text-sm">ברוכים הבאים</span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-black leading-tight">
              {homepage.intro.title}
            </h2>
            <p className="mt-4 text-lg text-foreground/90 font-medium leading-relaxed">
              {homepage.intro.lead}
            </p>
            {homepage.intro.paragraphs.map((p) => (
              <p key={p} className="mt-3 text-muted leading-relaxed">{p}</p>
            ))}
            <div className="mt-6 flex flex-wrap gap-2">
              {site.certifications.map((c) => (
                <span key={c} className="rounded-full border border-border bg-cream-2 px-3 py-1.5 text-xs font-medium text-foreground/80">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <GallerySlideshow images={homepage.intro.gallery} alt="מתקני המפעל של אימפריית הניילון ביבנה" />
        </div>
      </section>

      {/* HOT DEALS — rotating product cube */}
      <section className="relative overflow-hidden hero-glow text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="animate-fade-up">
              <span className="inline-block rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-sm font-semibold text-gold">
                {homepage.hotDeals.eyebrow}
              </span>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl font-black leading-tight">
                {homepage.hotDeals.title}
              </h2>
              <div className="mt-5 h-0.5 w-24 gold-rule rounded-full" />
              <p className="mt-5 text-lg text-white/80 leading-relaxed">{homepage.hotDeals.text}</p>
              <Link href={homepage.hotDeals.cta.href} className="mt-8 inline-block rounded-full bg-eco px-7 py-3.5 font-semibold text-white shadow-lg hover:bg-eco-dark transition">
                {homepage.hotDeals.cta.label}
              </Link>
            </div>
            <div className="flex justify-center py-6">
              <ProductCube images={homepage.hotDeals.images} />
            </div>
          </div>
        </div>
      </section>

      {/* BAG TYPES — images with explanations */}
      <section className="bg-cream-2 border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-black">{homepage.bagTypesTitle}</h2>
            <div className="mt-3 h-0.5 w-20 mx-auto gold-rule rounded-full" />
            <p className="mt-4 text-muted">{homepage.bagTypesSubtitle}</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bagTypes.map((p) => p && (
              <Link
                key={p.id}
                href={`/products/${p.slug}/`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface card-elegant transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-cream">
                  <Image src={asset(p.image)} alt={p.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-bold group-hover:text-brand transition">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-4 flex-1">{p.description}</p>
                  <span className="mt-3 text-sm font-semibold text-gold-dark">קראו עוד ←</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES — colorful */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-black">קטגוריות המוצרים</h2>
          <p className="mt-3 text-muted">מגוון רחב של שקיות ופתרונות אריזה – לכל עסק ולכל צורך.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/category/${c.slug}/`}
              className="group rounded-2xl border border-border border-t-4 bg-surface p-6 text-center card-elegant hover:-translate-y-1 hover:shadow-lg transition"
              style={{ borderTopColor: c.color }}
            >
              <h3 className="font-display text-lg font-bold transition" style={{ color: c.color }}>{c.name}</h3>
              <p className="mt-2 text-xs text-muted leading-relaxed">{c.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="hero-glow text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {homepage.stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl sm:text-5xl font-black text-gradient">{s.value}</div>
              <div className="mt-1 text-sm text-white/75">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* NYLON ADVANTAGES + VIDEO */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="text-eco-dark font-bold text-sm">למה ניילון?</span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-black leading-tight">
              {homepage.nylonAdvantages.title}
            </h2>
            <div className="mt-4 h-0.5 w-20 gold-rule rounded-full" />
            {homepage.nylonAdvantages.paragraphs.map((p) => (
              <p key={p} className="mt-3 text-muted leading-relaxed">{p}</p>
            ))}
          </div>
          <div>
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl ring-1 ring-border bg-ink">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${homepage.video.youtubeId}`}
                title={homepage.video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-center text-sm text-muted">{homepage.video.caption}</p>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-cream-2 border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-black">המוצרים המבוקשים</h2>
              <p className="mt-2 text-muted">השקיות הפופולריות ביותר אצל הלקוחות שלנו.</p>
            </div>
            <Link href="/products/" className="text-sm font-semibold text-gold-dark hover:underline">לכל המוצרים ←</Link>
          </div>
          <div className="mt-8 grid gap-4 grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => p && <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* BRANDED PITCH */}
      <section className="mx-auto max-w-6xl px-4 py-16 grid gap-10 lg:grid-cols-2 items-center">
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ring-1 ring-border order-last lg:order-first">
          <Image src={asset(homepage.brandedPitch.image)} alt="ייצור שקיות ממותגות" fill className="object-cover" />
        </div>
        <div>
          <span className="font-bold" style={{ color: "#7c4dbc" }}>שקיות ממותגות</span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-black leading-tight">{homepage.brandedPitch.title}</h2>
          <p className="mt-4 text-muted leading-relaxed">{homepage.brandedPitch.text}</p>
          <ul className="mt-6 space-y-3">
            {homepage.brandedPitch.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-eco shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <Link href="/branded/" className="mt-7 inline-flex rounded-full bg-gradient-to-l from-brand to-brand-dark px-7 py-3.5 font-semibold text-white shadow-sm hover:brightness-110 transition">
            גלו עוד על מיתוג
          </Link>
        </div>
      </section>

      {/* GALLERY MOSAIC */}
      <section className="bg-cream-2 border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-black">גלריית מוצרים</h2>
            <div className="mt-3 h-0.5 w-20 mx-auto gold-rule rounded-full" />
            <p className="mt-4 text-muted">מבחר מהשקיות וההדפסות שייצרנו עבור לקוחותינו.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {galleryImages.map((g, i) => (
              <div
                key={g}
                className={`relative overflow-hidden rounded-2xl ring-1 ring-border group ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}
              >
                <Image src={asset(`/images/gallery/${g}.jpg`)} alt="מוצר אימפריית הניילון" fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width:768px) 50vw, 33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <span className="text-gold-dark font-bold text-sm">{homepage.aboutTeaser.title}</span>
        <p className="mt-4 font-display text-xl sm:text-2xl text-foreground/90 leading-relaxed">
          {homepage.aboutTeaser.text}
        </p>
        <Link href={homepage.aboutTeaser.href} className="mt-6 inline-flex rounded-full border border-gold/50 px-7 py-3 font-semibold text-gold-dark hover:bg-gold hover:text-white transition">
          קראו עוד עלינו ←
        </Link>
      </section>

      {/* CONTACT + MAP */}
      <section className="hero-glow text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="text-gold font-bold text-sm">איך מגיעים אלינו</span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-black">{site.address}, {site.city}</h2>
            <div className="mt-4 h-0.5 w-20 gold-rule rounded-full" />
            <ul className="mt-6 space-y-3 text-white/85">
              <li className="flex flex-wrap items-center gap-x-3"><span className="text-gold font-semibold">טלפון:</span> <a href={telLink(site.phone)} className="hover:text-white">{site.phone}</a> · <a href={telLink(site.phone2)} className="hover:text-white">{site.phone2}</a></li>
              <li className="flex flex-wrap items-center gap-x-3"><span className="text-gold font-semibold">אימייל:</span> <a href={`mailto:${site.email}`} className="hover:text-white break-all">{site.email}</a></li>
              <li className="flex flex-wrap items-center gap-x-3"><span className="text-gold font-semibold">שעות פתיחה:</span> {site.hours}</li>
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={whatsappLink("היי, אשמח לקבל הצעת מחיר")} target="_blank" rel="noopener noreferrer" className="rounded-full bg-eco px-6 py-3 font-semibold text-white hover:bg-eco-dark transition">וואטסאפ</a>
              <Link href="/contact/" className="rounded-full bg-white/10 px-6 py-3 font-semibold ring-1 ring-white/30 hover:bg-white/20 transition">עמוד צור קשר</Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ring-1 ring-white/15">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.google.com/maps?q=הקישון%205%20יבנה&output=embed"
              title="מפה – הקישון 5, יבנה"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <div className="rounded-3xl border border-border bg-surface p-6 sm:p-10 card-elegant">
          <div className="text-center">
            <h2 className="font-display text-3xl font-black">קבלו הצעת מחיר מהירה</h2>
            <p className="mt-2 text-muted">השאירו פרטים ונחזור אליכם בהקדם – או שלחו ישירות בוואטסאפ.</p>
          </div>
          <div className="mt-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
