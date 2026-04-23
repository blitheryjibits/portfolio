import { SkillCard } from "./SkillCard";

export function SkillsSection() {
  return (
    <section className="gap-6" id="skills">
      <div className="flex flex-col lg:flex-row mb-8">
        <h2 className="font-headline text-5xl text-pretty lg:text-end font-black text-[#bc13fe] uppercase tracking-tighter leading-none italic">
          Technical Skills <br />& Expertise
        </h2>

        <div className="w-full mb-4 lg:mb-0 lg:flex-1 mt-auto h-px bg-primary-container/30"></div>

        <p className="text-secondary/40 font-mono text-xs uppercase tracking-widest mt-auto">
          Professional Stack & Theoretical Mastery
        </p>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap gap-4">
        <SkillCard
          title="REACT_ARCHITECTURE"
          tag="PROFESSIONAL"
          description="Component lifecycle optimization, complex state management systems, and high-performance UI patterns acquired through rigorous application development."
          metricLabel="ALLOCATION"
          metricValue={90}
          borderColor="border-primary-container"
          barColor="bg-primary-container"
        />

        <SkillCard
          title="NEXT_INFRASTRUCTURE"
          tag="V14_APP_ROUTER"
          description="Implementation of Server Components, SSR/ISR optimization strategies, and scalable routing architectures for enterprise-grade web engines."
          metricLabel="BANDWIDTH"
          metricValue={80}
          borderColor="border-secondary-container"
          barColor="bg-secondary-container"
        />

        <SkillCard
          title="NODE_BACKEND_CORE"
          tag="RUNTIME_EXPERT"
          description="Scalable microservices design, RESTful/GraphQL API orchestration, and asynchronous process management rooted in core CS fundamentals."
          metricLabel="CACHE_USAGE"
          metricValue={95}
          borderColor="border-tertiary-container"
          barColor="bg-tertiary-container"
        />

        <SkillCard
          title="RELATIONAL_SYSTEMS"
          tag="POSTGRES_SQL"
          description="Complex schema design, query optimization, and ACID-compliant transaction management developed through advanced database theory coursework."
          metricLabel="QUERY_RATE"
          metricValue={85}
          borderColor="border-primary"
          barColor="bg-primary"
        />
      </div>
    </section>
  );
}
