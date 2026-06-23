import { Logo } from "./components/Logo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-6 text-neutral-100">
      <div className="flex w-full max-w-md flex-col items-center gap-8 text-center">
        <Logo />

        <div className="flex flex-col items-center gap-3">
          <p className="max-w-sm text-sm leading-relaxed tracking-wide text-neutral-400">
            Interior Architecture and Collectible Design Advisory
          </p>
          <p className="text-xs tracking-[0.25em] text-neutral-500 uppercase mt-4">
            Coming Soon
          </p>
        </div>
      </div>
    </main>
  );
}
