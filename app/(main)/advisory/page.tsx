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
    <div className="min-h-screen bg-[#f8f8f2] flex flex-col xl:flex-row cursor-default">
      {/* Image */}
      <div className="w-full aspect-[1734/2560] xl:aspect-auto xl:w-1/2 xl:h-screen overflow-hidden bg-[#f8f8f2] p-6 md:p-8 xl:p-10">
        <div className="relative w-full h-full">
          <PlaceholderImage
            src="/images/advisory_page.avif"
            alt="Studio Zamani, collectible design advisory"
            fill
            className="object-cover object-top xl:object-contain"
            sizes="(max-width: 1280px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Copy — title anchored to the lamp */}
      <div className="w-full xl:w-1/2 xl:h-screen flex flex-col justify-start px-6 pb-12 pt-6 xl:px-10 xl:pb-9 xl:pt-[6vh]">
        <p
          className="text-[16px] uppercase tracking-[0.12em] leading-[1.7] mb-4 font-semibold"
          style={{ fontFamily: "Aeonik, sans-serif", wordSpacing: "0.06em" }}
        >
          Collectible Design Advisory
        </p>

        <div
          className="flex flex-col gap-1.5 text-[15px] leading-[2] text-[#1a1a1a] max-w-[560px]"
          style={{ wordSpacing: "0.04em" }}
        >
          <p>
            Each project begins with the person, the place, and the way it is lived in.</p> <p>Through
              Studio Zamani, I work with clients to create a more considered way of living with
              furniture, objects, and works of art. Guided by my background in interior architecture,
              design history, provenance, and material knowledge, I curate vintage and contemporary
              design, historically significant pieces, works by emerging designers, and objects
              chosen for their relevance to each project.
          </p>
          <p>
            My aim is to help clients build collections that are coherent, thoughtful, and built to
            <span className="xl:whitespace-nowrap"> endure.</span>
          </p>
        </div>

        <p
          className="mt-5 mb-3 text-[16px] uppercase tracking-[0.12em] leading-[1.7] font-semibold"
          style={{ fontFamily: "Aeonik, sans-serif", wordSpacing: "0.06em" }}
        >
          The Process
        </p>

        <div className="flex flex-col gap-2 max-w-[560px]">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col gap-1">
              <p
                className="text-[14px] uppercase tracking-[0.04em] leading-snug text-[#1a1a1a] font-medium"
                style={{ fontFamily: "Aeonik, sans-serif" }}
              >
                {step.title}
              </p>
              <p className="text-[14px] leading-[1.4] text-[#1a1a1a]/70">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
