"use client";

import { useEffect } from "react";

type WebMcpTemplate = {
  name: string;
  slug: string;
  desc: string;
  categories: string[];
  applicableIndustries: string[];
  hashtags: string[];
};

type SearchInput = {
  query?: unknown;
  category?: unknown;
};

type WebMcpTool = {
  name: string;
  title: string;
  description: string;
  inputSchema: Record<string, unknown>;
  annotations: {
    readOnlyHint: boolean;
    untrustedContentHint: boolean;
  };
  execute: (input: SearchInput) => string | Promise<string>;
};

type ModelContext = {
  registerTool: (
    tool: WebMcpTool,
    options?: { signal?: AbortSignal },
  ) => Promise<void>;
};

type WebMcpDocument = Document & {
  modelContext?: ModelContext;
};

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim().toLocaleLowerCase() : "";
}

export function WebMcpTemplateSearch({
  lang,
  templates,
}: {
  lang: "ko" | "en";
  templates: WebMcpTemplate[];
}) {
  useEffect(() => {
    const modelContext = (document as WebMcpDocument).modelContext;
    if (!modelContext) return;

    const controller = new AbortController();
    const korean = lang === "ko";

    const tool: WebMcpTool = {
      name: "search_ohmt_templates",
      title: korean ? "OHMT 템플릿 검색" : "Search OHMT templates",
      description: korean
        ? "업종, 목적 또는 키워드로 OHMT의 공개 웹사이트 템플릿을 검색합니다. 읽기 전용이며 상담이나 결제를 실행하지 않습니다."
        : "Search OHMT's public website templates by industry, purpose, or keyword. This read-only tool does not submit inquiries or payments.",
      inputSchema: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description: korean
              ? "찾으려는 업종, 사이트 유형 또는 디자인 키워드"
              : "Industry, website type, or design keyword",
          },
          category: {
            type: "string",
            description: korean
              ? "선택 항목인 템플릿 카테고리"
              : "Optional template category",
          },
        },
        additionalProperties: false,
      },
      annotations: {
        readOnlyHint: true,
        untrustedContentHint: true,
      },
      execute: (input) => {
        const query = normalize(input?.query);
        const category = normalize(input?.category);

        const matches = templates.filter((template) => {
          const categoryText = template.categories.join(" ").toLocaleLowerCase();
          const searchable = [
            template.name,
            template.desc,
            ...template.categories,
            ...template.applicableIndustries,
            ...template.hashtags,
          ]
            .join(" ")
            .toLocaleLowerCase();

          return (!query || searchable.includes(query)) &&
            (!category || categoryText.includes(category));
        });

        return JSON.stringify({
          total: matches.length,
          results: matches.slice(0, 6).map((template) => ({
            name: template.name,
            description: template.desc.slice(0, 180),
            categories: template.categories,
            industries: template.applicableIndustries,
            url: `https://ohmt.site/${lang}/templates/${template.slug}`,
          })),
          consultationUrl: `https://ohmt.site/${lang}/contact`,
        });
      },
    };

    void modelContext.registerTool(tool, { signal: controller.signal }).catch(() => {
      // WebMCP is an early preview API. Unsupported browsers continue normally.
    });

    return () => controller.abort();
  }, [lang, templates]);

  return null;
}
