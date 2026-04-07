export function TerminalCommand({ command }: { command: string }) {
  return (
    <div className="flex gap-3">
      <span className="text-primary-container">root@portfolio:~#</span>
      <span className="border-r-8 border-primary-container animate-pulse">
        {command}
      </span>
    </div>
  );
}
