export function TextAreaField({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className="space-y-1">
      <label className="font-mono text-[10px] text-secondary-container uppercase">
        {label}
      </label>

      <textarea
        placeholder={placeholder}
        className="w-full bg-surface-container-lowest border-none border-b border-outline-variant focus:ring-0 focus:border-secondary-container text-secondary placeholder:text-secondary/20 font-mono h-32 resize-none"
      />
    </div>
  );
}
