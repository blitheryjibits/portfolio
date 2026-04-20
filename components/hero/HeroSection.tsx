import { TerminalWindow } from "./TerminalWindow";
import { HeroBackgroundText } from "./HeroBackgroundText";

export function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center pt-8 md:pt-24 lg:pt-32"
      id="hero"
    >
      <TerminalWindow />
      <HeroBackgroundText />
    </section>
  );
}
