export function ProjectBadge({
  label,
  color,
}: {
  label: string;
  color: string;
}) {
  return (
    <span
      className={`${color} text-[10px] font-bold px-3 py-1 font-headline uppercase tracking-widest skew-x-[-15deg]`}
    >
      {label}
    </span>
  );
}
