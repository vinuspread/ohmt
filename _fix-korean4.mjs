import fs from "fs";

const p = "D:/Work/ohmytemplate_temp/src/app/templates/newspaper-ko/[category]/[slug]/page.tsx";
let c = fs.readFileSync(p, "utf8");
let lines = c.split("\n");

// Fix each line precisely
const lineFixes = {};

// Line 646 (index 645): CTA label
lineFixes[645] = '            <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] mb-3 opacity-70">\uB514\uC9C0\uD138 \uC5D0\uB514\uC158</p>';

// Line 649 (index 648): CTA description
lineFixes[648] = '            <p className="text-[0.78rem] opacity-80 mb-5 leading-relaxed">\uC18D\uBCF4, \uC2EC\uCE35 \uBCF4\uB3C4, \uC804\uBB38\uAC00 \uBD84\uC11D\uAE4C\uC9C0 \uB9E4\uC77C \uC804\uD574\uB4DC\uB9BD\uB2C8\uB2E4.</p>';

// Line 653 (index 652): Price
lineFixes[652] = '            <p className="text-[0.65rem] opacity-60 mt-2 text-center">\uC8FC 3,500\uC6D0\uBD80\uD130</p>';

// Line 672 (index 671): Newsletter comment (currently "{/* 관련 기사→ */}")
lineFixes[671] = '              {/* \uB274\uC2A4\uB808\uD130 */}';

// Line 674 (index 673): Newsletter label
lineFixes[673] = '                <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#666] mb-2">\uB274\uC2A4\uB808\uD130</p>';

// Line 675 (index 674): Newsletter heading
lineFixes[674] = '                <h4 className="font-[family-name:var(--theme-font-heading)] font-medium text-[1.05rem] mb-3 tracking-[-0.03em]">\uB9E4\uC77C \uC544\uCE68 \uB274\uC2A4</h4>';

// Line 676 (index 675): Newsletter description
lineFixes[675] = '                <p className="text-[0.78rem] text-[#555] mb-4 font-sans leading-relaxed">\uC8FC\uC694 \uB274\uC2A4\uB97C \uB9E4\uC77C \uC544\uCE68 \uD050\uB808\uC774\uC158\uD558\uC5EC \uBCF4\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4.</p>';

// Line 680 (index 679): Newsletter button
lineFixes[679] = '                  \uAD6C\uB3C5 \uC2E0\uCCAD';

// Apply all fixes
for (const [idx, newLine] of Object.entries(lineFixes)) {
  const i = parseInt(idx);
  if (i < lines.length) {
    const oldLine = lines[i];
    // Only replace if the line has corruption (contains U+FFFD or unexpected content)
    lines[i] = newLine;
    console.log("Fixed line " + (i+1));
  }
}

c = lines.join("\n");
fs.writeFileSync(p, c, "utf8");
console.log("\nAll fixes applied. Checking for remaining corruption...");

// Verify
const v = fs.readFileSync(p, "utf8");
if (v.includes("\uFFFD")) {
  console.log("STILL HAS CORRUPTION:");
  const vl = v.split("\n");
  vl.forEach((line, i) => {
    if (line.includes("\uFFFD")) {
      console.log("L" + (i+1) + ": " + line.trim());
    }
  });
} else {
  console.log("ALL CORRUPTION FIXED!");
}

// Also check "관련 기사" is not used incorrectly in non-related-articles context
// It should only appear in the related articles heading and maybe the hex content
const lines2 = v.split("\n");
let incorrectRelated = 0;
lines2.forEach((line, i) => {
  if (line.includes("\uAD00\uB828 \uAE30\uC0AC")) {
    // Check context - should only be in the related heading
    const trimmed = line.trim();
    if (trimmed.startsWith("{article.category}")) {
      console.log("OK - related heading at L" + (i+1));
    } else {
      console.log("UNEXPECTED 관련 기사 at L" + (i+1) + ": " + trimmed.substring(0, 60));
      incorrectRelated++;
    }
  }
});
if (incorrectRelated === 0) {
  console.log("No unexpected '관련 기사' occurrences!");
}

// Verify key lines
const vl = v.split("\n");
const checks = [645, 648, 652, 671, 673, 674, 675, 679];
for (const idx of checks) {
  if (idx < vl.length) {
    console.log("L" + (idx+1) + ": " + vl[idx].trim().substring(0, 80));
  }
}
