import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f6f8f8] pt-10 pr-10">
      {/* Full-bleed image */}
      <div className="relative flex-1 overflow-hidden min-h-0">
        <Image
          src="/images/Mania_5 1.png"
          alt="Studio Zamani"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </div>

      {/* 4-column contact footer */}
      <div className="flex-shrink-0 flex flex-wrap md:flex-nowrap gap-[44px] px-10 py-10 border-t border-[#242020]/10">
        <div className="flex-1 flex flex-col gap-5">
          <p className="text-[14px] uppercase text-[#242020] leading-none" style={{fontFamily: "Conneqt, sans-serif", fontWeight: 700}}>Studio</p>
          <p className="text-[12px] text-[#242020] leading-[1.4] whitespace-pre-line">{"MANIAZAMANI FINE JEWELRY 505\nGreenwich Street, Suite 2F New York\n+1 646 685 4584"}</p>
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <p className="text-[14px] uppercase text-[#242020] leading-none" style={{fontFamily: "Conneqt, sans-serif", fontWeight: 700}}>Sales</p>
          <a
            href="mailto:sales@maniazamani.com"
            className="text-[12px] text-[#242020] hover:opacity-60 transition-opacity leading-[1.4]"
          >
            sales@maniazamani.com
          </a>
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <p className="text-[14px] uppercase text-[#242020] leading-none" style={{fontFamily: "Conneqt, sans-serif", fontWeight: 700}}>Press</p>
          <a
            href="mailto:info@maniazamani.com"
            className="text-[12px] text-[#242020] hover:opacity-60 transition-opacity leading-[1.4]"
          >
            info@maniazamani.com
          </a>
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <p className="text-[14px] uppercase text-[#242020] leading-none" style={{fontFamily: "Conneqt, sans-serif", fontWeight: 700}}>Social</p>
          <div className="flex flex-col gap-1">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-[#242020] hover:opacity-60 transition-opacity leading-[1.4]"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com/studiozamani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-[#242020] hover:opacity-60 transition-opacity leading-[1.4]"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
