interface BehanceIconProps {
  className?: string;
}

const BehanceIcon = ({ className = "w-5 h-5" }: BehanceIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Bé letter - left side */}
    <path d="M3 7h4.5a2.5 2.5 0 0 1 0 5H3V7z" />
    <path d="M3 12h5a2.5 2.5 0 0 1 0 5H3v-5z" />
    {/* Right side - stylized e */}
    <path d="M15 13h6c0-2.5-1.5-4-3.5-4S14 11 14 13.5s1.5 4.5 4 4.5c1.5 0 2.5-.5 3-1.5" />
    {/* Top bar */}
    <path d="M14 7h6" />
  </svg>
);

export default BehanceIcon;
