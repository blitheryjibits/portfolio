import { Icon } from "@/components/ui/Icon";

export function TimelineEntry({
  phase,
  title,
  description,
  logLevel,
  iconName,
  borderColor,
  reverse = false,
}: {
  phase: string;
  title: string;
  description: string;
  logLevel: string;
  iconName: string;
  borderColor: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-start md:items-center w-full`}
    >
      {/* LEFT / RIGHT TEXT BLOCK */}
      <div
        className={`w-full md:w-1/2 ${
          reverse ? "md:pl-12" : "md:pr-12 md:text-right"
        }`}
      >
        <div
          className={`inline-block bg-surface-container px-4 py-2 border ${borderColor}/30 mb-2`}
        >
          <span
            className={`font-headline font-bold text-2xl ${borderColor} tracking-tighter`}
          >
            {phase}
          </span>
        </div>

        <h4 className="text-xl font-bold uppercase font-headline">{title}</h4>

        <p
          className={`text-secondary/60 text-sm mt-2 max-w-md ${
            reverse ? "" : "md:ml-auto"
          }`}
        >
          {description}
        </p>
      </div>

      {/* ICON */}
      <div
        className={`relative z-10 flex items-center justify-center w-15 h-15 bg-surface-container border-2 ${borderColor} my-4 md:my-0`}
      >
        <Icon name={iconName} className={borderColor} />
      </div>

      {/* RIGHT / LEFT LOG LEVEL */}
      <div
        className={`w-full md:w-1/2 ${
          reverse ? "md:pr-12 md:text-right" : "md:pl-12"
        }`}
      >
        <span className="font-mono text-secondary-container text-xs">
          {logLevel}
        </span>
      </div>
    </div>
  );
}
