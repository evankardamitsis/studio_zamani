import Image from "next/image";
import { PageLabel } from "../../components/PageLabel";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f6ed] lg:pt-10 lg:pr-10">
      {/* Full-bleed image */}
      <div className="relative w-full h-[50vh] lg:h-[80vh]">
        <Image
          src="/images/interior/003ManiaLondon.avif"
          alt="Studio Zamani interiors"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </div>

      {/* Headline band, matching Advisory / Studio */}
      <div className="px-6 lg:px-10 pt-10 lg:pt-16">
        <PageLabel index={5} label="Contact" />
        <h1
          className="text-[11vw] lg:text-[6.4vw] leading-[0.92] tracking-[-0.01em] max-w-[1400px]"
          style={{ fontFamily: "Conneqt, sans-serif", fontWeight: 900 }}
        >
          Get in Touch
        </h1>
        <div className="flex justify-end mt-8 lg:mt-10">
          <p className="text-[15px] leading-relaxed max-w-[440px] text-[#1a1a1a]">
            For advisory inquiries, sourcing, press, or to visit the studio —
            reach out directly below.
          </p>
        </div>
      </div>

      {/* Contact info */}
      <div className="flex-shrink-0 border-t border-[#242020]/10 pb-[60px] lg:pb-0 mt-10 lg:mt-16">
        {/* Mobile: 2×2 grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 px-6 py-8 lg:hidden">
          <div className="flex flex-col gap-3">
            <p className="text-[16px] uppercase text-[#242020] leading-none" style={{fontFamily: "Conneqt, sans-serif", fontWeight: 700}}>Studio</p>
            <p className="text-[15px] text-[#242020] leading-[1.5] whitespace-pre-line">{"MANIAZAMANI FINE JEWELRY\n505 Greenwich Street\nSuite 2F, New York\n+1 646 685 4584"}</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[16px] uppercase text-[#242020] leading-none" style={{fontFamily: "Conneqt, sans-serif", fontWeight: 700}}>Sales</p>
            <a href="mailto:sales@maniazamani.com" className="text-[15px] text-[#242020] hover:opacity-60 transition-opacity leading-[1.5] break-all">
              sales@maniazamani.com
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[16px] uppercase text-[#242020] leading-none" style={{fontFamily: "Conneqt, sans-serif", fontWeight: 700}}>Press</p>
            <a href="mailto:info@maniazamani.com" className="text-[15px] text-[#242020] hover:opacity-60 transition-opacity leading-[1.5] break-all">
              info@maniazamani.com
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[16px] uppercase text-[#242020] leading-none" style={{fontFamily: "Conneqt, sans-serif", fontWeight: 700}}>Social</p>
            <div className="flex flex-col gap-1">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[15px] text-[#242020] hover:opacity-60 transition-opacity leading-[1.5]">Facebook</a>
              <a href="https://instagram.com/studiozamani" target="_blank" rel="noopener noreferrer" className="text-[15px] text-[#242020] hover:opacity-60 transition-opacity leading-[1.5]">Instagram</a>
            </div>
          </div>
        </div>

        {/* Desktop: 4-column row */}
        <div className="hidden lg:flex gap-[44px] px-10 py-10">
          <div className="flex-1 flex flex-col gap-5">
            <p className="text-[16px] uppercase text-[#242020] leading-none" style={{fontFamily: "Conneqt, sans-serif", fontWeight: 700}}>Studio</p>
            <p className="text-[12px] text-[#242020] leading-[1.4] whitespace-pre-line">{"MANIAZAMANI FINE JEWELRY 505\nGreenwich Street, Suite 2F New York\n+1 646 685 4584"}</p>
          </div>
          <div className="flex-1 flex flex-col gap-5">
            <p className="text-[16px] uppercase text-[#242020] leading-none" style={{fontFamily: "Conneqt, sans-serif", fontWeight: 700}}>Sales</p>
            <a href="mailto:sales@maniazamani.com" className="text-[12px] text-[#242020] hover:opacity-60 transition-opacity leading-[1.4]">sales@maniazamani.com</a>
          </div>
          <div className="flex-1 flex flex-col gap-5">
            <p className="text-[16px] uppercase text-[#242020] leading-none" style={{fontFamily: "Conneqt, sans-serif", fontWeight: 700}}>Press</p>
            <a href="mailto:info@maniazamani.com" className="text-[12px] text-[#242020] hover:opacity-60 transition-opacity leading-[1.4]">info@maniazamani.com</a>
          </div>
          <div className="flex-1 flex flex-col gap-5">
            <p className="text-[16px] uppercase text-[#242020] leading-none" style={{fontFamily: "Conneqt, sans-serif", fontWeight: 700}}>Social</p>
            <div className="flex flex-col gap-1">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[12px] text-[#242020] hover:opacity-60 transition-opacity leading-[1.4]">Facebook</a>
              <a href="https://instagram.com/studiozamani" target="_blank" rel="noopener noreferrer" className="text-[12px] text-[#242020] hover:opacity-60 transition-opacity leading-[1.4]">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
