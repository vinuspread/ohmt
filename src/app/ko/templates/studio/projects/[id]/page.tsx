'use client';
import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '../../_components/Header';
import { Footer } from '../../_components/Footer';
import { PageHeader } from '../../_components/PageHeader';
import { ArrowRight } from 'lucide-react';
import theme from '../../theme.json';
import { TemplateWrapper } from "../../_components/TemplateWrapper";

const projectsData = [
  {
    id: 'proj-1',
    title: '호수가 보이는 주택',
    category: '주택 설계',
    year: '2026',
    location: '서울, 강남',
    image: '/templates/studio/project-1.jpg',
    type: 'residential',
    description: '미니멀리즘과 현대적 기능성을 결합한 럭셔리 주택. 자연채광을 극대화하고 정제된 소재의 조합으로 일상의 품질을 높이는 거주 공간을 실현했습니다.',
    details: '5,000평방미터 규모의 3층 주택으로 호수 전망을 활용한 오픈 플랜 설계. 명상 정원, 온천식 욕조, 천장까지 이어지는 도서관 등 각 공간이 주인의 라이프스타일을 반영합니다.',
    services: ['주택 설계', '소재 큐레이션', '맞춤 목공', '조경 통합'],
    gallery: ['/templates/studio/project-1.jpg', '/templates/studio/hero-2.jpg', '/templates/studio/hero-3.jpg'],
  },
  {
    id: 'proj-2',
    title: '모던 테크 오피스',
    category: '상업공간',
    year: '2025',
    location: '부산, 해운대',
    image: '/templates/studio/project-2.jpg',
    type: 'commercial',
    description: '생산성과 직원 복지를 동시에 고려한 최신 사무실 설계. 스칸디나비안 미니멀리즘과 첨단 조명 시스템으로 현대적 업무 환경을 창출합니다.',
    details: '8,000평방미터 규모의 개방형 오피스로 협업 존, 집중 업무 구간, 임원실이 유기적으로 연결됩니다. 자연 오크, 버니쉬 스틸, 콘크리트 마감의 소재 팔레트와 서커디안 리듬을 고려한 조명 시스템이 특징입니다.',
    services: ['공간 계획', '인테리어 설계', '조명 설계', '가구 선택'],
    gallery: ['/templates/studio/project-2.jpg', '/templates/studio/hero-1.jpg', '/templates/studio/hero-2.jpg'],
  },
  {
    id: 'proj-3',
    title: '부티크 호텔 로비',
    category: '호텔리티',
    year: '2025',
    location: 'Basel, Switzerland',
    image: '/templates/studio/project-3.jpg',
    type: 'exhibition',
    description: '조각과 공간 설계의 경계를 넘는 건축 설치미술. 기하학적 형태와 목재 구축이 만드는 몰입형 환경으로 지각을 재정의합니다.',
    details: '지속가능하게 수확한 목재로 구축된 1,200평방미터 규모의 파빌리온. 맞물리는 기하학적 형태들이 하루 종일 극적인 빛 패턴을 만들어냅니다. 방문객은 이동하면서 끊임없이 변화하는 공간을 경험하게 됩니다.',
    services: ['공간 설계', '소재 혁신', '구조 협업', '체험 설계'],
    gallery: ['/templates/studio/project-3.jpg', '/templates/studio/hero-3.jpg', '/templates/studio/hero-1.jpg'],
  },
];

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <TemplateWrapper theme={theme}>
        <main className="min-h-screen bg-white text-black">
          <Header />
          <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24 py-48 text-center">
            <h1 className="text-4xl font-bold">프로젝트를 찾을 수 없습니다</h1>
            <Link href="/ko/templates/studio/projects" className="text-blue-600 hover:underline mt-6 inline-block">
              프로젝트로 돌아가기
            </Link>
          </div>
          <Footer />
        </main>
      </TemplateWrapper>
    );
  }

  const relatedProjects = projectsData.filter((p) => p.id !== id).slice(0, 2);

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
        <Header />

        {/* Hero Image Full Width */}
        <section className="relative w-full h-screen max-h-[900px] overflow-hidden bg-black">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />

          {/* Meta Info Overlay */}
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-[1720px] w-full mx-auto px-6 md:px-16 lg:px-24 pb-12 md:pb-24">
              <div className="grid grid-cols-3 gap-12 md:gap-24 max-w-2xl">
                <div>
                  <span className="text-[12px] font-bold tracking-[2px] uppercase text-white/70 block mb-2">
                    연도
                  </span>
                  <p className="text-[16px] md:text-[20px] text-white">{project.year}</p>
                </div>
                <div>
                  <span className="text-[12px] font-bold tracking-[2px] uppercase text-white/70 block mb-2">
                    위치
                  </span>
                  <p className="text-[16px] md:text-[20px] text-white">{project.location}</p>
                </div>
                <div>
                  <span className="text-[12px] font-bold tracking-[2px] uppercase text-white/70 block mb-2">
                    카테고리
                  </span>
                  <p className="text-[16px] md:text-[20px] text-white">{project.category}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Title Section */}
        <section className="bg-white border-b border-black/5">
          <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24 py-12 md:py-20">
            <h1 className="text-[1.7rem] md:text-[3rem] md:text-[5rem] lg:text-[6rem] font-bold leading-[1.5] text-black">
              {project.title}
            </h1>
          </div>
        </section>

        {/* Project Content Section */}
        <section className="bg-white">
          {/* Intro Text */}
          <div className="max-w-2xl mx-auto px-6 md:px-12 py-16 md:py-24">
            <p className="text-[18px] md:text-[20px] leading-[1.8] text-black/80">
              {project.description}
            </p>
          </div>

          {/* Services Section - Full Width */}
          <div className="border-y border-black/5 py-16 md:py-24">
            <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                {project.services.map((service, idx) => (
                  <div key={idx}>
                    <div className="w-8 h-8 rounded-full bg-black/10 mb-6 flex items-center justify-center text-[12px] font-bold text-black">
                      {idx + 1}
                    </div>
                    <h4 className="text-[16px] font-bold text-black">{service}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Details Section - 2 Columns */}
          <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              <div>
                <h2 className="text-[28px] font-bold mb-6 text-black">프로젝트 상세</h2>
                <p className="text-[16px] leading-[1.8] text-black/70">
                  {project.details}
                </p>
              </div>
              <div>
                <h2 className="text-[28px] font-bold mb-6 text-black">핵심 특징</h2>
                <ul className="space-y-4">
                  <li className="flex gap-4 items-start">
                    <div className="w-1 h-6 bg-black mt-1 flex-shrink-0" />
                    <span className="text-[16px] text-black/70">신중하게 계획된 공간 설계와 현대적 기능성</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-1 h-6 bg-black mt-1 flex-shrink-0" />
                    <span className="text-[16px] text-black/70">프리미엄 소재 선택 및 맞춤 마감재</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-1 h-6 bg-black mt-1 flex-shrink-0" />
                    <span className="text-[16px] text-black/70">전략적 조명 설계 및 최적화된 분위기</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Gallery Section - Masonry Style */}
          <div className="border-t border-black/5 bg-gray-50 py-16 md:py-24">
            <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24">
              <h2 className="text-[32px] font-bold mb-12 text-black">프로젝트 갤러리</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.gallery.map((image, idx) => (
                  <div
                    key={idx}
                    className={`relative overflow-hidden bg-gray-200 group cursor-pointer ${
                      idx === 0 ? 'md:col-span-2 md:row-span-2 h-[400px] md:h-[500px]' : 'h-[300px] md:h-[240px]'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-12 md:py-24 bg-white border-b border-black/5">
          <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-[32px] font-bold leading-[1.5] mb-16 text-black">
              관련 프로젝트
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {relatedProjects.map((relProject) => (
                <Link
                  key={relProject.id}
                  href={`/ko/templates/studio/projects/${relProject.id}`}
                  className="group"
                >
                  <div className="relative w-full h-[350px] overflow-hidden mb-6">
                    <Image
                      src={relProject.image}
                      alt={relProject.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-[20px] font-bold text-black group-hover:opacity-60 transition-opacity">
                        {relProject.title}
                      </h3>
                      <p className="text-[14px] text-black/60 mt-2">{relProject.location}</p>
                    </div>
                    <ArrowRight size={20} className="text-black group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24 text-center">
            <h2 className="text-[32px] md:text-[48px] font-bold mb-8 leading-[1.5]">
              당신의 공간을 변화시킬 준비가 되셨나요?
            </h2>
            <p className="text-[16px] text-white/70 mb-12 max-w-[600px] mx-auto">
              프로젝트에 대해 논의하고 함께 뭔가 특별한 것을 만들어봅시다.
            </p>
            <Link
              href="/ko/templates/studio/contact"
              className="inline-flex items-center justify-center h-[54px] px-12 border border-white rounded-none text-white text-[13px] font-bold tracking-[3px] uppercase hover:bg-white hover:text-black transition-colors duration-300"
            >
              문의하기
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}
