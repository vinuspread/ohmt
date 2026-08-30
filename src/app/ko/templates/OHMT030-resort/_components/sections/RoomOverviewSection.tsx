import { SpecList } from "../cards/SpecList";

type Spec = {
  label: string;
  value: string;
};

type RoomOverviewSectionProps = {
  description: string;
  specs: Spec[];
};

export function RoomOverviewSection({
  description,
  specs,
}: RoomOverviewSectionProps) {
  return (
    <section className="py-16 md:py-32" style={{ backgroundColor: "var(--bg)" }}>
      <div className="resort-container grid grid-cols-1 gap-12 md:grid-cols-2">
        <p className="resort-body text-lg font-normal text-white/90 break-keep">
          {description}
        </p>
        <SpecList items={specs} />
      </div>
    </section>
  );
}
