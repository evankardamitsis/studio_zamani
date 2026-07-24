export default function PrivacyPage() {
  return (
    <section className="min-h-screen bg-[#f8f8f2] px-6 py-10 lg:px-10 lg:py-10">
      <div className="mx-auto w-full max-w-3xl border border-[#242020]/10 bg-[#f8f8f2] p-6 lg:p-10">
        <h1
          className="mb-8 text-[18px] uppercase tracking-[0.08em] text-[#242020]"
          style={{ fontFamily: "Aeonik, sans-serif", fontWeight: 700 }}
        >
          Privacy
        </h1>

        <div className="space-y-7 text-[13px] leading-[1.75] text-[#242020]">
          <p>
            Studio Zamani respects your privacy. This page outlines what
            information may be collected and how it is used.
          </p>

          <div className="space-y-2">
            <h2
              className="text-[12px] uppercase tracking-[0.08em]"
              style={{ fontFamily: "Aeonik, sans-serif", fontWeight: 700 }}
            >
              Information We Receive
            </h2>
            <p>
              If you contact us by email, we may receive personal details such
              as your name, email address, and message content.
            </p>
          </div>

          <div className="space-y-2">
            <h2
              className="text-[12px] uppercase tracking-[0.08em]"
              style={{ fontFamily: "Aeonik, sans-serif", fontWeight: 700 }}
            >
              How Information Is Used
            </h2>
            <p>
              Information is used solely to respond to inquiries, provide
              relevant communication, and improve the website experience.
            </p>
          </div>

          <div className="space-y-2">
            <h2
              className="text-[12px] uppercase tracking-[0.08em]"
              style={{ fontFamily: "Aeonik, sans-serif", fontWeight: 700 }}
            >
              Third Parties
            </h2>
            <p>
              We do not sell personal information. Limited third-party services
              may process anonymous technical data for hosting and analytics.
            </p>
          </div>

          <div className="space-y-2">
            <h2
              className="text-[12px] uppercase tracking-[0.08em]"
              style={{ fontFamily: "Aeonik, sans-serif", fontWeight: 700 }}
            >
              Contact
            </h2>
            <p>
              For privacy-related questions, contact{" "}
              <a
                href="mailto:info@maniazamani.com"
                className="underline decoration-[#242020]/30 underline-offset-4 hover:decoration-[#242020]"
              >
                info@maniazamani.com
              </a>
              .
            </p>
          </div>

          <p className="pt-2 text-[#242020]/70">
            Last updated: July 2026
          </p>
        </div>
      </div>
    </section>
  );
}
