export function SkillMetric({
  label,
  value,
  barColor,
}: {
  label: string;
  value: number;
  barColor: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-[10px] font-mono text-secondary/60">
        <span>{label}</span>
        <span>{value}%</span>
      </div>

      <div className="h-1 bg-surface-container-highest w-full">
        <div
          className={`h-full ${barColor} shadow-[0_0_10px_currentColor]`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
