import fs from "fs";

const p = "D:/Work/ohmytemplate_temp/src/app/templates/newspaper-ko/[category]/[slug]/page.tsx";
let c = fs.readFileSync(p, "utf8");

// 1. 404 message
c = c.replace(
  /<h1 className="text-2xl font-bold mb-4">[^<]+<\/h1>/,
  '<h1 className="text-2xl font-bold mb-4">\uAE30\uC0AC\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4</h1>'
);

// 2. Back link
c = c.replace(
  /<ArrowLeft size=\{13\} \/> [^<]+<\/Link>/,
  '<ArrowLeft size={13} /> {article.category}\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30</Link>'
);

// 3. Social share labels
c = c.replace(
  /\['[^']+', '[^']+', '[^']+'\]/,
  "['\uD2B8\uC704\uD130', '\uD398\uC774\uC2A4\uBD81', '\uC774\uBA54\uC77C']"
);

// 4. Related articles heading
c = c.replace(
  /{article\.category} [^<]+<\/h3>/,
  "{article.category} \uAD00\uB828 \uAE30\uC0AC</h3>"
);

// 5. Arrow character
c = c.replace(
  /<span className="text-\[#CCC\] group-hover:text-\[var\(--color-primary\)\] transition-colors">[^<]+<\/span>/g,
  '<span className="text-[#CCC] group-hover:text-[var(--color-primary)] transition-colors">\u2192</span>'
);

// 6. Subscribe CTA label
c = c.replace(
  /(\/\* Subscribe CTA \*\/\s*\n\s*<div class="bg-\[var\(--color-primary\)\] p-6 text-white">\s*\n\s*<p class="text-\[0\.62rem\] font-bold uppercase tracking-\[0\.2em\] mb-3 opacity-70">)[^<]+(<\/p>)/,
  "$1\uB514\uC9C0\uD138 \uC5D0\uB514\uC158$2"
);

// 7. CTA heading
c = c.replace(
  /(VINUS TIMES)[^<]+(<\/h4>)/,
  "$1\uC758 \uBB34\uC81C\uD55C \uC774\uC6A9\uAD8C\uC744 \uB9CC\uB098\uBCF4\uC138\uC694$2"
);

// 8. CTA description
c = c.replace(
  /(<p class="text-\[0\.78rem\] opacity-80 mb-5 leading-relaxed">)[^<]+(<\/p>)/,
  "$1\uC18D\uBCF4, \uC2EC\uCE35 \uBCF4\uB3C4, \uC804\uBB38\uAC00 \uBD84\uC11D\uAE4C\uC9C0 \uB9E4\uC77C \uC804\uD574\uB4DC\uB9BD\uB2C8\uB2E4.$2"
);

// 9. Subscribe button
c = c.replace(
  /(<button class="w-full py-3 bg-white text-\[var\(--color-primary\)\] text-\[0\.72rem\] font-bold uppercase tracking-wider hover:bg-\[#f5f5f5\] transition-colors">)[^<]+(<\/button>)/,
  "$1\uC9C0\uAE08 \uAD6C\uB3C5\uD558\uAE30$2"
);

// 10. Price text
c = c.replace(
  /(<p class="text-\[0\.65rem\] opacity-60 mt-2 text-center">)[^<]+(<\/p>)/,
  "$1\uC8FC 3,500\uC6D0\uBD80\uD130$2"
);

// 11. Newsletter label
c = c.replace(
  /(\/\* \uB274\uC2A4\uB808\uD130 \*\/\s*\n\s*<div class="border border-\[#DDD\] p-6">\s*\n\s*<p class="text-\[0\.62rem\] font-bold uppercase tracking-\[0\.2em\] text-\[#666\] mb-2">)[^<]+(<\/p>)/,
  "$1\uB274\uC2A4\uB808\uD130$2"
);

// 12. Newsletter heading
c = c.replace(
  /(<h4 class="font-\[family-name:var\(--theme-font-heading\)\] font-medium text-\[1\.05rem\] mb-3 tracking-\[-0\.03em\]">)[^<]+(<\/h4>)/,
  "$1\uB9E4\uC77C \uC544\uCE68 \uB274\uC2A4$2"
);

// 13. Newsletter description
c = c.replace(
  /(<p class="text-\[0\.78rem\] text-\[#555\] mb-4 font-sans leading-relaxed">)[^<]+(<\/p>)/,
  "$1\uC8FC\uC694 \uB274\uC2A4\uB97C \uB9E4\uC77C \uC544\uCE68 \uD050\uB808\uC774\uC158\uD558\uC5EC \uBCF4\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4.$2"
);

// 14. Email placeholder
c = c.replace(
  /(<input type="email" placeholder=")[^"]+(")/,
  "$1\uC774\uBA54\uC77C \uC8FC\uC18C$2"
);

// 15. Subscribe button
c = c.replace(
  /(<button class="w-full py-2\.5 bg-black text-white text-\[0\.7rem\] font-bold uppercase tracking-wider hover:bg-\[var\(--color-primary\)\] transition-colors">)[^<]+(<\/button>)/,
  "$1\uAD6C\uB3C5 \uC2E0\uCCAD$2"
);

// 16. Fix article body listener/subscriber corruption
c = c.replace(/[\uAC00-\uD7A3]{2} listener/g, "listener");

fs.writeFileSync(p, c, "utf8");
console.log("Done - verifying fixes:");

const v = fs.readFileSync(p, "utf8");
const vl = v.split("\n");
const checks = [
  { line: 535, label: "404 msg" },
  { line: 560, label: "back link" },
  { line: 587, label: "social labels" },
  { line: 627, label: "related heading" },
  { line: 647, label: "CTA label" },
  { line: 649, label: "CTA heading" },
  { line: 651, label: "CTA desc" },
  { line: 653, label: "CTA button" },
  { line: 655, label: "price" },
  { line: 668, label: "arrow" },
  { line: 676, label: "newsletter label" },
  { line: 677, label: "newsletter heading" },
  { line: 678, label: "newsletter desc" },
  { line: 679, label: "placeholder" },
  { line: 682, label: "subscribe btn" },
];

for (const chk of checks) {
  if (chk.line < vl.length) {
    const txt = vl[chk.line].trim();
    const hasCorruption = txt.includes("\uFFFD");
    console.log(`Line ${chk.line+1} (${chk.label}): ${hasCorruption ? "CORRUPTED" : "OK"} - ${txt.substring(0, 60)}`);
  }
}

// Check for remaining corruption
const remaining = v.indexOf("\uFFFD");
if (remaining >= 0) {
  const context = v.substring(Math.max(0, remaining - 40), remaining + 40);
  console.log("\nWARNING: Remaining corruption found at position " + remaining + ": ..." + context + "...");
}
