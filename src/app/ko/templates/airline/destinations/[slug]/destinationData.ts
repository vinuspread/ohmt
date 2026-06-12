// src/app/templates/airline/destinations/[slug]/destinationData.ts

export interface Highlight {
  name: string;
  desc: string;
  img: string;
}

export interface Flight {
  departure: string;
  arrival: string;
  duration: string;
  price: string;
  class: string;
}

export interface Destination {
  slug: string;
  name: string;
  country: string;
  tagline: string;
  desc: string;
  heroImg: string;
  iataCode: string;
  flightDuration: string;
  priceFrom: string;
  facts: { label: string; value: string }[];
  bestMonths: string[];
  highlights: Highlight[];
  flights: Flight[];
  related: string[];
}

export const destinations: Record<string, Destination> = {
  paris: {
    slug: "paris",
    name: "Paris",
    country: "France",
    iataCode: "CDG",
    tagline: "City of Light & Romance",
    desc: "Paris enchants every traveler with its grand boulevards, world-class cuisine, and iconic landmarks. From the Eiffel Tower's golden glow at dusk to the quiet charm of Montmartre's cobbled streets, the French capital offers an unmatched blend of art, history, and modern luxury.",
    heroImg: '/templates/airline/dest-paris-hero.jpg',
    flightDuration: "12h 30m",
    priceFrom: "$1,890",
    facts: [
      { label: "Language", value: "French" },
      { label: "Currency", value: "EUR (€)" },
      { label: "Time Zone", value: "UTC+1 / CET" },
      { label: "Visa", value: "Schengen Required" },
    ],
    bestMonths: ["Apr", "May", "Jun", "Sep", "Oct"],
    highlights: [
      {
        name: "Eiffel Tower",
        desc: "The iconic iron lattice tower on the Champ de Mars - best seen illuminated at night from Trocadéro.",
        img: '/templates/airline/dest-paris-1.jpg',
      },
      {
        name: "The Louvre",
        desc: "Home to 35,000 works of art including the Mona Lisa and Venus de Milo - the world's largest art museum.",
        img: '/templates/airline/dest-paris-2.jpg',
      },
      {
        name: "Montmartre",
        desc: "A bohemian hilltop neighborhood with winding streets, the Sacré-Cœur basilica and breathtaking city views.",
        img: '/templates/airline/dest-paris-3.jpg',
      },
    ],
    flights: [
      { departure: "09:10", arrival: "15:40+1", duration: "12h 30m", price: "$1,890", class: "Economy" },
      { departure: "22:30", arrival: "05:00+2", duration: "12h 30m", price: "$2,450", class: "Business" },
      { departure: "14:00", arrival: "20:30+1", duration: "12h 30m", price: "$6,900", class: "First" },
    ],
    related: ["tokyo", "new-york", "dubai"],
  },
  tokyo: {
    slug: "tokyo",
    name: "Tokyo",
    country: "Japan",
    iataCode: "NRT",
    tagline: "Where Tradition Meets Futurism",
    desc: "Tokyo is a city of extraordinary contrasts - ancient temples stand beside neon-lit skyscrapers, and serene gardens border the world's busiest train stations. Japan's capital offers an unparalleled sensory experience that blends meticulous craftsmanship with cutting-edge modernity.",
    heroImg: '/templates/airline/dest-tokyo-hero.jpg',
    flightDuration: "2h 30m",
    priceFrom: "$480",
    facts: [
      { label: "Language", value: "Japanese" },
      { label: "Currency", value: "JPY (¥)" },
      { label: "Time Zone", value: "UTC+9 / JST" },
      { label: "Visa", value: "Visa Free (90 days)" },
    ],
    bestMonths: ["Mar", "Apr", "Oct", "Nov"],
    highlights: [
      {
        name: "Shibuya Crossing",
        desc: "The world's busiest pedestrian crossing - a living symbol of Tokyo's electric energy and pace.",
        img: '/templates/airline/dest-tokyo-1.jpg',
      },
      {
        name: "Senso-ji Temple",
        desc: "Tokyo's oldest and most significant Buddhist temple in Asakusa, framed by traditional Nakamise shopping street.",
        img: '/templates/airline/dest-tokyo-2.jpg',
      },
      {
        name: "Mount Fuji Day Trip",
        desc: "Japan's iconic sacred peak, best viewed from Hakone or Fujikawaguchiko - a short ride from the city.",
        img: '/templates/airline/dest-tokyo-3.jpg',
      },
    ],
    flights: [
      { departure: "07:30", arrival: "10:05", duration: "2h 30m", price: "$480", class: "Economy" },
      { departure: "13:00", arrival: "15:35", duration: "2h 30m", price: "$950", class: "Business" },
      { departure: "19:45", arrival: "22:20", duration: "2h 30m", price: "$2,800", class: "First" },
    ],
    related: ["bali", "paris", "sydney"],
  },
  "new-york": {
    slug: "new-york",
    name: "New York",
    country: "USA",
    iataCode: "JFK",
    tagline: "The City That Never Sleeps",
    desc: "New York City pulses with an energy found nowhere else on earth. From the soaring towers of Manhattan to the cultural riches of Brooklyn, this global metropolis offers world-class dining, art, fashion, and entertainment - all within one extraordinary city.",
    heroImg: '/templates/airline/dest-new-york-hero.jpg',
    flightDuration: "14h 00m",
    priceFrom: "$1,650",
    facts: [
      { label: "Language", value: "English" },
      { label: "Currency", value: "USD ($)" },
      { label: "Time Zone", value: "UTC-5 / EST" },
      { label: "Visa", value: "ESTA Required" },
    ],
    bestMonths: ["Apr", "May", "Sep", "Oct"],
    highlights: [
      {
        name: "Central Park",
        desc: "843 acres of landscaped parkland in the heart of Manhattan - the green lungs of New York City.",
        img: '/templates/airline/dest-new-york-1.jpg',
      },
      {
        name: "The Metropolitan Museum",
        desc: "One of the world's greatest art museums - over 5,000 years of art from every corner of the globe.",
        img: '/templates/airline/dest-new-york-2.jpg',
      },
      {
        name: "Brooklyn Bridge",
        desc: "An engineering marvel connecting Manhattan and Brooklyn - best walked at sunrise for iconic skyline views.",
        img: '/templates/airline/dest-new-york-3.jpg',
      },
    ],
    flights: [
      { departure: "11:00", arrival: "13:00+1", duration: "14h 00m", price: "$1,650", class: "Economy" },
      { departure: "21:30", arrival: "23:30+1", duration: "14h 00m", price: "$3,200", class: "Business" },
      { departure: "16:00", arrival: "18:00+1", duration: "14h 00m", price: "$8,500", class: "First" },
    ],
    related: ["paris", "dubai", "sydney"],
  },
  dubai: {
    slug: "dubai",
    name: "Dubai",
    country: "UAE",
    iataCode: "DXB",
    tagline: "Luxury in the Desert",
    desc: "Dubai is a city of superlatives - the tallest tower, the largest mall, the most luxurious hotels. Rising from the Arabian Desert, this gleaming metropolis has transformed itself into a global hub of commerce, tourism, and architectural ambition unlike any other.",
    heroImg: '/templates/airline/dest-dubai-hero.jpg',
    flightDuration: "9h 45m",
    priceFrom: "$1,100",
    facts: [
      { label: "Language", value: "Arabic / English" },
      { label: "Currency", value: "AED (د.إ)" },
      { label: "Time Zone", value: "UTC+4 / GST" },
      { label: "Visa", value: "On Arrival (30 days)" },
    ],
    bestMonths: ["Nov", "Dec", "Jan", "Feb", "Mar"],
    highlights: [
      {
        name: "Burj Khalifa",
        desc: "The world's tallest building at 828m - take the lift to the 148th floor observatory for breathtaking views.",
        img: '/templates/airline/dest-dubai-1.jpg',
      },
      {
        name: "Dubai Marina",
        desc: "A stunning waterfront district lined with skyscrapers, luxury yachts, fine dining, and vibrant nightlife.",
        img: '/templates/airline/dest-dubai-2.jpg',
      },
      {
        name: "Desert Safari",
        desc: "Experience dune bashing, camel riding, and a traditional Bedouin dinner under the stars - unforgettable.",
        img: '/templates/airline/dest-dubai-3.jpg',
      },
    ],
    flights: [
      { departure: "08:00", arrival: "13:45", duration: "9h 45m", price: "$1,100", class: "Economy" },
      { departure: "18:30", arrival: "00:15+1", duration: "9h 45m", price: "$2,800", class: "Business" },
      { departure: "23:00", arrival: "04:45+1", duration: "9h 45m", price: "$7,200", class: "First" },
    ],
    related: ["paris", "bali", "new-york"],
  },
  sydney: {
    slug: "sydney",
    name: "Sydney",
    country: "Australia",
    iataCode: "SYD",
    tagline: "Harbor-side Elegance",
    desc: "Sydney captivates with its stunning harbor, world-famous Opera House, and golden surf beaches. Australia's most iconic city blends a relaxed coastal lifestyle with a sophisticated urban culture - making it one of the world's most desirable destinations.",
    heroImg: '/templates/airline/dest-sydney-hero.jpg',
    flightDuration: "10h 30m",
    priceFrom: "$1,200",
    facts: [
      { label: "Language", value: "English" },
      { label: "Currency", value: "AUD ($)" },
      { label: "Time Zone", value: "UTC+10 / AEST" },
      { label: "Visa", value: "ETA Required" },
    ],
    bestMonths: ["Sep", "Oct", "Nov", "Mar", "Apr"],
    highlights: [
      {
        name: "Sydney Opera House",
        desc: "One of the 20th century's greatest architectural triumphs - a UNESCO World Heritage Site on the harbor.",
        img: '/templates/airline/dest-sydney-1.jpg',
      },
      {
        name: "Bondi Beach",
        desc: "Australia's most famous beach - golden sand, rolling surf, and a vibrant café and boutique scene.",
        img: '/templates/airline/dest-sydney-2.jpg',
      },
      {
        name: "Blue Mountains",
        desc: "Just 90 minutes from the city - dramatic sandstone cliffs, waterfalls, and ancient eucalyptus forests.",
        img: '/templates/airline/dest-sydney-3.jpg',
      },
    ],
    flights: [
      { departure: "09:30", arrival: "20:00", duration: "10h 30m", price: "$1,200", class: "Economy" },
      { departure: "22:45", arrival: "09:15+1", duration: "10h 30m", price: "$3,100", class: "Business" },
      { departure: "15:00", arrival: "01:30+1", duration: "10h 30m", price: "$7,800", class: "First" },
    ],
    related: ["tokyo", "bali", "new-york"],
  },
  bali: {
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    iataCode: "DPS",
    tagline: "Tropical Paradise Awaits",
    desc: "Bali is a world of its own - terraced rice paddies cascade into jungle valleys, sacred temples perch on coastal clifftops, and the air carries the scent of incense and frangipani. Indonesia's Island of the Gods offers an extraordinary blend of spiritual richness and natural beauty.",
    heroImg: '/templates/airline/dest-bali-hero.jpg',
    flightDuration: "7h 00m",
    priceFrom: "$620",
    facts: [
      { label: "Language", value: "Balinese / Indonesian" },
      { label: "Currency", value: "IDR (Rp)" },
      { label: "Time Zone", value: "UTC+8 / WITA" },
      { label: "Visa", value: "Visa on Arrival" },
    ],
    bestMonths: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    highlights: [
      {
        name: "Ubud Rice Terraces",
        desc: "The legendary Tegallalang terraces - emerald staircases of rice carved into the hillside for centuries.",
        img: '/templates/airline/dest-bali-1.jpg',
      },
      {
        name: "Tanah Lot Temple",
        desc: "A mythical sea temple perched on a rocky islet - most spectacular at sunset when silhouetted against the sky.",
        img: '/templates/airline/dest-bali-2.jpg',
      },
      {
        name: "Seminyak Beach",
        desc: "Bali's most stylish beach strip - designer beach clubs, superb surf, and legendary sunset cocktails.",
        img: '/templates/airline/dest-bali-3.jpg',
      },
    ],
    flights: [
      { departure: "07:00", arrival: "14:00", duration: "7h 00m", price: "$620", class: "Economy" },
      { departure: "16:30", arrival: "23:30", duration: "7h 00m", price: "$1,450", class: "Business" },
      { departure: "23:55", arrival: "06:55+1", duration: "7h 00m", price: "$4,200", class: "First" },
    ],
    related: ["tokyo", "dubai", "sydney"],
  },
};
