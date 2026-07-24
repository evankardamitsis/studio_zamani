import { PlaceholderImage } from "../../components/PlaceholderImage";

const steps = [
  {
    title: "Conversation & Brief",
    body: "Understanding the client, spatial context, budget, and direction of the collection.",
  },
  {
    title: "Research & Curation",
    body: "Identifying vintage and collectible pieces, works by emerging designers, and objects suited to the brief.",
  },
  {
    title: "Value & Provenance",
    body: "Assessing maker, period, condition, and market standing before any recommendation is made.",
  },
  {
    title: "Visualization",
    body: "Bringing the collection to life through 3D renderings, layout planning, and visual presentations.",
  },
  {
    title: "Acquisition Support",
    body: "Guiding sourcing, negotiation, and each step of the acquisition process.",
  },
  {
    title: "Restoration & Reupholstery",
    body: "Coordinating upholstery, fabric selection, refinishing, and repairs to present each piece at its best.",
  },
  {
    title: "Logistics & Installation",
    body: "Coordinating secure packaging, delivery, and careful installation.",
  },
];

export default function AdvisoryPage() {
  return (
    <div className="bg-[#f8f8f2] flex flex-col lg:flex-row lg:items-start">
      {/* Image */}
      <div className="w-full aspect-[1734/2560] lg:aspect-auto lg:w-1/2 lg:h-screen lg:sticky lg:top-0 overflow-hidden bg-[#f8f8f2] p-0 lg:p-10">
        <div className="relative w-full h-full">
          <PlaceholderImage
            src="/images/advisory_page.avif"
            alt="Studio Zamani, collectible design advisory"
            fill
            className="object-cover object-top lg:object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Copy */}
      <div className="w-full lg:w-1/2 lg:min-h-screen flex flex-col justify-start px-6 py-8 lg:px-10 lg:py-0 lg:pt-[calc(31.9vh+8px)] lg:pb-8">
        {/* Page title — caps (site-wide: caps for page title only) */}
        <p
          className="text-[13px] uppercase tracking-[0.08em] leading-none mb-4"
          style={{ fontFamily: "Aeonik, sans-serif", fontWeight: 700 }}
        >
          Collectible Design Advisory
        </p>

        <div className="flex flex-col gap-2 text-[13px] leading-[1.55] text-[#1a1a1a] max-w-[560px]">
          <p>Each project begins with the person, the place, and the way it is lived in.</p>
          <p>
            Through Studio Zamani, I work with clients to create a more considered way of living
            with furniture, objects, and works of art.
          </p>
          <p>
            Guided by my background in interior architecture, design history, provenance, and
            material knowledge, I curate vintage and contemporary design, historically significant
            pieces, works by emerging designers, and objects chosen for their relevance to each
            project.
          </p>
        </div>

        {/* Closing thought — set apart with space */}
        <p className="mt-4 text-[13px] leading-[1.55] text-[#1a1a1a] max-w-[560px]">
          My aim is to help clients build collections that are coherent, thoughtful, and built to
          endure.
        </p>

        {/* Section shift signalled by space + weight, not a rule */}
        <p
          className="mt-6 mb-2.5 text-[15px] tracking-[0.01em] leading-none text-[#1a1a1a]"
          style={{ fontFamily: "Aeonik, sans-serif", fontWeight: 500 }}
        >
          The Process
        </p>

        <div className="flex flex-col gap-1.5 max-w-[560px]">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col">
              <p
                className="text-[13px] leading-tight text-[#1a1a1a]"
                style={{ fontFamily: "Aeonik, sans-serif", fontWeight: 500 }}
              >
                {step.title}
              </p>
              <p className="text-[13px] leading-[1.4] text-[#1a1a1a]/70">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
