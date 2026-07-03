import fs from "fs";
import path from "path";

const root = process.cwd();

const checks = [
  {
    path: "src/app/ko/templates/OHMT001-fashion/_components/BrandSection.tsx",
    includes: ["MAISON OHMT"],
    excludes: ["\uBC14\uC774\uB108\uC2A4\uD504\uB808\uB4DC"],
  },
  {
    path: "src/app/ko/templates/OHMT001-fashion/_components/ProductGrid.tsx",
    includes: ["/ko/templates/OHMT001-fashion/collection", "../_data/products"],
    excludes: ["/ko/templates/OHMT001-fashion/category/collection"],
  },
  {
    path: "src/app/ko/templates/OHMT001-fashion/_components/Navbar.tsx",
    includes: ["/ko/templates/OHMT001-fashion/collection", "/ko/templates/OHMT001-fashion/archive"],
    excludes: ["/ko/templates/OHMT001-fashion/category/collection", "/ko/templates/OHMT001-fashion/category/archive"],
  },
  {
    path: "src/app/ko/templates/OHMT001-fashion/layout.tsx",
    includes: ["/templates/fashion/og-image.jpg"],
    excludes: ["DevicePreviewShell"],
  },
  {
    path: "src/app/en/templates/OHMT001-fashion/layout.tsx",
    includes: ["/templates/fashion/og-image.jpg"],
    excludes: ["DevicePreviewShell"],
  },
];

const requiredPaths = [
  "src/app/ko/templates/OHMT001-fashion/collection/page.tsx",
  "src/app/ko/templates/OHMT001-fashion/archive/page.tsx",
  "src/app/ko/templates/OHMT001-fashion/_data/products.ts",
  "src/app/en/templates/OHMT001-fashion/collection/page.tsx",
  "src/app/en/templates/OHMT001-fashion/archive/page.tsx",
  "src/app/en/templates/OHMT001-fashion/_data/products.ts",
  "public/templates/fashion/og-image.jpg",
  "public/templates/fashion/about-hero-v2.png",
  "public/templates/OHMT001-fashion/og-image.jpg",
];

const failures = [];

for (const relativePath of requiredPaths) {
  const absolutePath = path.join(root, relativePath);
  if (!fs.existsSync(absolutePath)) {
    failures.push(`Missing required path: ${relativePath}`);
  }
}

for (const check of checks) {
  const absolutePath = path.join(root, check.path);
  if (!fs.existsSync(absolutePath)) {
    failures.push(`Missing checked file: ${check.path}`);
    continue;
  }

  const content = fs.readFileSync(absolutePath, "utf8");

  for (const expected of check.includes) {
    if (!content.includes(expected)) {
      failures.push(`${check.path} must include: ${expected}`);
    }
  }

  for (const forbidden of check.excludes) {
    if (content.includes(forbidden)) {
      failures.push(`${check.path} must not include: ${forbidden}`);
    }
  }
}

if (failures.length > 0) {
  console.error("OHMT001-fashion source verification failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("OHMT001-fashion source verification passed.");
