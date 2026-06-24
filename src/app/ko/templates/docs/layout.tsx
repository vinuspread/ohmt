import type { Metadata } from "next";
import "./theme.css";

export const metadata: Metadata = {
  title: "문서 - 협업 문서 워크스페이스",
  description: "팀을 위한 깔끔한 노션 스타일 문서 워크스페이스입니다.",
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="-ko">
      <style>{`@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css');`}</style>
      {children}
    </div>
  );
}
