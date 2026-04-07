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
          phase="PHASE 03: Full-Stack Specialization"
          title="Software Engineer // Architect"
          description="Advanced system design, cloud orchestration, and large-scale application development. Specialized in creating reactive, high-integrity digital ecosystems."
          logLevel="LOG_LEVEL: CRITICAL_PATH_DEPLOYMENT"
          iconName="developer_mode"
          borderColor="border-primary-container"
        />

        <TimelineEntry
          phase="PHASE 02: Advanced Algorithms"
          title="Structural Computing Engineer"
          description="In-depth study of complex data structures and algorithmic efficiency. Optimized computational logic for high-performance processing environments."
          logLevel="LOG_LEVEL: SYSTEM_EXPANSION_OPTIMIZATION"
          iconName="account_tree"
          borderColor="border-secondary-container"
          reverse
        />

        <TimelineEntry
          phase="PHASE 01: Core CS Fundamentals"
          title="B.S. Computer Science @ UoPeople"
          description="Rigorous theoretical foundation in computation, operating systems, and discrete mathematics. Establishing the root logic for professional engineering."
          logLevel="LOG_LEVEL: ROOT_INITIALIZATION"
          iconName="memory"
          borderColor="border-tertiary-container"
        />
      </div>
    </section>
  );
}
