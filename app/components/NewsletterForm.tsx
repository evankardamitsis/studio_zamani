"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <p className="text-[13px] leading-[1.5] text-[#1a1a1a]/70 max-w-[360px]">
        Thank you — you&rsquo;re on the list.
      </p>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="flex flex-col max-w-[360px]"
    >
      <div className="flex items-center border-b border-[#1a1a1a]/25 focus-within:border-[#1a1a1a] transition-colors">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          aria-label="Email address"
          className="flex-1 min-w-0 bg-transparent py-2 text-[13px] text-[#1a1a1a] outline-none placeholder:text-[#1a1a1a]/40"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          disabled={status === "loading"}
          className="shrink-0 pl-4 py-2 text-[#1a1a1a] hover:opacity-50 transition-opacity disabled:opacity-30"
        >
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
            <path d="M14 1L19 6L14 11M19 6H1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      {status === "error" && (
        <p className="text-[12px] text-red-600/80 mt-2">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
