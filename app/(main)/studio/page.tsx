import { PlaceholderImage } from "../../components/PlaceholderImage";
import { PageLabel } from "../../components/PageLabel";

const disciplines = [
  { title: "Interior Architecture", body: "Creating interiors for private and public spaces, balancing function with atmosphere and quiet character." },
  { title: "Collectible Design Advisory", body: "Curating vintage and contemporary design, historically significant pieces, and works by emerging designers." },
  { title: "Fine Jewelry", body: "Drawing on training in jewelry design and gemology to bring the same material rigor to smaller scale objects." },
];

export default function StudioPage() {
  return (
    <div className="bg-[#f8f6ed]">
      {/* Full-width hero, no split screen — framed toward the top so her face stays in shot on wide screens */}
      <div className="relative w-full h-[70vh] lg:h-[75vh]">
        <PlaceholderImage
          src="/images/mania-portrait.avif"
          alt="Mania Zamani, founder of Studio Zamani"
          fill
          className="object-cover object-[50%_15%]"
          sizes="100vw"
        />
      </div>

      {/* Headline runs full width beneath the image, magazine-style */}
      <div className="px-6 lg:px-10 pt-10 lg:pt-16">
        <PageLabel index={4} label="Studio" />
        <h1
          className="text-[11vw] lg:text-[6.4vw] leading-[0.92] tracking-[-0.01em] max-w-[1400px]"
          style={{ fontFamily: "Conneqt, sans-serif", fontWeight: 900 }}
        >
          Studio Zamani
        </h1>

        {/* Intro column, offset to the right like a magazine dek */}
        <div className="flex justify-end mt-8 lg:mt-10">
          <p className="text-[15px] leading-relaxed max-w-[440px] text-[#1a1a1a]">
            Studio Zamani is a multidisciplinary design studio led by <strong>Mania
              Zamani,</strong> working across interior architecture, collectible design
            advisory, and fine jewelry.
          </p>
        </div>
      </div>

      {/* Body copy in a two-column editorial grid */}
      <div className="px-6 lg:px-10 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 border-t border-[#1a1a1a]/10 mt-16">
        <p className="text-[15px] leading-relaxed text-[#1a1a1a]">
          Having studied interior architecture, jewelry design, and gemology,
          Mania approaches space through proportion, materiality, and detail.
          Her work is defined by restraint, tactile richness, and a
          considered dialogue between contemporary pieces, vintage furniture,
          and collectible objects.
        </p>
        <p className="text-[15px] leading-relaxed text-[#1a1a1a]">
          Through Studio Zamani, she creates interiors for private and public
          spaces, balancing function with atmosphere and quiet character. Each
          project is guided by clarity, craftsmanship, and the belief that
          spaces should feel deeply personal rather than overly designed.
        </p>
      </div>

      {/* Disciplines as a full-width numbered index, not stacked cards */}
      <div className="px-6 lg:px-10 pb-24 lg:pb-32">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[#1a1a1a]/50 mb-8">
          Practice
        </p>
        <div className="border-t border-[#1a1a1a]/10">
          {disciplines.map((item, i) => (
            <div
              key={item.title}
              className="grid grid-cols-[56px_1fr] lg:grid-cols-[100px_320px_1fr] gap-4 lg:gap-10 py-6 border-b border-[#1a1a1a]/10 items-baseline"
            >
              <span
                className="text-[13px] text-[#1a1a1a]/40"
                style={{ fontFamily: "Conneqt, sans-serif", fontWeight: 700 }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p
                className="text-[13px] uppercase tracking-[0.06em]"
                style={{ fontFamily: "Conneqt, sans-serif", fontWeight: 700 }}
              >
                {item.title}
              </p>
              <p className="col-span-2 lg:col-span-1 text-[14px] leading-relaxed text-[#1a1a1a]/80 max-w-[520px]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
