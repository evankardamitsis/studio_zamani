import { PlaceholderImage } from "../../components/PlaceholderImage";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f2] flex flex-col lg:flex-row cursor-default">
      {/* Image */}
      <div className="w-full aspect-[1963/2560] lg:aspect-auto lg:w-1/2 lg:h-screen overflow-hidden bg-[#f8f8f2] p-0 lg:p-10">
        <div className="relative w-full h-full">
          <PlaceholderImage
            src="/images/about_page.avif"
            alt="Mania Zamani, founder of Studio Zamani"
            fill
            className="object-cover object-top lg:object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Bio text */}
      <div className="w-full lg:w-1/2 lg:h-screen flex flex-col justify-start lg:justify-end px-6 pb-12 pt-4 lg:px-10 lg:py-10">
        <p className="text-[16px] uppercase tracking-[0.12em] leading-snug mb-8 max-w-[680px] font-semibold" style={{fontFamily: "Aeonik, sans-serif"}}>
          Studio Zamani is a multidisciplinary design studio led by Mania
          Zamani, working across interior architecture, collectible design
          advisory, and fine jewelry.
        </p>

        <div className="flex flex-col gap-4 text-[15px] leading-[1.65] text-[#1a1a1a] max-w-[680px] font-normal">
          <p>
            Having studied interior architecture, jewelry design, and gemology,
            Mania approaches space through proportion, materiality, and detail.
            Her work is defined by restraint, tactile richness, and a
            considered dialogue between contemporary pieces, vintage furniture,
            and collectible objects.
          </p>
          <p>
            Through Studio Zamani, she creates interiors for private and public
            spaces, balancing function with atmosphere and quiet character.
            Each project is guided by clarity, craftsmanship, and the belief
            that spaces should feel deeply personal rather than overly
            designed.
          </p>
        </div>
      </div>
    </div>
  );
}
