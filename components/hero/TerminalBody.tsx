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
          I am a Computer Science graduate from{" "}
          <span className="text-primary">University of the People</span>,
          dedicated to architecting scalable digital solutions. With a
          deep-rooted passion for{" "}
          <span className="text-primary">full-stack development</span>, I
          specialize in engineering high-performance systems and optimizing
          complex software architectures.
        </p>

        <p className="text-sm text-secondary/60">
          My academic journey provided a rigorous foundation in computational
          theory and software engineering principles. I leverage this expertise
          to build robust, secure, and efficient web applications, transforming
          abstract concepts into high-integrity codebases.
        </p>

        <div className="flex gap-4 pt-4">
          <TerminalTag label="DEGREE_CONFIRMED: BS_CS" variant="primary" />
          <TerminalTag label="STATUS: FULL_STACK_DEV" variant="secondary" />
        </div>
      </div>
    </div>
  );
}
