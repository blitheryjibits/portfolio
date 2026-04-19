import { Nav } from "@/components/ui/Nav";
import { HeroSection } from "@/components/hero/HeroSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { JourneySection } from "@/components/journey/JourneySection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <div className="relative font-body text-on-surface selection:bg-primary-container selection:text-white">
      <div className="scanline-container">
        <div className="scanline"></div>
        <div className="scanline"></div>
        <div className="scanline"></div>
      </div>
      {/* <!-- TopAppBar --> */}
      <Nav />

      <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
        {/* <!-- Section: Hero Terminal --> */}
        <HeroSection />
        {/* <!-- Section: System Specs (Skills) --> */}
        <SkillsSection />
        {/* <!-- Section: Construct Registry (Projects) --> */}
        <ProjectsSection />
        {/* <!-- Section: System Log (Academic & Professional Evolution) --> */}
        <JourneySection />
        {/* <!-- Section: Open Port (Contact) --> */}
        <ContactSection />
      </main>
      {/* <!-- Footer --> */}
      <footer className="w-full py-4 px-8 flex flex-col md:flex-row justify-between items-center gap-4 bg-[#14091f] border-t border-[#bc13fe]/20">
        <div className="font-mono text-[10px] tracking-widest uppercase text-[#bc13fe] font-bold">
          ROOT@ROBERT_PORTFOLIO:~# _Build_Version_2026
        </div>
        <div className="flex gap-6">
          <a
            className="font-mono text-[10px] tracking-widest uppercase text-[#dcfdff]/40 hover:text-[#00f3ff] hover:bg-[#bc13fe]/10 px-2 py-1"
            href="#"
          >
            RESOURCES
          </a>
          <a
            className="font-mono text-[10px] tracking-widest uppercase text-[#dcfdff]/40 hover:text-[#00f3ff] hover:bg-[#bc13fe]/10 px-2 py-1"
            href="#"
          >
            GITHUB_REPOS
          </a>
          <a
            className="font-mono text-[10px] tracking-widest uppercase text-[#dcfdff]/40 hover:text-[#00f3ff] hover:bg-[#bc13fe]/10 px-2 py-1"
            href="#"
          >
            LINKEDIN_PORT
          </a>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></div>
          <span className="text-[8px] font-mono text-primary/60">
            system_status: ONLINE
          </span>
        </div>
      </footer>
      {/* <!-- Side Decoration: Vertical Text --> */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 pointer-events-none hidden xl:block">
        <div className="v-text font-mono text-[8px] tracking-[0.8em] text-secondary/20 uppercase">
          ARCHITECTING_SCALABLE_SOLUTIONS_FULL_STACK_INTEGRITY_COMP_SCI_GRAD
        </div>
      </div>
    </div>
  );
}
