import Image from "next/image";

export default function ComingSoonPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center gap-6"
      style={{ backgroundColor: "#0d0d0d" }}
    >
      <Image
        src="/studio-zamani-logo.svg"
        alt="Studio Zamani"
        width={166}
        height={66}
        priority
        style={{ filter: "invert(1)" }}
      />
      <p
        className="text-[11px] tracking-[0.25em] uppercase"
        style={{ color: "rgba(255,255,255,0.35)" }}
      >
        Interior Architecture and Collectible Design Advisory
      </p>
      <p
        className="text-[10px] tracking-[0.3em] uppercase"
        style={{ color: "rgba(255,255,255,0.25)" }}
      >
        Coming Soon
      </p>
    </div>
  );
}
