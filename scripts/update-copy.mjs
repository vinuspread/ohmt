import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const COPY_PATH = "D:\\Work\\ohmytemplate\\docs\\copy.md";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// OHMT number → slug mapping (from zip filenames / theme.json)
const SLUG_MAP = {
  "001": "fashion",
  "002": "jewelry",
  "003": "exhibition",
  "004": "furniture",
  "005": "sneaker",
  "006": "studio",
  "007": "portfolio",
  "008": "airline",
  "009": "car",
  "010": "cosmetic",
  "011": "ir",
  "012": "magazine",
  "013": "newspaper",
  "014": "docs",
  "015": "dashboard",
  "016": "technology",
  "017": "multi-shop",
  "018": "burger",
  "019": "coffee",
  "020": "hotel",
  "021": "museum",
  "022": "yoga",
  "023": "game",
  "024": "kids-education",
  "025": "wedding",
  "026": "spa",
  "027": "architecture",
  "028": "ev",
  "029": "fitness",
  "030": "resort",
};

function parseHashtags(hashtagLine) {
  return hashtagLine.match(/#[\w가-힣]+/g) ?? [];
}

function parseCopyMd(content) {
  const results = [];
  // Split by ## OHMT sections
  const sections = content.split(/^## OHMT(\d+)/m).slice(1);

  for (let i = 0; i < sections.length; i += 2) {
    const num = sections[i].trim().padStart(3, "0");
    const body = sections[i + 1];
    const slug = SLUG_MAP[num];
    if (!slug) continue;

    // Extract EN block
    const enMatch = body.match(/### EN\s+([\s\S]*?)(?=### KO|$)/);
    // Extract KO block
    const koMatch = body.match(/### KO\s+([\s\S]*?)(?=---|\n##|$)/);

    const parseBlock = (block) => {
      if (!block) return null;
      const titleMatch = block.match(/\*\*(?:Title|제목)\*\*:\s*(.+)/);
      const descMatch = block.match(/\*\*(?:Description|설명)\*\*:\s*(.+)/);
      const tagMatch = block.match(/\*\*(?:Hashtags|해시태그)\*\*:\s*(.+)/);
      return {
        name: titleMatch?.[1]?.trim() ?? null,
        description: descMatch?.[1]?.trim() ?? null,
        tags: tagMatch ? parseHashtags(tagMatch[1]) : [],
      };
    };

    const en = parseBlock(enMatch?.[1]);
    const ko = parseBlock(koMatch?.[1]);

    if (en) results.push({ slug, lang: "en", ...en });
    if (ko) results.push({ slug, lang: "ko", ...ko });
  }

  return results;
}

async function main() {
  const content = fs.readFileSync(COPY_PATH, "utf-8");
  const entries = parseCopyMd(content);

  // Deduplicate: if same slug+lang appears twice (e.g., OHMT027 fintech vs architecture), keep last
  const seen = new Map();
  for (const e of entries) {
    seen.set(`${e.slug}:${e.lang}`, e);
  }
  const unique = [...seen.values()];

  console.log(`총 ${unique.length}개 항목 업데이트\n`);

  for (const { slug, lang, name, description, tags } of unique) {
    const { error } = await supabase
      .from("templates")
      .update({ name, description, tags })
      .eq("slug", slug)
      .eq("lang", lang);

    if (error) {
      console.log(`  ✗ ${slug} [${lang}]: ${error.message}`);
    } else {
      console.log(`  ✓ ${slug} [${lang}]: ${name}`);
    }
  }

  console.log("\n완료.");
}

main().catch(console.error);
