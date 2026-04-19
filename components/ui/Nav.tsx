import { NavLink } from "./NavLink";
import { Icon } from "./Icon";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-3 bg-[#14091f]/80 backdrop-blur-xl border-b border-[#bc13fe]/20">
      <div className="text-xl font-black tracking-widest text-[#bc13fe] drop-shadow-[0_0_8px_rgba(188,19,254,0.6)] font-headline uppercase">
        DEV.IO
      </div>

      <nav className="hidden md:flex gap-8 items-center nav-list">
        <NavLink href="#skills" label="Skills" />
        <NavLink href="#projects" label="Projects" />
        <NavLink href="#journey" label="Evolution" />
        <NavLink href="#contact" label="Contact" />
      </nav>

      <div className="flex items-center gap-4 text-[#bc13fe]">
        <Icon
          name="settings_input_component"
          className="cursor-pointer hover:bg-[#bc13fe]/10 p-1"
        />
        <Icon
          name="terminal"
          className="cursor-pointer hover:bg-[#bc13fe]/10 p-1"
        />
      </div>
    </header>
  );
}
