import "./theme.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "루멘 웨딩 - 프리미엄 웨딩 사진작가 포트폴리오 템플릿",
  description: "현실적이고 감성적인 다큐멘터리 스타일로 영원한 사랑을 기록합니다. Oh My Template의 프리미엄 템플릿입니다.",
};

export default function TemplateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css');`}</style>
      {children}
    </>
  );
}
