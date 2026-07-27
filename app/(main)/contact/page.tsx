import Link from "next/link";
import { PlaceholderImage } from "../../components/PlaceholderImage";
import { NewsletterForm } from "../../components/NewsletterForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f2] flex flex-col lg:flex-row">
      {/* Image — top aligns with logo, bottom aligns with Contact in the sidebar */}
      <div className="w-full aspect-[2560/1917] lg:aspect-auto lg:w-[60%] lg:h-screen overflow-hidden bg-[#f8f8f2] p-0 lg:pl-10 lg:pr-10 lg:pt-10 lg:pb-16">
        <div className="relative w-full h-full">
          <PlaceholderImage
            src="/images/contact_page.avif"
            alt="Studio Zamani"
            fill
            className="object-cover object-left"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>
      </div>

      {/* Info — bottom aligned */}
      <div className="w-full lg:w-[40%] lg:h-screen flex flex-col px-6 pt-8 pb-12 lg:px-12 lg:pt-10 lg:pb-16">
        <div className="flex-1 flex flex-col justify-end gap-10">
          {/* Email */}
          <div className="flex flex-col gap-3">
            <p
              className="text-[13px] uppercase tracking-[0.12em] leading-none text-[#1a1a1a] font-semibold"
              style={{ fontFamily: "Aeonik, sans-serif" }}
            >
              Email
            </p>
            <a
              href="mailto:contact@studiozamani.com"
              className="text-[15px] font-normal text-[#1a1a1a] underline underline-offset-4 decoration-[#1a1a1a]/40 hover:decoration-[#1a1a1a] transition-colors w-fit"
            >
              contact@studiozamani.com
            </a>
          </div>

          {/* Studio */}
          <div className="flex flex-col gap-3">
            <p
              className="text-[13px] uppercase tracking-[0.12em] leading-none text-[#1a1a1a] font-semibold"
              style={{ fontFamily: "Aeonik, sans-serif" }}
            >
              Studio
            </p>
            <p className="text-[15px] leading-[1.5] text-[#1a1a1a] max-w-[300px] font-normal">
              18 Stanhope Terrace, Suite 5,<br />
              W2 2TU, London, United Kingdom
            </p>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-3">
            <p
              className="text-[13px] uppercase tracking-[0.12em] leading-none text-[#1a1a1a] font-semibold"
              style={{ fontFamily: "Aeonik, sans-serif" }}
            >
              Newsletter
            </p>
            <p className="text-[13px] leading-[1.5] text-[#1a1a1a]/70 max-w-[360px] font-normal">
              Sign up for occasional news from the studio.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Legal / credit (desktop — mobile uses the global footer bar) */}
        <div className="hidden lg:flex flex-wrap items-center gap-x-4 gap-y-1 pt-10">
          <Link href="/cookies" className="text-[11px] text-[#242020]/40 hover:text-[#242020] transition-colors leading-none">Cookies</Link>
          <Link href="/privacy" className="text-[11px] text-[#242020]/40 hover:text-[#242020] transition-colors leading-none">Privacy</Link>
          <span className="text-[11px] text-[#242020]/30 leading-none">© {new Date().getFullYear()} Studio Zamani</span>
          <a
            href="https://belowthefold.gr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-[#8B7D6B] hover:text-[#242020] transition-colors leading-none"
          >
            Designed &amp; Developed by Below The Fold
          </a>
        </div>
      </div>
    </div>
  );
}
