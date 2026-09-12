import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "preview";
}

export default function Card({
  children,
  className = "",
  variant = "default",
  ...props
}: CardProps) {
  const baseStyles =
    "bg-zinc-950/80 backdrop-blur-xl text-white rounded-3xl border border-white/[0.08] transition-all duration-200 hover:border-white/20";
  const paddingStyles = variant === "preview" ? "p-3 sm:p-3.5" : "p-4 sm:p-5 lg:p-6";

  return (
    <div
      className={`${baseStyles} ${paddingStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
