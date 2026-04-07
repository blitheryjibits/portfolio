import { FormField } from "./FormField";
import { TextAreaField } from "./TextAreaField";

export function ContactForm() {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField label="Identifier / Name" placeholder="NAME_INPUT" />
        <FormField
          label="Uplink / Email"
          placeholder="EMAIL_INPUT"
          type="email"
        />
      </div>

      <TextAreaField
        label="Transmission / Message"
        placeholder="MESSAGE_PAYLOAD"
      />

      <button
        type="submit"
        className="bg-primary-container text-on-primary-container px-6 py-2 font-headline font-bold uppercase tracking-widest skew-x-[-10deg] hover:bg-primary-container/80 transition"
      >
        Initiate Transfer
      </button>
    </form>
  );
}
