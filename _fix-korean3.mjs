import fs from "fs";

const p = "D:/Work/ohmytemplate_temp/src/app/templates/newspaper-ko/[category]/[slug]/page.tsx";
let c = fs.readFileSync(p, "utf8");

// Check what the actual corrupted text looks like
const lines = c.split("\n");
console.log("Current state around problematic lines:");
for (let i = 644; i < 682; i++) {
  if (i < lines.length) {
    console.log("L" + (i+1) + ": " + lines[i].trim().substring(0, 100));
  }
}

// Fix the related articles heading first (line 627-628)
// Current: <h3 ...>관련 기사 →→�</h3>
// Target: <h3 ...>관련 기사</h3>
console.log("\n--- Checking line 627 ---");
console.log(lines[626]);

// Actually, the issue is the related heading regex was too greedy and replaced 
// too much text. Let me check what's on each line precisely using hex
console.log("\n--- Hex of line 646 ---");
for (let i = 0; i < lines[645].length; i++) {
  const code = lines[645].charCodeAt(i);
  if (code > 127 || code < 32) {
    process.stdout.write(`[U+${code.toString(16).toUpperCase()}]`);
  } else {
    process.stdout.write(lines[645][i]);
  }
}
console.log();
