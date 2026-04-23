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

  const inactiveStyles =
    "text-[#dcfdff]/60 font-medium hover:text-[#bc13fe]/80 hover:bg-[#41344c]/40 hover:skew-x-[-2deg]";

  return (
    <li>
      <a href={href} className={`${base} ${active ? "" : inactiveStyles}`}>
        {label}
      </a>
    </li>
  );
}
