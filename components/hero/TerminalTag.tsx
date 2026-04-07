export function TerminalTag({
  label,
  variant = "primary",
}: {
  label: string;
  variant?: "primary" | "secondary" | "outline";
}) {
  const styles = {
    primary: "bg-primary-container text-on-primary-container",
    secondary: "border border-secondary-container/50 text-secondary-container",
    outline: "border border-primary-container/50 text-primary-container",
  };

  return (
    <div
      className={`${styles[variant]} px-4 py-1 font-headline font-bold text-xs skew-x-[-10deg]`}
    >
      {label}
    </div>
  );
}
