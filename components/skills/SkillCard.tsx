import { SkillMetric } from "./SkillMetric";

export function SkillCard({
  title,
  tag,
  description,
  metricLabel,
  metricValue,
  borderColor,
  barColor,
}: {
  title: string;
  tag: string;
  description: string;
  metricLabel: string;
  metricValue: number;
  borderColor: string;
  barColor: string;
}) {
  return (
    <div
      className={`bg-surface-container p-6 border-l-4 ${borderColor} group hover:bg-surface-bright transition-colors relative overflow-hidden`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="font-headline font-bold text-xl uppercase tracking-tight">
          {title}
        </div>

        <div className="text-xs font-mono text-secondary-container bg-secondary-container/10 px-2">
          {tag}
        </div>
      </div>

      <p className="text-[10px] text-secondary/60 mb-4 font-mono">
        {description}
      </p>

      <SkillMetric
        label={metricLabel}
        value={metricValue}
        barColor={barColor}
      />
    </div>
  );
}
