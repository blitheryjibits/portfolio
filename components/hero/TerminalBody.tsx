import { TerminalCommand } from "./TerminalCommand";
import { TerminalTag } from "./TerminalTag";

export function TerminalBody() {
  return (
    <div className="p-8 font-mono text-secondary space-y-4">
      <TerminalCommand command="whoami --profile" />

      <div className="pl-4 space-y-6 max-w-2xl">
        <p className="text-lg leading-relaxed text-on-surface">
          <span className="text-secondary-container font-bold">
            [ENGINEER_IDENTITY]
          </span>{" "}
          I’m a full‑stack JavaScript developer with a Computer Science degree
          who works mainly with React, Next.js, Node.js, TypeScript, PostgreSQL,
          and Prisma.
        </p>

        <p className="text-sm text-secondary/60">
          I build full‑stack apps that don’t fall apart under pressure. Clean
          architecture, solid engineering, and just enough caffeine to keep
          things interesting.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <TerminalTag label="DEGREE_CONFIRMED: BS_CS" variant="primary" />
          <TerminalTag label="STATUS: FULL_STACK_DEV" variant="secondary" />
        </div>
      </div>
    </div>
  );
}
