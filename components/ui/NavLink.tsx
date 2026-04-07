export function NavLink({
  href,
  label,
  active = false,
}: {
  href: string;
  label: string;
  active?: boolean;
}) {
  const base =
    "uppercase tracking-tighter text-sm font-['Space_Grotesk'] transition-all duration-150 active:scale-95 active:skew-x-[-10deg] px-1";

  const activeStyles =
    "text-[#bc13fe] border-b-2 border-[#bc13fe] font-bold hover:bg-[#41344c]/40 hover:skew-x-[-2deg]";

  const inactiveStyles =
    "text-[#dcfdff]/60 font-medium hover:text-[#bc13fe]/80 hover:bg-[#41344c]/40 hover:skew-x-[-2deg]";

  return (
    <a
      href={href}
      className={`${base} ${active ? activeStyles : inactiveStyles}`}
    >
      {label}
    </a>
  );
}
