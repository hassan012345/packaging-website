type LogoProps = {
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 234 39.07"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Paste all your paths here */}
      <path
        d="M8.3,.2h.29l.49,.1,.59,.1,1.56,.39..."
        fill="#284e80"
      />
      <path
        d="M46.1,12.8l-.29,.1-1.95,.39..."
        fill="#284e80"
      />
      <path
        d="M6.45,8.99L0,38.87l.29-.1..."
        fill="#284e80"
      />
      <path
        d="M233.76,20.34H68.27l.24-2.49H234l-.24,2.49Z"
        fill="#ca4256"
      />
      <path
        d="M75.79,14.85l-1.27-.1-1.27-.29..."
        fill="currentColor"
      />
    </svg>
  );
}