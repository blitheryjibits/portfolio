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
          title="NEON_DASH_OS"
          description="A high-performance observability platform implementing real-time metrics processing. Engineered with low-latency WebSocket protocols to visualize distributed system health across global clusters."
          tech={["TypeScript", "React/Redux", "Redis"]}
          badge="PRODUCTION_STABLE"
          badgeColor="bg-primary-container text-on-primary-container"
          borderColor="border-primary-container"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuAGfkj8CL2XMYXcIephyrUcVDOewjdet4orKtMe6M-9lnfH2pTfMBnoJ-KYwX5mUplCkO7WKRIbGAm3h1R77gqTseVdNuAqVLpFm1aVwJEVW8ihw5SNXQYB2MSnGqOTfoD-dMQmOMtyQ3yiQbF4oMf16wCJjvLiQZzaQhRxP8Tl0x7x6Nq5qwsH8QZxpfDlE77zFttBou00Wp2uwsmOWUPFTNVo-q5Q-SD-8QH_3ntEEqhQcM5ZA7zWM165LejtUtIVF9GYtFBuzjvJ"
          iconName="code"
          iconColor="text-primary-container"
        />

        <ProjectCard
          title="CRYPT_VAULT_CORE"
          description="An end-to-end encrypted storage solution utilizing AES-256-GCM at the application layer. Features secure session management and granular access control protocols for sensitive enterprise data."
          tech={["Node.js", "WebCrypto API", "AWS S3"]}
          badge="V2.1_RELEASE"
          badgeColor="bg-secondary-container text-on-secondary-container"
          borderColor="border-secondary-container"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuA9T-izfqU2pHvl7gkPu1UURzawLot1WD1XmLE4EXRNSuN2H64y8Qw8Jm5z9UWXnwvp9OzegSFUf0v0HWamRfW0NaExyYiuGnp-0X28tyYveNpMHCb0RlK0W0y8Nc6lMOIzEnHuxuQev2dqjKj4uyvenUOzRWYFKwTkFVCu6s9lJL6oY0gz6NNfpmislMxn7FHPcV1xkM9hSm4FPbpq6VT17g-S5v6vhcAgqkwMVkJt-5ub5fB8gs1j8OqVOjmAtyul8WKjSxv9ZLmw"
          iconName="security"
          iconColor="text-secondary-container"
        />

        <ProjectCard
          title="SYNAPSE_API_X"
          description="A unified GraphQL gateway designed to modernize legacy industrial telemetry. Implements advanced caching strategies and automated schema stitching for high-throughput sensor networks."
          tech={["GraphQL", "Go/Golang", "MQTT"]}
          badge="BETA_INTEGRATION"
          badgeColor="bg-tertiary-container text-on-primary-container"
          borderColor="border-tertiary-container"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuDg9-7ZTFLleD_5TIxtlO3qlPWm1M5g_HN0T3gOlixWacG-LOyyY7GEoLXUv_2EnTwIkqgjFFd0gZsojRtACOUjrUFqRg4RkvNUqxRbcYGvz5pD23n4SUx2pVOOW-xOJXTM0eludfRwEHawE1s1FlwiovgZQo_ZxOPGmZpihnjuwKwQH-gyHEmMmaf5I7d6SaSZd_RCSmiKl83nOkmh4CT5so8OHN9AhRqZPXkSjvkq25fZhOCXd9axjGzD7WgEZvhD4SBV8aAVZKJY"
          iconName="terminal"
          iconColor="text-tertiary-container"
        />
      </div>
    </section>
  );
}
