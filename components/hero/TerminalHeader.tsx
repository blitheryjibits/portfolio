import { TerminalLights } from "./TerminalLights";

export function TerminalHeader() {
  return (
    <div className="bg-surface-container-high px-4 py-2 flex justify-between items-center border-b border-primary-container/20">
      <TerminalLights />

      <div className="font-headline text-[10px] tracking-[0.2em] text-secondary/40 uppercase">
        session: Developer Identification
      </div>

      <div className="text-secondary/20 font-mono text-[10px]">TTY1</div>
    </div>
  );
}
