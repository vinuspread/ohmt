import { Navbar } from "../../_components/Navbar";
import { Footer } from "../../_components/Footer";
import { SubpageHero } from "../../_components/SubpageHero";
import { BookingRequestSection } from "../../_components/sections/BookingRequestSection";
import { RoomGallerySection } from "../../_components/sections/RoomGallerySection";
import { RoomOverviewSection } from "../../_components/sections/RoomOverviewSection";

const base = "/en/templates/OHMT030-resort";

const rooms: Record<string, {
  name: string; price: string; img: string; hero: string;
  desc: string; spec: { label: string; value: string }[];
  gallery: string[];
}> = {
  celestial: {
    name: "Celestial Suite",
    price: "$480",
    img: "villa-bedroom-arch.jpg",
    hero: "room-celestial.jpg",
    desc: "The Celestial Suite occupies the highest elevation of the resort, a perch carved into the caldera rim where the sky feels close enough to touch. Floor-to-ceiling glass wraps the bedroom and living area, capturing the full arc of the Aegean horizon from first light to the last constellation. A private plunge pool extends into a terrace that seems to float above the sea.",
    spec: [
      { label: "Occupancy", value: "2 Guests" },
      { label: "Size", value: "85 sqm" },
      { label: "View", value: "Aegean Sea & Caldera" },
      { label: "Bed", value: "King-size Organic Cotton" },
      { label: "Amenities", value: "Private Plunge Pool, Outdoor Shower" },
    ],
    gallery: ["pool-bluehour.jpg", "villa-pool-caldera.jpg", "terrace-dining-caldera.jpg"],
  },
  bellemont: {
    name: "Bellemont Suite",
    price: "$360",
    img: "villa-bedroom-seaview.jpg",
    hero: "room-bellemont.jpg",
    desc: "Wrapped by wild gardens and dry-stone walls, the Bellemont Suite sits at ground level among bougainvillea, lavender, and olive trees. The indoor-outdoor layout opens onto a private patio with a sunken lounging area, where the scent of jasmine mixes with the salt air. A suite designed for slow mornings and long afternoons spent between the pages of a book.",
    spec: [
      { label: "Occupancy", value: "2 Guests" },
      { label: "Size", value: "70 sqm" },
      { label: "View", value: "Garden & Partial Sea" },
      { label: "Bed", value: "King-size Organic Cotton" },
      { label: "Amenities", value: "Private Garden, Outdoor Lounging" },
    ],
    gallery: ["alley-bougainvillea.jpg", "villa-exterior-golden.jpg", "overwater-cabana-sunset.jpg"],
  },
  tofutalia: {
    name: "Tofutalia Suite",
    price: "$320",
    img: "villa-bedroom-porthole.jpg",
    hero: "room-tofutalia.jpg",
    desc: "Carved directly into the cliff face, the Tofutalia Suite is an intimate cave-like retreat that brings you as close to the water as possible. The bedroom steps down to a sheltered terrace with a cold plunge bath carved from local stone, where the sound of waves echoes off the volcanic rock. Raw textures and soft linen define the interior.",
    spec: [
      { label: "Occupancy", value: "2 Guests" },
      { label: "Size", value: "55 sqm" },
      { label: "View", value: "Sea-Level Cliffside" },
      { label: "Bed", value: "Queen-size Organic Cotton" },
      { label: "Amenities", value: "Cold Plunge Bath, Stone Terrace" },
    ],
    gallery: ["sailing-cove.jpg", "villa-pool-caldera.jpg", "blue-dome-church.jpg"],
  },
  zephyr: {
    name: "Zephyr Loft",
    price: "$290",
    img: "room-zephyr.jpg",
    hero: "room-zephyr.jpg",
    desc: "An open-plan loft perched above the main villa complex, the Zephyr Loft is defined by its volume of light. The double-height ceiling and window wall create a sense of airiness that mirrors the coastal wind it is named after. A mezzanine sleeping area overlooks the living space below, with a compact kitchenette for private dining.",
    spec: [
      { label: "Occupancy", value: "2 Guests" },
      { label: "Size", value: "60 sqm" },
      { label: "View", value: "Panoramic Coastline" },
      { label: "Bed", value: "Queen-size Organic Cotton" },
      { label: "Amenities", value: "Mezzanine Layout, Kitchenette" },
    ],
    gallery: ["aerial-caldera-golden.jpg", "villa-bedroom-arched-window.jpg", "bar-rooftop-sunset.jpg"],
  },
};

export default async function RoomPage({ params }: { params: Promise<{ room: string }> }) {
  const { room } = await params;
  const data = rooms[room];
  if (!data) return <div>Room not found</div>;

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <SubpageHero
          title={data.name.replace(" ", "\n")}
          image={data.hero}
          alt={data.name}
          eyebrow="SANCTUM Resort - The Villas"
          price={`From ${data.price} / night`}
          detail
          overlay="bg-gradient-to-t from-black/70 via-black/25 to-transparent"
        >
          {null}
        </SubpageHero>

        <RoomOverviewSection description={data.desc} specs={data.spec} />
        <RoomGallerySection images={data.gallery} />
        <BookingRequestSection backHref={`${base}/stay`} />
      </main>
      <Footer />
    </>
  );
}
