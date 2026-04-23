import { NavLink } from "./NavLink";
import { TextAlignJustify, X } from "lucide-react";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-3 bg-[#14091f]/80 backdrop-blur-xl border-b border-[#bc13fe]/20">
      <div className="text-xl font-black tracking-widest text-[#bc13fe] drop-shadow-[0_0_8px_rgba(188,19,254,0.6)] font-headline uppercase">
        DEV.IO
      </div>

      <nav className="relative w-full">
        <div className="h-100% bg-transparent flex-1">
          <input
            title="sidebar-active"
            type="checkbox"
            name="sidebar-active"
            id="sidebar-active"
            className="hidden peer"
          />
          <label
            id=""
            htmlFor="sidebar-active"
            className="md:hidden peer-checked:hidden
          absolute right-2 top-[50%] -translate-y-[50%]"
          >
            <TextAlignJustify />
          </label>

          {/* menu list */}
          <ul
            className={`absolute top-0 -right-full w-1/2 md:w-full h-fit
              flex flex-col gap-4
              bg-background/60 backdrop-blur-xs 
              peer-checked:right-0
              transtition-all duration-300
              md:max-w-fit md:flex md:flex-row md:right-0 md:h-full
              md:gap-0 md:pt-0 md:pr-4 md:text-sm md:bg-transparent md:backdrop-blur-none
              
              `}
          >
            <li className="ml-auto mr-4 mt-4 md:hidden">
              <label htmlFor="sidebar-active">
                <X />
              </label>
            </li>

            <NavLink href="#hero" label="Hero" />
            <NavLink href="#skills" label="Skills" />
            <NavLink href="#projects" label="Projects" />
            <NavLink href="#journey" label="Evolution" />
            <NavLink href="#contact" label="Contact" />
          </ul>
        </div>
      </nav>
    </header>
  );
}
