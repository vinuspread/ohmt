import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const envFile = readFileSync(join(__dirname, "../.env.local"), "utf-8");
const env = Object.fromEntries(
  envFile.split("\n").filter((l) => l.includes("=") && !l.startsWith("#")).map((l) => {
    const idx = l.indexOf("=");
    return [l.slice(0, idx).trim(), l.slice(idx + 1).trim().replace(/^"(.*)"$/, "$1")];
  })
);

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

// OHMT001~027 순서
const order = [
  "fashion",       // 001
  "jewelry",       // 002
  "exhibition",    // 003
  "furniture",     // 004
  "sneaker",       // 005
  "studio",        // 006
  "portfolio",     // 007
  "airline",       // 008
  "car",           // 009
  "cosmetic",      // 010
  "ir",            // 011
  "magazine",      // 012
  "newspaper",     // 013
  "docs",          // 014
  "dashboard",     // 015
  "technology",    // 016
  "multi-shop",    // 017
  "burger",        // 018
  "coffee",        // 019
  "hotel",         // 020
  "museum",        // 021
  "yoga",          // 022
  "game",          // 023
  "kids-education",// 024
  "wedding",       // 025
  "spa",           // 026
  "architecture",  // 027
];

for (let i = 0; i < order.length; i++) {
  const slug = order[i];
  const { error } = await supabase
    .from("templates")
    .update({ sort_order: i + 1 })
    .eq("slug", slug);
  if (error) console.error(`Error updating ${slug}:`, error.message);
  else console.log(`${i + 1}. ${slug}`);
}

console.log("\nDone! sort_order 업데이트 완료");
