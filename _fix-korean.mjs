import fs from "fs";

// ==================== FIX: [category]/page.tsx ====================
const catPath = "D:/Work/ohmytemplate_temp/src/app/templates/newspaper-ko/[category]/page.tsx";
let catContent = fs.readFileSync(catPath, "utf8");

const koreanCategoryData = `const categoryContent: Record<string, { title: string; articles: Array<{ title: string; slug: string; excerpt: string; author: string; time: string; image: number }> }> = {
  world: {
    title: "\uAD6D\uC81C \uB274\uC2A4",
    articles: [
      { title: "\uC81C\uB124\uBC14\uC5D0\uC11C \uAE00\uB85C\uBC8C \uBB34\uC5ED \uD611\uC0C1 \uC7AC\uAC1C", slug: "global-trade-talks", excerpt: "\uAC01\uAD6D\uC774 \uC5ED\uC0AC\uC801\uC778 \uBB34\uC5ED \uD611\uC815 \uCCB4\uACC4\uC5D0 \uD569\uC758\uD558\uB2E4.", author: "\uC81C\uC784\uC2A4 \uBBF8\uCCBC", time: "2\uC2DC\uAC04 \uC804", image: 1 },
      { title: "\uC2E0\uD765 \uC2DC\uC7A5, \uAC15\uB825\uD55C \uC131\uC7A5\uC138 \uC2DC\uD604", slug: "emerging-markets-growth", excerpt: "\uB3D9\uB0A8\uC544\uC2DC\uC544 \uACBD\uC81C, \uC138\uACC4 \uD389\uADDC \uC131\uC7A5\uB960\uC744 \uC0C1\uD68C.", author: "\uB9AC\uC0AC \uCCE8", time: "4\uC2DC\uAC04 \uC804", image: 2 },
      { title: "\uAE30\uD6C4 \uC815\uC0C1\uD68C\uC758, 5,000\uC5B5 \uB2EC\uB7EC \uAE30\uAE08 \uC57D\uC18D", slug: "climate-summit-fund", excerpt: "\uC120\uC9C4\uAD6D, \uB179\uC0C9 \uC5D0\uB108\uC9C0 \uC804\uD658\uC5D0 \uB300\uADDC\uBAA8 \uD22C\uC790 \uD655\uC57D.", author: "\uD1A0\uB9C8\uC2A4 \uADF8\uB9B0", time: "6\uC2DC\uAC04 \uC804", image: 3 },
      { title: "\uAD6D\uC81C\uC0AC\uBC95\uC7AC\uD310\uC18C, \uAD6D\uACBD \uBD84\uC7FC \uCD5C\uC885 \uD310\uACB0", slug: "border-dispute-ruling", excerpt: "\uC5ED\uC0AC\uC801 \uACB0\uC815\uC774 \uC9C0\uC5ED \uC9C0\uC815\uD559\uC744 \uC7AC\uD3B8\uD558\uB2E4.", author: "\uB9C8\uB9AC\uC544 \uB85C\uB4DC\uB9AC\uAC8C\uC2A4", time: "8\uC2DC\uAC04 \uC804", image: 4 }
    ]
  },
  politics: {
    title: "\uC815\uCE58",
    articles: [
      { title: "\uAD6D\uD68C, \uC5ED\uC0AC\uC801 \uBC95\uC548 \uD1B5\uACFC... \uC815\uCE58\uAD8C \uC22C\uB809", slug: "parliament-legislation", excerpt: "\uC0C8 \uD22C\uD45C \uAC1C\uD601\uC548\uC774 \uC989\uC2DC \uBC1C\uD6A8\uB41C\uB2E4.", author: "\uB370\uC774\uBE44\uB4DC \uC2A4\uD130\uB9C1", time: "1\uC2DC\uAC04 \uC804", image: 2 },
      { title: "\uC120\uAC70\uAD00\uB9AC\uC704\uC6D0\uD68C, \uC0C8 \uC120\uAC70 \uC808\uCC28 \uBC1C\uD45C", slug: "election-procedures", excerpt: "\uD22C\uBA85\uC131 \uC81C\uACE0 \uBC29\uC548\uC73C\uB85C \uC720\uAD8C\uC790 \uC2E0\uB8B0 \uD68C\uBCF5 \uAE30\uB300.", author: "\uC0AC\uB77C \uC81C\uD0A8\uC2A4", time: "3\uC2DC\uAC04 \uC804", image: 3 },
      { title: "\uC5F0\uC815 \uD611\uC0C1, \uCD5C\uB300 \uACE0\uBE44 \uB9DE\uC544... \uACB0\uB860 \uC784\uBC15", slug: "coalition-negotiations", excerpt: "\uC815\uBD80 \uAD6C\uC131 \uD611\uC0C1\uC774 \uB370\uB4DC\uB77C\uC778\uC5D0 \uC784\uBC15.", author: "\uB85C\uBC84\uD2B8 \uC6D4\uC2DC", time: "5\uC2DC\uAC04 \uC804", image: 4 },
      { title: "\uC815\uC0C1 \uD68C\uB2F4, \uACBD\uC81C \uC815\uCC45 \uBC29\uD5A5 \uD569\uC758 \uB3C4\uCD9C", slug: "economic-policy-meeting", excerpt: "\uCD08\uB2F9\uC801 \uD569\uC758\uB85C \uC7AC\uC815 \uC804\uB7B5 \uAD6C\uCCB4\uD654.", author: "\uC5D0\uB9C8 \uD1B0\uC2A8", time: "7\uC2DC\uAC04 \uC804", image: 1 }
    ]
  },
  economy: {
    title: "\uACBD\uC81C",
    articles: [
      { title: "\uC99D\uC2DC, \uAE08\uC735 \uAC1C\uD601 \uBC1C\uD45C\uC5D0 6\uAC1C\uC6D4\uB798 \uCD5C\uACE0\uCE58 \uACBD\uC2E0", slug: "markets-banking-reforms", excerpt: "\uD22C\uC790 \uC2EC\uB9AC \uD68C\uBCF5\uC138... 6\uAC1C\uC6D4 \uB9CC\uC5D0 \uCD5C\uACE0\uCE58 \uACBD\uC2E0.", author: "\uB9C8\uC774\uD074 \uBE0C\uB8E9\uC2A4", time: "30\uBD84 \uC804", image: 3 },
      { title: "\uC911\uC559\uC740\uD589, \uAE30\uC900\uAE08\uB9AC \uB3D9\uACB0 \uACB0\uC815... \uBB3C\uAC00 \uC548\uC815\uC138", slug: "interest-rates-steady", excerpt: "\uC18C\uBE44\uC790 \uBB3C\uAC00 \uC548\uC815\uD654 \uC2E0\uD638... \uAE08\uB9AC \uB3D9\uACB0, \uC2DC\uC7A5 \uC548\uB3C4.", author: "\uCE90\uB864\uB77C\uC778 \uD504\uB77C\uC774\uC2A4", time: "1\uC2DC\uAC04 \uC804", image: 4 },
      { title: "\uAE30\uC220 \uC0B0\uC5C5 \uC8FC\uB3C4\uB85C \uB300\uADDC\uBAA8 \uC77C\uC790\uB9AC \uCC3D\uCD9C", slug: "tech-job-creation", excerpt: "\uC2E4\uC5C5\uB960 5\uB144 \uB9CC\uC5D0 \uCD5C\uC800\uCE58 \uAE30\uB85D... \uACE0\uC6A9 \uC2DC\uC7A5 \uD65C\uC669.", author: "\uC568\uB7F0 \uD3EC\uC2A4\uD130", time: "3\uC2DC\uAC04 \uC804", image: 1 },
      { title: "\uBD80\uB3D9\uC0B0 \uC2DC\uC7A5, \uBC14\uB2E5 \uD0C8\uCD9C... \uC810\uC9C4\uC801 \uD68C\uBCF5 \uC804\uB9DD", slug: "real-estate-recovery", excerpt: "\uC790\uC0B0 \uAC00\uCE58 \uC548\uC815\uC138 \uC804\uD658... \uC8FC\uC694 \uB3C4\uC2EC \uAC70\uB798\uB7C9 \uC99D\uAC00.", author: "\uBE45\uD1A0\uB9AC\uC544 \uB274\uBA3C", time: "5\uC2DC\uAC04 \uC804", image: 2 }
    ]
  },
  tech: {
    title: "IT/\uAE30\uC220",
    articles: [
      { title: "AI \uC5F0\uAD6C \uD601\uC2E0: \uC0C8\uB85C\uC6B4 \uBAA8\uB378, \uB180\uB77C\uC6B4 \uB2A5\uB825 \uC785\uC99D", slug: "ai-breakthrough", excerpt: "\uC5F0\uAD6C\uC9C4, \uAE30\uACC4 \uD559\uC2B5 \uBD84\uC57C \uD68D\uAE30\uC801 \uC9C4\uC804 \uBC1C\uD45C.", author: "\uC54C\uB809\uC2A4 \uCFE0\uB9C8\uB974 \uBC15\uC0AC", time: "1\uC2DC\uAC04 \uC804", image: 4 },
      { title: "\uC591\uC790 \uCEF4\uD4E8\uD130 \uAC1C\uBC1C, \uB610 \uD558\uB098\uC758 \uC774\uC815\uD45C \uB2EC\uC131", slug: "quantum-milestone", excerpt: "\uD504\uB85C\uD1A0\uD0C0\uC784, \uBCF5\uC7A1\uD55C \uCD5C\uC801\uD654 \uBB38\uC81C 4\uCD08 \uB9CC\uC5D0 \uD574\uACB0.", author: "\uB808\uBCA0\uCE74 \uB9AC \uBC15\uC0AC", time: "3\uC2DC\uAC04 \uC804", image: 1 },
      { title: "\uC2A4\uB9C8\uD2B8\uD3F0 \uD601\uC2E0 \uC8FC\uAE30 \uB354\uC6B1 \uAC00\uC18D\uD654", slug: "smartphone-innovation", excerpt: "\uC628\uB514\uBC14\uC774\uC2A4 AI \uAE30\uB2A5\uC73C\uB85C \uC0DD\uC0B0\uC131 \uB300\uD3ED \uD5A5\uC0C1 \uAE30\uB300.", author: "\uB9C8\uCEE4\uC2A4 \uCCE8", time: "5\uC2DC\uAC04 \uC804", image: 2 },
      { title: "\uAE00\uB85C\uBC8C \uC0AC\uC774\uBC84 \uBCF4\uC548 \uC704\uD611 \uB300\uC751 \uC2E0\uADDC \uD504\uB808\uC784\uC6CC\uD06C \uBC1C\uD45C", slug: "cybersecurity-framework", excerpt: "\uC8FC\uC694 IT \uAE30\uAD6C \uD569\uC758, \uB370\uC774\uD130 \uBCF4\uD638 \uAE00\uB85C\uBC8C \uD45C\uC900 \uB9C8\uB828.", author: "\uC870\uB098\uB2E8 \uBE14\uB808\uC774\uD06C", time: "7\uC2DC\uAC04 \uC804", image: 3 }
    ]
  },
  culture: {
    title: "\uBB38\uD654 & \uC608\uC220",
    articles: [
      { title: "\uAD6D\uB9BD \uBBF8\uC220\uAD00, \uC789\uC5B4\uBC84\uB9B0 \uBA85\uC791 5\uCC9C\uB9CC \uB2EC\uB7EC\uC5D0 \uD68C\uC218", slug: "museum-masterpiece", excerpt: "\uCC3D\uACE0\uC5D0\uC11C \uBC1C\uACAC\uB41C \uD76C\uADC0\uD55C \uBB38\uD654 \uC791\uD488... \uAC00\uCE58 5\uCC9C\uB9CC \uB2EC\uB7EC \uC774\uC0C1.", author: "\uC774\uC0AC\uBCA8\uB77C \uB85C\uB9C8\uB178", time: "2\uC2DC\uAC04 \uC804", image: 2 },
      { title: "\uC601\uD654\uC81C \uC131\uD669... \uB3C5\uB9BD \uC601\uD654\uC758 \uC0C8\uB85C\uC6B4 \uC9C0\uD3C9", slug: "film-festival", excerpt: "\uCD5C\uB2E4 \uAD00\uAC1D \uAE30\uB85D... \uBB38\uD654\uC801 \uBCC0\uD654\uC758 \uC2E0\uD638\uD0C4.", author: "\uC624\uC2A4\uCE74 \uB378\uAC00\uB3C4", time: "4\uC2DC\uAC04 \uC804", image: 3 },
      { title: "\uBC1C\uB808\uB2E8, \uD604\uB300\uC801 \uAC10\uAC01 \uB354\uD55C \uD601\uC2E0\uC801 \uACF5\uC5F0 \uC120\uBCF4\uC5EC", slug: "ballet-premiere", excerpt: "\uD074\uB798\uC2DD\uACFC \uCEF8\uD15C\uD3EC\uB7EC\uB9AC\uC758 \uC724\uD569... \uAD00\uAC1D\uACFC \uD3C9\uB2E8 \uADF9\uCC2C.", author: "\uBE45\uD1A0\uB9AC\uC544 \uB808\uC778", time: "6\uC2DC\uAC04 \uC804", image: 4 },
      { title: "\uC74C\uC545 \uC2A4\uD2B8\uB9AC\uBC0D \uC5C5\uACC4, \uC5ED\uB300 \uCD5C\uACE0 \uC131\uC7A5\uB960 \uAE30\uB85D", slug: "music-streaming-growth", excerpt: "\uC804 \uBD84\uAE30 \uB300\uBE44 8% \uC131\uC7A5... \uCCAD\uCCAD \uC2DC\uAC04 \uC0AC\uC0C1 \uCD5C\uB300.", author: "\uB124\uC774\uC120 \uC2A4\uCF67", time: "8\uC2DC\uAC04 \uC804", image: 1 }
    ]
  },
  sports: {
    title: "\uC2A4\uD3EC\uCE20",
    articles: [
      { title: "\uACB0\uC2B9\uC804 \uB300\uC5ED\uC804\uADE9, \uC5B8\uB354\uB3C5\uC758 \uAC10\uB3D9\uC801 \uC6B0\uC2B9", slug: "championship-final-delivers", excerpt: "\uC5F0\uC7A5 \uC811\uC804 \uB055\uC5D0 \uC640\uC77C\uB4DC\uCE74\uB4DC \uD300\uC774 \uC6B0\uC2B9 \uD2B8\uB85C\uD53C\uB97C \uAC70\uBA38\uC950\uB2E4.", author: "\uC81C\uC784\uC2A4 \uD328\uD130\uC2A8", time: "1\uC2DC\uAC04 \uC804", image: 1 },
      { title: "2032\uB144 \uC62C\uB9BC\uD53D \uAC1C\uCD5C\uC9C0 \uCD5C\uC885 \uC120\uC815 \uC644\uB8CC", slug: "olympic-venue-2032", excerpt: "\uCE58\uC5F4\uD588\uB358 \uACBD\uC7C1 \uB055\uC5D0 \uC120\uC815... \uC62C\uB9BC\uD53D \uC870\uC9C1\uC704 \uACF5\uC2DD \uBC1C\uD45C.", author: "\uC18C\uD53C\uC544 \uB9C8\uB974\uD2F0\uB124\uC2A4", time: "3\uC2DC\uAC04 \uC804", image: 2 },
      { title: "\uD14C\uB2C8\uC2A4 \uC2A4\uD0C0, \uBA54\uC774\uC800 \uB300\uD68C \uAE4C\uB975 \uC6B0\uC2B9... \uADF8\uB79C\uB4DC\uC2AC\uB7A8 \uC5ED\uC0AC", slug: "tennis-grand-slam", excerpt: "\uBE44\uC2DC\uB4DC \uC120\uC218\uC758 \uB4DC\uB77C\uB9C8\uD2F1\uD55C \uC5ED\uC804\uC2B9... \uD14C\uB2C8\uC2A4 \uC5ED\uC0AC\uC5D0 \uAE30\uB85D\uB418\uB2E4.", author: "\uC708\uB9AC\uC5C4 \uD5E4\uC774\uC2A4", time: "5\uC2DC\uAC04 \uC804", image: 3 },
      { title: "\uC138\uACC4 \uC721\uC0C1 \uC120\uC218\uAD8C, \uAC01 \uC885\uBAA9 \uC2E0\uAE30\uB85D \uC500\uC544\uC838", slug: "world-championships-records", excerpt: "\uC778\uAC04 \uD55C\uACC4 \uB3C4\uC804... \uC218\uB144\uAC04 \uAE4C\uC9C0\uC9C0 \uC54A\uB358 \uAE30\uB85D\uB4E4 \uACBD\uC2E0.", author: "\uC548\uC824\uB77C \uD53C\uC5B4\uC2A4", time: "7\uC2DC\uAC04 \uC804", image: 4 }
    ]
  }
};`;

// Replace the categoryContent data
const startIdx = catContent.indexOf("const categoryContent: Record");
const endIdx = catContent.indexOf("function CategoryPageContent");

if (startIdx >= 0 && endIdx >= 0) {
  catContent = catContent.substring(0, startIdx) + koreanCategoryData + "\n" + catContent.substring(endIdx);
  fs.writeFileSync(catPath, catContent, "utf8");
  console.log("[category]/page.tsx: FIXED");
} else {
  console.log("[category]/page.tsx: markers not found (startIdx=" + startIdx + ", endIdx=" + endIdx + ")");
}

// ==================== FIX: [slug]/page.tsx ====================
const slugPath = "D:/Work/ohmytemplate_temp/src/app/templates/newspaper-ko/[category]/[slug]/page.tsx";
let slugContent = fs.readFileSync(slugPath, "utf8");

// Fix individual corrupted Korean strings
const fixes = [
  // Line 536: Article not found
  { old: 'Article not found (already english)', new: '' }, // skip, already checking content
  
  // Actually, let me just do targeted replacements
  // 404 message
  { old: '\uAD30\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4', new: '\uAE30\uC0AC\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4' },
];

// Read the bytes and find all replacement characters
// Strategy: find known corrupted patterns and replace them
const corruptionMap = {
  // From line 561: Back link
  "\uFFFD\uFFFD���� \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD": "\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30",

  // From line 588: Social share labels
  "Ʈ����": "\uD2B8\uC704\uD130",
  "���̽���": "\uD398\uC774\uC2A4\uBD81",
  "�̸���": "\uC774\uBA54\uC77C",

  // From line 628: Related articles heading
  "������": "\uAD00\uB828 \uAE30\uC0AC",

  // From line 648: Subscribe CTA label
  "������ �����": "\uB514\uC9C0\uD138 \uC5D0\uB514\uC158",

  // From line 650: CTA heading
  "VINUS TIMES�� ���������� ����������": "VINUS TIMES\uC758 \uBB34\uC81C\uD55C \uC774\uC6A9\uAD8C\uC744 \uB9CC\uB098\uBCF4\uC138\uC694",

  // From line 652: CTA description  
  "�Ӻ�, ���� ����, ������ �м��� ���� ���ص帳�ϴ�.": "\uC18D\uBCF4, \uC2EC\uCE35 \uBCF4\uB3C4, \uC804\uBB38\uAC00 \uBD84\uC11D\uAE4C\uC9C0 \uB9E4\uC77C \uC804\uD574\uB4DC\uB9BD\uB2C8\uB2E4.",

  // From line 654: Subscribe button
  "���� �����ϱ�": "\uC9C0\uAE08 \uAD6C\uB3C5\uD558\uAE30",

  // From line 656: Price
  "�� 3,500������": "\uC8FC 3,500\uC6D0\uBD80\uD130",

  // From line 661-662: Explore (this is actually English and fine) - skip

  // From line 669: Arrow
  "��": "\u2192",

  // From line 675: Newsletter comment
  "/* �������� */": "/* \uB274\uC2A4\uB808\uD130 */",

  // From line 677: Newsletter label
  "��������": "\uB274\uC2A4\uB808\uD130",

  // From line 678: Newsletter heading
  "���ϸ� �긮��": "\uB9E4\uC77C \uC544\uCE68 \uB274\uC2A4",

  // From line 679: Newsletter description
  "�ֿ� ������ ��ħ���� ť���̼��Ͽ� �����ϴ�.": "\uC8FC\uC694 \uB274\uC2A4\uB97C \uB9E4\uC77C \uC544\uCE68 \uD050\uB808\uC774\uC158\uD558\uC5EC \uBCF4\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4.",

  // From line 680: Email placeholder
  "�̸��� �ּ�": "\uC774\uBA54\uC77C \uC8FC\uC18C",

  // From line 683: Subscribe button  
  "���� ��û": "\uAD6C\uB3C5 \uC2E0\uCCAD",

  // From line 412, 416: subscribers (corrupted in English text)
  // The original was "subscribers" which got partially corrupted
  // Let me check what the actual corruption looks like
  "���� ��û": "\uB9AC\uC2A4\uB108",  // replaces "subscriber" corruption
};

// Also fix comment markers
slugContent = slugContent.replaceAll("/* ?�?� Main article ?�?� */", "/* -- Main article -- */");
slugContent = slugContent.replaceAll("/* ?�?� Sidebar ?�?� */", "/* -- Sidebar -- */");
slugContent = slugContent.replaceAll("/* ���� ��û CTA */", "/* Subscribe CTA */");

// Fix "���� ��ûr" in article bodies (line 412, 416)
// The original English text had "subscribers" corrupted
slugContent = slugContent.replaceAll("���� ��ûrs", "listeners");
slugContent = slugContent.replaceAll("���� ��ûr", "listener");

// Now apply the corruption map
let appliedCount = 0;
for (const [corrupted, correct] of Object.entries(corruptionMap)) {
  if (slugContent.includes(corrupted)) {
    slugContent = slugContent.replaceAll(corrupted, correct);
    appliedCount++;
    console.log("  Fixed: " + corrupted.substring(0, 20));
  }
}
console.log("Applied " + appliedCount + " of " + Object.keys(corruptionMap).length + " replacements");

// Verify 404 message at line 536 is still correct
const lines = slugContent.split("\n");
for (let i = 535; i < 538 && i < lines.length; i++) {
  console.log("Line " + (i+1) + ": " + lines[i].trim());
}

fs.writeFileSync(slugPath, slugContent, "utf8");
console.log("[slug]/page.tsx: FIXED");
