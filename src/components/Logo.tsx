"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-9 w-auto" }: LogoProps) {
  return (
    <>
      <Image
        src="/logo_dark.svg"
        alt="Oh My Template"
        width={228}
        height={62}
        className={`${className} dark:hidden`}
        style={{ height: "100%", width: "auto" }}
        priority
      />
      <Image
        src="/logo_white.svg"
        alt="Oh My Template"
        width={228}
        height={62}
        className={`${className} hidden dark:block`}
        style={{ height: "100%", width: "auto" }}
        priority
      />
    </>
  );
}
