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
          title="HTML"
          tag="MARKUP"
          description="HTML5 semantics, accessibility best practices, and SEO optimization techniques honed through comprehensive web development projects."
          borderColor="border-primary-container"
          barColor="bg-primary-container"
        />
        <SkillCard
          title="CSS"
          tag="STYLE"
          description="Advanced CSS methodologies including Flexbox, Grid, and responsive design principles, complemented by a deep understanding of the CSS cascade and specificity."
          borderColor="border-primary-container"
          barColor="bg-primary-container"
        />
        <SkillCard
          title="jAVASCRIPT"
          tag="INTERACTION"
          description="Proficiency in ES6+ features, asynchronous programming patterns, and performance optimization techniques developed through rigorous application development and theoretical CS coursework."
          borderColor="border-primary-container"
          barColor="bg-primary-container"
        />
        <div className="w-full"></div>
        <SkillCard
          title="Node.js"
          tag="BACKEND RUNTIME"
          description="Expertise in event-driven architecture, non-blocking I/O patterns, and scalable server design informed by core computer science principles and backend development experience."
          borderColor="border-tertiary-container"
          barColor="bg-tertiary-container"
        />
        <div className="w-full"></div>
        <SkillCard
          title="REACT"
          tag="FRONTEND FRAMEWORK"
          description="Component lifecycle optimization, complex state management systems, and high-performance UI patterns acquired through rigorous application development."
          borderColor="border-secondary-container"
          barColor="bg-secondary-container"
        />

        <SkillCard
          title="Next.js"
          tag="APP ROUTER"
          description="Implementation of Server Components, SSR/ISR optimization strategies, and scalable routing architectures for enterprise-grade web engines."
          borderColor="border-secondary-container"
          barColor="bg-secondary-container"
        />

        <div className="w-full"></div>

        <SkillCard
          title="PostgreSQL"
          tag="RELATIONAL_DB"
          description="Complex schema design, query optimization, and ACID-compliant transaction management developed through advanced database theory coursework."
          borderColor="border-primary"
          barColor="bg-primary"
        />
        <SkillCard
          title="MongoDB"
          tag="NOSQL_DB"
          description="Advanced document modeling, aggregation pipeline optimization, and distributed database management informed by theoretical CS principles."
          borderColor="border-primary"
          barColor="bg-primary"
        />
        <div className="w-full"></div>
        <SkillCard
          title="GitHub"
          tag="VERSION CONTROL"
          description="Expertise in branching strategies, merge conflict resolution, and CI/CD pipeline integration for efficient codebase management and deployment workflows."
          borderColor="border-on-secondary-container"
          barColor="bg-on-tertiary-fixed"
        />
        <div className="w-full"></div>
        <SkillCard
          title="Netlify"
          tag="STATIC DEPLOYMENT"
          description="Experience with static site generation, automated deployments, and edge networking for scalable web applications."
          borderColor="border-tertiary-container"
          barColor="bg-tertiary-container"
        />

        <SkillCard
          title="Vercel"
          tag="SERVELESS FUNCTIONS"
          description="Experience with serverless functions, edge networking, and automated deployments for scalable web applications."
          borderColor="border-tertiary-container"
          barColor="bg-tertiary-container"
        />
        <SkillCard
          title="Neon"
          tag="DATABASE HOSTING"
          description="Experience with cloud-native database solutions, serverless SQL, and scalable data management for modern web applications."
          borderColor="border-tertiary-container"
          barColor="bg-tertiary-container"
        />
        <SkillCard
          title="Supabase"
          tag="BaaS"
          description="Experience with backend-as-a-service solutions, real-time database features, and integrated authentication for modern web applications."
          borderColor="border-tertiary-container"
          barColor="bg-tertiary-container"
        />
        <SkillCard
          title="Render"
          tag="PaaS"
          description="Experience with platform-as-a-service solutions, automated deployments, and scalable web application hosting."
          borderColor="border-tertiary-container"
          barColor="bg-tertiary-container"
        />
        <SkillCard
          title="Cloudflare"
          tag="R2 OBJECT STORAGE"
          description="Experience with edge networking, content delivery, and scalable object storage for modern web applications."
          borderColor="border-tertiary-container"
          barColor="bg-tertiary-container"
        />
      </div>
    </section>
  );
}
