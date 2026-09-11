import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "icon";
  children?: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-normal transition-all duration-150 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/50";

  let variantStyle = "";
  if (variant === "primary") {
    variantStyle = disabled
      ? "bg-zinc-800 text-zinc-500 cursor-not-allowed px-4 py-2 rounded-full text-xs"
      : "bg-white text-black hover:bg-zinc-200 active:scale-95 px-4 sm:px-5 py-2 rounded-full text-[13px] shadow-sm";
  } else if (variant === "secondary") {
    variantStyle =
      "bg-white/[0.04] text-white hover:bg-white/[0.08] border border-white/10 px-4 py-2 rounded-full text-xs";
  } else if (variant === "icon") {
    variantStyle =
      "w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/[0.08]";
  }

  return (
    <button
      disabled={disabled}
      className={`${base} ${variantStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
