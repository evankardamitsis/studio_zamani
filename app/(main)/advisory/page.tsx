import { PlaceholderImage } from "../../components/PlaceholderImage";
import { PageLabel } from "../../components/PageLabel";

const process = [
  { title: "Conversation & Brief", body: "Understanding the client, spatial context, budget, and direction of the collection." },
  { title: "Research & Curation", body: "Identifying vintage and collectible pieces, works by emerging designers, and objects suited to the brief." },
  { title: "Value & Provenance", body: "Assessing maker, period, condition, and market standing before any recommendation is made." },
  { title: "Visualization", body: "Bringing the collection to life through 3D renderings, layout planning, and visual presentations." },
  { title: "Acquisition Support", body: "Guiding sourcing, negotiation, and each step of the acquisition process." },
  { title: "Restoration & Reupholstery", body: "Coordinating upholstery, fabric selection, refinishing, and repairs to present each piece at its best." },
  { title: "Logistics & Installation", body: "Coordinating secure packaging, delivery, and careful installation." },
];

export default function AdvisoryPage() {
  return (
    <div className="bg-[#f8f6ed]">
      {/* Full-width hero, no split screen */}
      <div className="relative w-full h-[70vh] lg:h-[86vh] animate-fade-scale-in">
        <PlaceholderImage
          src="/images/interior/022ManiaLondon.avif"
          alt="Studio Zamani, collectible design advisory"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Headline runs full width beneath the image, magazine-style */}
      <div className="px-6 lg:px-10 pt-10 lg:pt-16">
        <div className="animate-fade-up [animation-delay:100ms]">
          <PageLabel index={2} label="Advisory" />
        </div>
        <h1
          className="text-[11vw] lg:text-[6.4vw] leading-[0.92] tracking-[-0.01em] max-w-[1400px] animate-fade-up [animation-delay:200ms]"
          style={{ fontFamily: "Conneqt, sans-serif", fontWeight: 900 }}
        >
          Collectible Design Advisory
        </h1>

        {/* Intro column, offset to the right like a magazine dek */}
        <div className="flex justify-end mt-8 lg:mt-10 animate-fade-up [animation-delay:320ms]">
          <p className="text-[15px] leading-relaxed max-w-[440px] text-[#1a1a1a]">
            Each project begins with the person, the place, and the way it is
            lived in. Through Studio Zamani, I work with clients to create a
            more considered way of living with furniture, objects, and works
            of art.
          </p>
        </div>
      </div>

      {/* Body copy in a two-column editorial grid */}
      <div className="px-6 lg:px-10 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 border-t border-[#1a1a1a]/10 mt-16 animate-fade-up [animation-delay:420ms]">
        <p className="text-[15px] leading-relaxed text-[#1a1a1a]">
          Guided by my background in interior architecture, design history,
          provenance, and material knowledge, I curate vintage and
          contemporary design, historically significant pieces, works by
          emerging designers, and objects chosen for their relevance to each
          project.
        </p>
        <p className="text-[15px] leading-relaxed text-[#1a1a1a]">
          My aim is to help clients build collections that are coherent,
          thoughtful, and built to endure — pieces selected not for trend, but
          for the way they will be lived with over decades.
        </p>
      </div>

      {/* Process as a full-width numbered dossier, not stacked cards */}
      <div className="px-6 lg:px-10 pb-24 lg:pb-32">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[#1a1a1a]/50 mb-8">
          The Process
        </p>
        <div className="border-t border-[#1a1a1a]/10">
          {process.map((step, i) => (
            <div
              key={step.title}
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
                {step.title}
              </p>
              <p className="col-span-2 lg:col-span-1 text-[14px] leading-relaxed text-[#1a1a1a]/80 max-w-[520px]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
