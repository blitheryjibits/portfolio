import { TerminalWindow } from "./TerminalWindow";
import { HeroBackgroundText } from "./HeroBackgroundText";

export function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-179"
      id="hero"
    >
      <TerminalWindow />
      <HeroBackgroundText />
    </section>
  );
}
