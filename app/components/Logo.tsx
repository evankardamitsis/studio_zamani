import Image from "next/image";
import fs from "fs";
import path from "path";

const LOGO_PATH = path.join(process.cwd(), "public/logo/logo.svg");

export function Logo() {
  const logoExists = fs.existsSync(LOGO_PATH);

  if (!logoExists) {
    return (
      <h1 className="text-2xl font-light tracking-[0.2em] text-neutral-100 uppercase">
        Studio Zamani
      </h1>
    );
  }

  return (
    <Image
      src="/logo/logo.svg"
      alt="Studio Zamani"
      width={240}
      height={80}
      priority
      unoptimized
      className="h-auto w-auto max-h-20 max-w-[240px]"
    />
  );
}
