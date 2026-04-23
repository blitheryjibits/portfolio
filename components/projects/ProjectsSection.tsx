import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  return (
    <section className="space-y-12" id="projects">
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <h2 className="font-headline text-5xl font-black text-secondary-container uppercase tracking-tighter">
          Featured Projects
        </h2>

        <div className="flex flex-1 justify-end text-xs font-mono text-secondary/40 whitespace-nowrap uppercase tracking-[0.3em]">
          Analyzing Repository Metrics...
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="MARKET MARKER"
          description="A high-performance observability platform implementing real-time metrics processing. Engineered with low-latency WebSocket protocols to visualize live stock data."
          tech={["TypeScript", "Next.js", "Better Auth", "MongoDB"]}
          badge="PRODUCTION_STABLE"
          badgeColor="bg-primary-container text-on-primary-container"
          borderColor="border-primary-container"
          image="/project-images/dashboard.png"
        />

        <ProjectCard
          title="MyCloud"
          description="Light-weight, server-side rendered cloud storage platform with granular User Based Access Control"
          tech={["Node.js", "PostgreSQL", "Prisma", "Passport.js"]}
          badge="V1.1_RELEASE"
          badgeColor="bg-secondary-container text-on-secondary-container"
          borderColor="border-secondary-container"
          image="/project-images/MyCloud-drive-view.png"
        />

        <ProjectCard
          title="POD Gardens"
          description="Modern landscape-architecture brand brought to life 
through clean layouts, spacious typography, and a nature-driven visual identity."
          tech={["Next.js", "TailwindCSS", "Typescript"]}
          badge="Visual_Design"
          badgeColor="bg-tertiary-container text-on-primary-container"
          borderColor="border-tertiary-container"
          image="/project-images/MM-dashboard-bottom.png"
        />
      </div>
    </section>
  );
}
