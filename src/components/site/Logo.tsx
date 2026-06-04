export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-2.5 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
        <circle cx="16" cy="16" r="15" stroke="var(--navy)" strokeWidth="1.5" />
        <path d="M10 21V11h2v8h6v2h-8z" fill="var(--navy)" />
        <circle cx="22" cy="11" r="3" fill="var(--green)" />
      </svg>
      <span className="text-[17px] font-semibold tracking-tight text-[var(--navy)]">
        LokalLead
      </span>
    </a>
  );
}
