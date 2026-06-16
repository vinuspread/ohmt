"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-9 w-auto" }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Oh My Template"
      width={228}
      height={62}
      className={className}
      style={{ height: "100%", width: "auto" }}
      priority
    />
  );
}
