interface Props {
  index: number;
  label: string;
  className?: string;
}

export function PageLabel({ index, label, className }: Props) {
  return (
    <p className={`text-[9px] uppercase tracking-[0.2em] text-[#1a1a1a]/50 ${className ?? "mb-4"}`}>
      Studio Zamani — {String(index).padStart(2, "0")} / {label}
    </p>
  );
}
