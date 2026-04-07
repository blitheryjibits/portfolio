export function ProjectTech({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 pt-2">
      {items.map((t) => (
        <span
          key={t}
          className="text-[10px] font-mono px-2 py-1 bg-surface-bright text-secondary uppercase"
        >
          {t}
        </span>
      ))}
    </div>
  );
}
