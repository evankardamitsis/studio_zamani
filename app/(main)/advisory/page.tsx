import { PlaceholderImage } from "../../components/PlaceholderImage";

export default function AdvisoryPage() {
  return (
    <div className="lg:h-screen lg:overflow-hidden bg-[#f8f6ed] flex flex-col lg:flex-row">
      {/* Image */}
      <div className="w-full h-[105vw] lg:w-1/2 lg:h-screen overflow-hidden bg-[#f8f6ed] p-6 lg:p-10">
        <div className="relative w-full h-full">
          <PlaceholderImage
            src="/images/interior/022ManiaLondon.avif"
            alt="Studio Zamani, collectible design advisory"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Copy */}
      <div className="w-full lg:w-1/2 lg:h-screen flex flex-col justify-end px-6 py-8 lg:px-10">
        <p className="text-[13px] uppercase tracking-[0.08em] leading-none mb-4" style={{fontFamily: "Conneqt, sans-serif", fontWeight: 700}}>
          Collectible Design Advisory
        </p>

        <p className="text-[13px] leading-relaxed mb-3 max-w-[700px] text-[#1a1a1a]">
          Each project begins with the person, the place, and the way it is
          lived in.
        </p>

        <div className="flex flex-col gap-3 text-[13px] leading-relaxed text-[#1a1a1a] max-w-[700px]">
          <p>
            Through Studio Zamani, I work with clients to create a more
            considered way of living with furniture, objects, and works of
            art.
          </p>
          <p>
            Guided by my background in interior architecture, design history,
            provenance, and material knowledge, I curate vintage and
            contemporary design, historically significant pieces, works by
            emerging designers, and objects chosen for their relevance to each
            project.
          </p>
          <p>
            My aim is to help clients build collections that are coherent,
            thoughtful, and built to endure.
          </p>
        </div>

        <div className="border-t border-[#1a1a1a]/10 mt-6 mb-6 max-w-[700px]" />

        <p className="text-[13px] uppercase tracking-[0.08em] leading-none mb-4" style={{fontFamily: "Conneqt, sans-serif", fontWeight: 700}}>
          The Process
        </p>

        <div className="flex flex-col gap-4 max-w-[700px]">
          {[
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
          ].map((step) => (
            <div key={step.title} className="flex flex-col gap-1">
              <p className="text-[12px] uppercase tracking-[0.08em] font-semibold text-[#1a1a1a] leading-tight">
                {step.title}
              </p>
              <p className="text-[13px] leading-relaxed text-[#1a1a1a]">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
