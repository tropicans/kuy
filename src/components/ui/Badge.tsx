import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "mono" | "status";
  hasPulse?: boolean;
  pulseColor?: string;
  className?: string;
}

export default function Badge({
  children,
  variant = "mono",
  hasPulse = false,
  pulseColor = "bg-white/70",
  className = "",
  ...props
}: BadgeProps) {
  if (variant === "status") {
    return (
      <span
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] font-light text-zinc-400 ${className}`}
        {...props}
      >
        {hasPulse && (
          <span className={`w-1.5 h-1.5 rounded-full ${pulseColor} animate-pulse`} aria-hidden="true" />
        )}
        {children}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[10px] sm:text-[11px] font-mono font-light uppercase tracking-[0.2em] text-zinc-300 ${className}`}
      {...props}
    >
      {hasPulse && (
        <span className={`w-1.5 h-1.5 rounded-full ${pulseColor} animate-pulse`} aria-hidden="true" />
      )}
      {children}
    </span>
  );
}
