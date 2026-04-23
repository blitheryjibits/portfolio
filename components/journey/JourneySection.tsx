import { TimelineEntry } from "@/components/journey/TimeLineEntry";

export function JourneySection() {
  return (
    <section className="relative" id="journey">
      <div className="flex items-center gap-6 mb-16">
        <h2 className="font-headline text-5xl font-black text-primary-container uppercase tracking-tighter">
          Academic & Professional Evolution
        </h2>

        <div className="h-0.5 bg-primary-container/20 grow"></div>
      </div>

      <div className="absolute left-7.5 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-container/20"></div>

      <div className="space-y-24 relative">
        <TimelineEntry
          phase="Full-Stack Javascript Development"
          title="Software Engineer // Architect"
          description="Active development of real‑time capabilities using Node.js, TypeScript, and WebSockets. Expanding backend proficiency through PostgreSQL schema design, query optimization, and foundational distributed‑system patterns. Current focus: building reliable, event‑driven features and strengthening architectural decision‑making for modern web applications."
          logLevel="LOG_LEVEL: SYSTEM_DEPLOYMENT"
          iconName="DEVELOPER_MODE"
          borderColor="border-primary-container"
        />

        <TimelineEntry
          phase="Modern Web Development"
          title="Javascript, React, and Next.js Development"
          description="Specialization in the modern web stack: JavaScript, React, Next.js, component‑driven UI architecture, and clean design principles. Emphasis on building responsive interfaces, reusable components, and intuitive user flows. This phase established the core toolkit for front‑end engineering in real projects."
          logLevel="LOG_LEVEL: FRONTEND_INTEGRATION"
          iconName="OPERATING SYSTEM"
          borderColor="border-secondary-container"
          reverse
        />

        <TimelineEntry
          phase="Core CS Fundamentals"
          title="B.S. Computer Science @ UoPeople"
          description="Rigorous theoretical foundation in computation, operating systems, algorithms, and discrete mathematics. Establishing the root logic for professional engineering."
          logLevel="LOG_LEVEL: ROOT_INITIALIZATION"
          iconName="BIOS"
          borderColor="border-tertiary-container"
        />
      </div>
    </section>
  );
}
