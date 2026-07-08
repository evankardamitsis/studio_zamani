import { PlaceholderImage } from "../../components/PlaceholderImage";

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-[#f8f6ed] flex flex-col lg:flex-row">
      {/* Image */}
      <div className="w-full h-[105vw] lg:w-1/2 lg:h-screen overflow-hidden bg-[#f8f6ed] p-6 lg:p-10">
        <div className="relative w-full h-full">
          <PlaceholderImage
            src="/images/interior/038ManiaLondon.avif"
            alt="Mania Zamani, founder of Studio Zamani"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Bio text */}
      <div className="w-full lg:w-1/2 lg:h-screen flex flex-col justify-end px-6 pb-12 pt-8 lg:px-10 lg:pb-10 lg:pt-24">
        <p className="text-[13px] uppercase tracking-[0.12em] leading-snug mb-8 max-w-[680px]" style={{fontFamily: "Conneqt, sans-serif", fontWeight: 700}}>
          Mania Zamani is the exquisite result of one woman&apos;s life
          journey. An odyssey that took her from her native Tehran to New York,
          her adopted home.
        </p>

        <div className="flex flex-col gap-4 text-[13px] leading-[1.65] text-[#1a1a1a] max-w-[680px]">
          <p>
            As a child, MANIA ZAMANI was fascinated with architecture and
            minerals. Her passion for precious stones came from a deeply rooted
            Persian tradition: In Iranian culture, precious gemstones and gold
            are given to newborns and newlyweds. Jewelry thus becomes a symbol
            of profound ties with family and friends.
          </p>
          <p>
            MANIA ZAMANI&apos;s interest in the proportions and patterns of
            natural phenomena drew her to mathematics, which she studied at
            university. Her search for the true and timeless measure of harmony
            explains to this day the pivotal role of maths and geometry in her
            work on fine jewelry.
          </p>
          <p>
            Her restless search for beauty and science in precious stones led
            MANIA ZAMANI to New York, where she studied gemology and jewelry
            design at the Gemological Institute of America. She later continued
            feeding her passion for fine jewelry at the Fashion Institute of
            Technology.
          </p>
          <p>
            Today, MANIA ZAMANI&apos;s is a cohesive vision based on
            architectural form and principle; a material essay on mathematical
            proportions and geometric shape. The constructive possibilities of
            fine jewelry and their technical challenges are what drive the
            designer. ZAMANI&apos;s preoccupation is with buildings made of
            lines, angles and squares yet her interpretation of texture and
            color is modern, highly stylistic and undeniably feminine.
          </p>
          <p>
            &quot;What fascinates me about fine jewelry goes beyond gemstones
            taking millions of years to form&quot;, explains MANIA ZAMANI.
            &quot;Precious stones have deep geopolitical, historical and
            cultural significance. Crucially, jewelry is design meant to be
            worn in real life - today, just as it was centuries ago and will
            be ages from now&quot;.
          </p>
        </div>
      </div>
    </div>
  );
}
