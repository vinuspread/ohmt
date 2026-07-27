import { TestimonialCard } from "../cards/TestimonialCard";
import { SectionHeading } from "../ui/Typography";

const testimonials = [
  { name: "The Lee Family", role: "Guests, Villa Solaya", quote: "Staying at OHMT was like stepping into another world. Each villa tells its own story, and the location by the sea is beyond breathtaking.", rating: "9.3" },
  { name: "Amelia & James Parker", role: "Guests, Villa Miraia", quote: "Waking up to the sound of waves, with nothing but sea and sky in front of you, is an experience we will carry forever.", rating: "9.1" },
  { name: "James Williams", role: "Solo Traveller", quote: "The architecture, the silence, the staff, the food. Everything was designed with quiet purpose. OHMT isn't just a resort, it's a philosophy.", rating: "9.4" },
  { name: "Nina Davis", role: "Guests, Villa Azari", quote: "We came for the villas and stayed for the soul. OHMT gave us space to breathe, to be still, and to remember what rest actually feels like.", rating: "9.0" },
];

export function Testimonials() {
  return (
    <section className="pb-16 md:pb-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <SectionHeading>
              Guest Notes
            </SectionHeading>
          </div>
        </div>

        {/* Cards track */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>


      </div>
    </section>
  );
}
