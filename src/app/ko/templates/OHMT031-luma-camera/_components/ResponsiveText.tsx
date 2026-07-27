import { Fragment } from "react";

type ResponsiveTextProps = {
  children: string;
};

export function ResponsiveText({ children }: ResponsiveTextProps) {
  const lines = children.split("\n");

  return (
    <>
      {lines.map((line, index) => (
        <Fragment key={`${index}-${line}`}>
          {line}
          {index < lines.length - 1 && <br className="hidden md:block" />}
        </Fragment>
      ))}
    </>
  );
}
