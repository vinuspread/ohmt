type IntroTextSectionProps = {
  children: React.ReactNode;
  paddedBottom?: boolean;
};

export function IntroTextSection({
  children,
  paddedBottom = false,
}: IntroTextSectionProps) {
  return (
    <section
      className={`resort-container border-b border-white/10 py-16 ${
        paddedBottom ? "md:pb-32" : ""
      }`}
      style={{ backgroundColor: "var(--bg)" }}
    >
      <p className="resort-body max-w-[720px] text-base font-normal text-white/60 md:text-lg">
        {children}
      </p>
    </section>
  );
}
