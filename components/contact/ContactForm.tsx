import { FormField } from "./FormField";
import { TextAreaField } from "./TextAreaField";

export function ContactForm() {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField label="Name" placeholder="Linus Torvalds" />
        <FormField label="Email" placeholder="Ltor@linux.com" type="email" />
      </div>

      <TextAreaField
        label="Message"
        placeholder="Hello Robert, I am interested in collaborating on a project with you. Please let me know how we can connect!"
      />

      <button
        type="submit"
        className="bg-primary-container text-on-primary-container px-6 py-2 font-headline font-bold uppercase tracking-widest skew-x-[-10deg] hover:bg-primary-container/80 transition"
      >
        Initiate Contact
      </button>
    </form>
  );
}
