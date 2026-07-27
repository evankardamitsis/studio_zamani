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
    <div className="bg-[#f8f8f2] flex flex-col lg:flex-row lg:h-screen lg:px-10 lg:gap-10 lg:py-8 lg:box-border">
      {/* Image — equal width & height to text column */}
      <div className="w-full aspect-[1734/2560] lg:aspect-auto lg:flex-1 lg:min-w-0 lg:h-full overflow-hidden bg-[#f8f8f2]">
        <div className="relative w-full h-full">
          <PlaceholderImage
            src="/images/advisory_page.avif"
            alt="Studio Zamani, collectible design advisory"
            fill
            className="object-cover object-top lg:object-contain lg:object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Copy — title aligns with matchstick head */}
      <div className="w-full lg:flex-1 lg:min-w-0 lg:h-full flex flex-col px-6 py-8 lg:px-0 lg:py-0 lg:ml-4">
        <div className="lg:h-full lg:flex lg:flex-col">
          <div className="hidden lg:block lg:h-[31.9%] lg:flex-shrink-0" aria-hidden="true" />
          <div className="lg:flex-1 lg:min-h-0 lg:flex lg:flex-col lg:max-w-[460px] xl:max-w-[480px] lg:text-[clamp(12.5px,1.38vh,15px)]">
            <div className="flex-shrink-0">
              <p
                className="text-[1.067em] uppercase tracking-[0.08em] leading-none mb-3 lg:mb-2.5 font-semibold"
                style={{ fontFamily: "Aeonik, sans-serif" }}
              >
                Collectible Design Advisory
              </p>

              <div className="flex flex-col gap-1.5 lg:gap-1 text-[1em] leading-[1.45] text-[#1a1a1a] font-normal">
                <p>Each project begins with the person, the place, and the way it is lived in.
                  <br></br>Through Studio Zamani, I work with clients to create a more considered way of living
                  with furniture, objects, and works of art.
                  <br></br>
                  Guided by my background in interior architecture, design history, provenance, and
                  material knowledge, I curate vintage and contemporary design, historically significant
                  pieces, works by emerging designers, and objects chosen for their relevance to each
                  project.
                </p>
              </div>

              <p className="mt-2 lg:mt-1.5 text-[1em] leading-[1.45] text-[#1a1a1a] font-normal">
                My aim is to help clients build collections that are coherent, thoughtful, and built to
                endure.
              </p>
            </div>

            <div className="flex-1 min-h-0 flex flex-col justify-end">
              <p
                className="mt-4 lg:mt-3 mb-1 text-[1.133em] uppercase tracking-[0.01em] leading-none text-[#1a1a1a] font-semibold"
                style={{ fontFamily: "Aeonik, sans-serif" }}
              >
                The Process
              </p>

              <div className="flex flex-col gap-1 lg:gap-0.5">
                {steps.map((step) => (
                  <div key={step.title} className="flex flex-col">
                    <p
                      className="text-[1em] uppercase leading-tight text-[#1a1a1a] font-medium"
                      style={{ fontFamily: "Aeonik, sans-serif" }}
                    >
                      {step.title}
                    </p>
                    <p className="text-[1em] leading-[1.38] text-[#1a1a1a]/70 font-normal">{step.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
