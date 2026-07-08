export default function CookiesPage() {
  return (
    <section className="min-h-screen bg-[#f8f6ed] px-6 py-10 lg:px-10 lg:py-10">
      <div className="mx-auto w-full max-w-3xl border border-[#242020]/10 bg-[#f8f6ed] p-6 lg:p-10">
        <h1
          className="mb-8 text-[18px] uppercase tracking-[0.08em] text-[#242020]"
          style={{ fontFamily: "Conneqt, sans-serif", fontWeight: 700 }}
        >
          Cookies
        </h1>

        <div className="space-y-7 text-[13px] leading-[1.75] text-[#242020]">
          <p>
            This website uses cookies and similar technologies to ensure the
            site works as expected and to improve your browsing experience.
          </p>

          <div className="space-y-2">
            <h2
              className="text-[12px] uppercase tracking-[0.08em]"
              style={{ fontFamily: "Conneqt, sans-serif", fontWeight: 700 }}
            >
              Essential Cookies
            </h2>
            <p>
              These cookies are necessary for core functionality, including
              navigation and secure access to site features.
            </p>
          </div>

          <div className="space-y-2">
            <h2
              className="text-[12px] uppercase tracking-[0.08em]"
              style={{ fontFamily: "Conneqt, sans-serif", fontWeight: 700 }}
            >
              Analytics Cookies
            </h2>
            <p>
              We may use anonymous usage analytics to understand how visitors
              use the website and improve content and performance.
            </p>
          </div>

          <div className="space-y-2">
            <h2
              className="text-[12px] uppercase tracking-[0.08em]"
              style={{ fontFamily: "Conneqt, sans-serif", fontWeight: 700 }}
            >
              Managing Cookies
            </h2>
            <p>
              You can manage or disable cookies in your browser settings at any
              time. Disabling certain cookies may affect site behavior.
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
