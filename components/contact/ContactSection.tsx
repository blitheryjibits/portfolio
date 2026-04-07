import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section className="max-w-3xl mx-auto space-y-8" id="contact">
      <div className="text-center">
        <h2 className="font-headline text-4xl font-black text-primary-container uppercase skew-x-[-10deg]">
          Professional Collaboration
        </h2>

        <p className="text-secondary/40 font-mono text-[10px] mt-2 uppercase tracking-[0.5em]">
          Initiating secure handshake for tech opportunities...
        </p>
      </div>

      <div className="bg-surface-container-low p-8 border border-primary-container/20 relative">
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary-container"></div>
        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-primary-container"></div>
        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-primary-container"></div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary-container"></div>

        <ContactForm />
      </div>
    </section>
  );
}
