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
      className={`bg-surface-container p-6 border-l-4 ${borderColor} group hover:bg-surface-bright transition-colors 
      relative overflow-hidden
      w-full md:w-[calc(50%-12px)] `}
    >
      <div className="flex flex-col mb-4">
        <div className="ml-auto text-xs font-mono text-secondary-container bg-secondary-container/10 px-2">
          {tag}
        </div>
        <div className="font-headline font-bold text-xl uppercase tracking-tight">
          {title}
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
