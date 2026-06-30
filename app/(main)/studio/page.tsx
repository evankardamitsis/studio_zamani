import { PlaceholderImage } from "../../components/PlaceholderImage";

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-[#f6f8f8] flex flex-col md:flex-row">
      {/* Image */}
      <div className="relative w-full h-[60vw] md:w-[55%] md:h-auto md:min-h-screen overflow-hidden">
        <PlaceholderImage
          src="/images/image 2.jpg"
          alt="Mania Zamani, founder of Studio Zamani"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 55vw"
        />
      </div>

      {/* Bio text */}
      <div className="w-full md:w-[45%] flex flex-col justify-end px-6 pb-12 pt-8 md:px-14 md:pb-16 md:pt-24">
        <p className="text-[11px] uppercase tracking-[0.12em] leading-snug mb-8 max-w-[480px]" style={{fontFamily: "Conneqt, sans-serif", fontWeight: 700}}>
          Mania Zamani is the exquisite result of one woman&apos;s life
          journey. An odyssey that took her from her native Tehran to New York,
          her adopted home.
        </p>

        <div className="flex flex-col gap-4 text-[11px] leading-[1.65] text-[#1a1a1a] max-w-[480px]">
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
            designer.
          </p>
        </div>
      </div>
    </div>
  );
}
