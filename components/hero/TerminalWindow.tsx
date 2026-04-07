import { TerminalHeader } from "./TerminalHeader";
import { TerminalBody } from "./TerminalBody";

export function TerminalWindow() {
  return (
    <div className="w-full max-w-4xl bg-surface-container-lowest border border-primary-container/30 shadow-[0_0_50px_rgba(188,19,254,0.15)] relative">
      <TerminalHeader />
      <TerminalBody />
    </div>
  );
}
