"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Plus, Minus, ArrowLeft, Shield, Truck, RefreshCw, Star } from "lucide-react";
import { Navbar } from "../../_components/Navbar";
import { Footer } from "../../_components/Footer";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import { Button } from "../../_components/ui/Button";
import Link from "next/link";

const FASHION_PRODUCTS = [
  {
    id: 1,
    name: '울 버킷 햇',
    price: '$120.00',
    image: '/templates/OHMT001-fashion/wool-hat.png',
    category: '액세서리',
    desc: '정교하게 제작된 구조적인 울 버킷 햇입니다. 깔끔한 기하학적 솔기와 우아하고 미니멀한 실루엣이 특징입니다. 하이 패션 레이어링에 완벽합니다.',
    longDesc: '현대적인 럭셔리를 지향하는 울 버킷 햇은 도톰하게 기모를 살린 최고급 버진 울 원단을 사용하여 정교하게 성형되었습니다. 기하학적 패널 구조로 재단하여 찬바람에도 힘 있게 본래의 조형적 실루엣을 유지하며, 내부는 고급 실크 블렌드 큐프로 안감으로 마감하여 모발 및 이마에 닿는 감촉이 매우 부드럽습니다. 옆면 솔기 라인에 톤온톤으로 정갈하게 수놓아진 미니멀 자수 로고로 완성했습니다.\n\n이 햇은 착용 시 두상의 단점을 보완해 주며, 얼굴선을 갸름하고 아담해 보이게 연출해 줍니다. 챙의 각도와 길이는 수차례의 드레이핑 테스트를 거쳐 눈가를 은은하게 가려주면서 시야는 충분히 확보하는 가장 이상적인 비율로 조율되었습니다.\n\n단정한 미니멀 코트나 레더 재킷 등 다양한 아우터 스타일링에 시크한 포인트를 주기 좋아 찬 바람 부는 계절마다 손이 자주 갈 데일리 액세서리입니다.',
    specs: [
      { label: '소재 혼용률', value: '겉감: 100% 천연 버진 울 (Premium Wool), 안감: 100% 큐프로 (Cupro)' },
      { label: '규격 및 사이즈', value: '단일 프리 규격 (둘레 56cm - 58cm 최적 피팅)' },
      { label: '챙 길이 & 높이', value: '챙 길이: 6.5cm, 총 높이: 9.5cm' },
      { label: '안감 가공', value: '정전기 방지 및 정발 모발 쓸림 방지 실크 필 큐프로 안감 적용' },
      { label: '세탁 가이드', value: '소재 변형 및 보풀 방지를 위한 드라이클리닝 전용' },
      { label: '봉제 디테일', value: '비가시 무봉제 인터락 공법 (겉으로 실밥이 보이지 않는 정밀 마감)' },
      { label: '보증 사항', value: '원단 불량 및 올 풀림 발생 시 1년 이내 무상 수선 지원' },
      { label: '제조국', value: '독일 뮌헨 모자 전문 공방 전통 핸드메이드 마감' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: '이지원', rating: 5, date: '2026년 5월 14일', text: '두상 형태가 진짜 예뻐 보여요. 찬 바람 불 때 썼는데 핏이 흐물거리지 않고 짱짱해서 너무 시크하고 멋스럽습니다.' },
      { id: 'r2', reviewer: '황우진', rating: 4, date: '2026년 4월 20일', text: '안감이 실크 같아서 이마가 가렵지 않고 착용감이 정말 편안합니다. 확실히 싼 모자랑은 원단에서 뿜어져 나오는 광택 자체가 다르네요.' },
      { id: 'r3', reviewer: '최윤아', rating: 5, date: '2026년 5월 27일', text: '챙 각도가 너무 펄럭이지 않고 똑 떨어져서 쌩얼 가리기에도 정말 최고입니다. 검정색 샀는데 크림 베이지도 살까 고민돼요.' },
      { id: 'r4', reviewer: '김지현', rating: 5, date: '2026년 6월 02일', text: '독일 핸드메이드라 그런지 스티치 라인이 엄청나게 일정하고 완성도가 최상급입니다. 올겨울 아주 요긴하게 쓰겠네요.' }
    ]
  },
  {
    id: 2,
    name: '클래식 트렌치 코트',
    price: '$850.00',
    image: '/templates/OHMT001-fashion/trench-coat.png',
    category: '아우터웨어',
    desc: '내구성이 뛰어난 코튼 가바딘 소재로 제작된 오버사이즈 더블 브레스티드 트렌치 코트입니다. 절제된 실루엣을 위한 구조적인 스톰 플랩과 미니멀한 벨트 클로저가 특징입니다.',
    longDesc: '시간을 초월한 고전의 품격을 현대적으로 재해석한 클래식 트렌치코트입니다. 탄탄하고 고밀도로 직조된 방수 코튼 가바딘 원단을 사용하여 무게감 있고 우아하게 떨어지는 오버사이즈 실루엣이 특징입니다. 와이드한 스톰 플랩과 깃을 세워 고정할 수 있는 넥 래치, 가죽으로 감싼 브라스 버클 벨트까지 전통적인 디테일을 충실하게 수록했습니다. 어깨와 상체 안쪽에 고급스러운 비스코스 안감을 덧대어 간절기 레이어링이 무척 용이합니다.\n\n이 제품은 오버사이즈 테일러링을 적용하여 단추를 다 채우면 드라마틱한 H라인 코트로, 벨트를 단단히 동여매면 우아하게 주름지는 A라인 코트로 투웨이(2-way) 스타일링이 가능합니다.\n\n고밀도 코튼 가바딘 원사는 발수 코팅 가공을 추가하여 가벼운 봄비나 이슬비 정도는 젖지 않고 튕겨내며, 구김이 가도 분무기로 가볍게 뿌려주면 주름이 부드럽게 펴지는 형상 복원력을 갖췄습니다.',
    specs: [
      { label: '겉감 소재', value: '100% 친환경 유기농 고밀도 코튼 가바딘 (방수/발수/방풍 가공 완료)' },
      { label: '안감 소재', value: '100% 천연 비스코스 샤르무즈 리미티드 라이닝 (하프 안감 적용)' },
      { label: '부자재 사양', value: '100% 천연 리얼 버팔로 뿔 단추, 이탈리안 카프스킨 가죽 코팅 버클' },
      { label: '피팅 실루엣', value: '오버사이즈 더블 브레스티드 드롭 숄더 핏' },
      { label: '디자인 디테일', value: '백 스톰 플랩, 단추형 견장, 건 패치 디테일 완비' },
      { label: '세탁법 가이드', value: '가죽 버클 손상 방지를 위해 단독 석유계 드라이클리닝 권장' },
      { label: '보증 사항', value: '벨트 및 부자재 소실 시 2년 이내 무상 충원 부속 제공' },
      { label: '제조 공정', value: '영국 런던 아틀리에 정밀 테일러드 공정 수공 제작' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: '정소영', rating: 5, date: '2026년 6월 1일', text: '가바딘 원단이 아주 톡톡하고 묵직합니다. 대충 툭 걸쳐도 핏이 웅장하게 살아나서 인생 트렌치 만났습니다. 평생 소장할 거예요.' },
      { id: 'r2', reviewer: '최진혁', rating: 5, date: '2026년 5월 18일', text: '단추가 천연 버팔로 뿔이라 무늬가 다 다른 게 멋스러워요. 소매 가죽 버클 바느질도 정교하기 그지없습니다.' },
      { id: 'r3', reviewer: '강동원', rating: 4, date: '2026년 5월 25일', text: '오버핏으로 나와서 품이 상당히 큽니다. 평소 M 입는데 S로 구매했더니 딱 원하던 깔끔한 오버핏 세련미가 나옵니다. 실측 참고하세요.' },
      { id: 'r4', reviewer: '박은혜', rating: 5, date: '2026년 6월 09일', text: '어깨 라인 흘러내리는 게 부하지 않게 딱 예쁩니다. 길이감도 168 기준 무릎 아래 15센티 정도로 우아해서 대만족합니다.' }
    ]
  },
  {
    id: 3,
    name: '미니멀리스트 백팩',
    price: '$350.00',
    image: '/templates/OHMT001-fashion/backpack.png',
    category: '가방',
    desc: '프리미엄 매트 블랙 가죽으로 제작되었습니다. 깔끔한 숨겨진 지퍼 구조의 싱글 플랩 수납공간이 특징입니다. 활동적인 현대 생활을 위한 궁극의 필수 아이템입니다.',
    longDesc: '불필요한 디테일을 전면 배제한 극도의 미니멀리즘 백팩입니다. 방수 가공 코팅 처리를 거쳐 매트하고 깊이감 있는 블랙 톤을 보여주는 이탈리아산 풀그레인 페블 레더로 제작되었습니다. 싱글 플랩 구조 아래 숨겨진 메탈 지퍼를 열면 16인치 맥북 프로가 완벽하게 수납되는 패딩 오거나이저가 내장되어 있으며, 등판의 통기성 메쉬 레이어와 가죽 어깨끈 쿠션을 적용하여 장시간 이동에도 피로가 없습니다.\n\n외관에는 어떤 불필요한 주머니나 스트랩도 노출시키지 않아 정장 슈트와 함께 착용해도 전혀 어색하지 않은 오피스 백팩의 실루엣을 자아냅니다. 등판 쪽에는 여권이나 지갑을 안전하게 넣을 수 있는 도난 방지 히든 시크릿 지퍼 슬롯이 내장되어 있습니다.\n\n지퍼에는 YKK 방수 지퍼 라인을 테이핑 접합하여 비가 오는 날에도 내부 전자기기가 젖지 않도록 세심하게 배려했습니다.',
    specs: [
      { label: '가죽 소재', value: '100% 풀그레인 이탈리아 카프 페블 레더 (Water-resistant 코팅)' },
      { label: '안감 소재', value: '100% 친환경 재생 에코 나일론 워터프루프 쉴드 라이닝' },
      { label: '크기 규격', value: '가로 32cm x 세로 45cm x 폭 14cm' },
      { label: '노트북 수납', value: '최대 16인치 MacBook Pro 전용 극세사 패딩 슬리브 탑재' },
      { label: '지퍼 사양', value: 'YKK 아쿠아가드 (Aquaguard) 무광 블랙 방수 지퍼 라인' },
      { label: '어깨끈 설계', value: '천연 가죽 전면 마감 및 고밀도 에어메쉬 충격 완화 패드 적용' },
      { label: '보증 기간', value: '가죽 및 봉제 라인 평생 수선 보증 (Lifetime Warranty)' },
      { label: '원산지', value: '이탈리아 베네치아 하이엔드 레더 팩토리' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: '한준우', rating: 5, date: '2026년 6월 5일', text: '지저분한 끈이나 버클이 보이지 않고 가죽 질감만 고급스럽게 드러나서 너무 시크해요. 비즈니스 정장 룩에 찰떡궁합입니다.' },
      { id: 'r2', reviewer: '강민정', rating: 4, date: '2026년 5월 24일', text: '아이패드와 노트북을 안전하게 분리 수납할 수 있어서 대학원생인 저에게 정말 유용합니다. 천연 가죽이라 무게감은 다소 있어요.' },
      { id: 'r3', reviewer: '서지훈', rating: 5, date: '2026년 5월 31일', text: '등판 메쉬가 아주 폭신하고 가죽 끈 퀄리티도 끝내줍니다. 지퍼가 겉으로 안 드러나게 플랩으로 가려주는 게 신의 한 수입니다.' },
      { id: 'r4', reviewer: '임소윤', rating: 5, date: '2026년 6월 07일', text: '방수 가죽이라 비 올 때도 멨는데 물방울이 그냥 또르르 굴러떨어지네요. 가죽 얼룩도 안 생기고 마감 처리가 최고입니다.' }
    ]
  },
  {
    id: 4,
    name: '프리미엄 레더 부츠',
    price: '$480.00',
    image: '/templates/OHMT001-fashion/boots.png',
    category: '신발',
    desc: '스퀘어 토 하이탑 부츠입니다. 프리미엄 브러시드 카프스킨 가죽과 스택드 레더 힐, 사이드 지퍼 클로저가 특징입니다. 순수한 조형미를 선사합니다.',
    longDesc: '미니멀하면서도 선이 굵은 조형미를 가진 스퀘어 토 가죽 부츠입니다. 표면을 살짝 브러싱하여 매끄러운 유광을 살려낸 카프스킨(송아지 가죽)으로 수공 제작되었습니다. 안쪽 발목을 부드럽게 지지하도록 천연 카프 라이닝 가공을 덧댔으며, 인체공학적 발바닥 지지 쿠션을 인솔에 탑재해 편안하게 신으실 수 있습니다. 5cm 높이의 스택드 가죽 블록 힐과 미끄럼 방지 비브람 고무솔을 조합했습니다.\n\n스퀘어 토 디자인은 앞코 부분을 너무 넓지도 날카롭지도 않게 절묘한 라인으로 재단하여, 어떤 팬츠 기장과 매치해도 세련된 실루엣을 완성해 줍니다.\n\n안쪽의 사이드 콘실 지퍼는 고가 부품을 사용하여 신고 벗을 때 걸림이 없고 가죽이 씹히는 사고를 방지하도록 스커트 안감 처리를 더했습니다.',
    specs: [
      { label: '갑피 가죽', value: '100% 프리미엄 천연 카프스킨 (Brushed Calfskin - 송아지 가죽)' },
      { label: '안감 가죽', value: '100% 천연 돈피 가죽 전체 라이닝 (뛰어난 통기성)' },
      { label: '창 (Outsole)', value: '스택드 가죽 레이어 창 및 이탈리아 비브람(Vibram) 하프 루버솔 적용' },
      { label: '굽 높이', value: '5.0cm (적층 가죽 블록 컴포트 힐)' },
      { label: '지퍼 사양', value: 'YKK 정품 엑셀라(Excella) 황동 럭셔리 사이드 지퍼 클로저' },
      { label: '제법 사양', value: '맥케이 제법 (Blake Stitch Method - 부드럽고 유연한 발 디딤)' },
      { label: '보증 사항', value: '굽 마모 시 비브람 솔 평생 유상 교체 서비스 지원' },
      { label: '제조국', value: '이탈리아 피렌체 전통 슈즈 장인 아틀리에' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: '김나영', rating: 5, date: '2026년 6월 10일', text: '스퀘어 앞코가 너무 투박하지 않으면서 세련되었습니다. 굽이 5cm인데도 통굽이라 흔들림 없이 편해서 자주 신게 되네요.' },
      { id: 'r2', reviewer: '박지훈', rating: 5, date: '2026년 5월 29일', text: '가죽 광택이 은은하고 지퍼 슬라이딩이 엄청 부드럽습니다. 정사이즈 주문했는데 발볼도 편하게 딱 맞습니다.' },
      { id: 'r3', reviewer: '최은우', rating: 5, date: '2026년 6월 01일', text: '와이드 슬랙스 기장 길게 덮어서 입으면 신발 앞부분만 살짝 드러나는데 이게 진짜 시크하고 간지납니다. 퀄리티 최고예요.' },
      { id: 'r4', reviewer: '윤정훈', rating: 4, date: '2026년 6월 06일', text: '처음 신었을 때는 발목 입구가 약간 타이트했는데 가죽이라 이틀 정도 신으니까 부드럽게 늘어나서 제 발목에 착 붙네요.' }
    ]
  },
  {
    id: 5,
    name: '실크 이브닝 드레스',
    price: '$1,200.00',
    image: '/templates/OHMT001-fashion/silk-dress.png',
    category: '드레스',
    desc: '순수 헤비웨이트 실크 샤르무즈 소재로 제작된 흐르는 듯한 바닥 길이의 드레스입니다. 섬세하고 유연한 네크라인과 오픈 백 구조가 특징입니다. 절제된 우아함을 보여줍니다.',
    longDesc: '바이어스 컷팅의 극치를 보여주는 유려한 실크 이브닝 드레스입니다. 22돈(Momme)의 묵직하고 밀도 높은 최고급 천연 뽕나무 실크(Mulberry Silk) 샤르무즈 원단만을 고집하여, 조명 아래서 흐르는 액체처럼 영롱한 광택을 연출합니다. 섬세하게 주름져 떨어지는 카울 네크라인과 대비되는 뒷면의 슬림 크로스 스트랩 오픈백 아키텍처로 시선을 압도하는 존재감을 구현했습니다.\n\n이 드레스는 바이어스(사선 재단) 공법을 고집하여 신축성 있는 지퍼 없이도 여성의 골반 라인을 타고 부드럽게 감기며 흘러내립니다. 천연 실크 고유의 냉감 성질 덕분에 몸에 달라붙지 않고 정전기를 극도로 제어합니다.\n\n밑단은 우아하게 끌리는 풀 렝스 머메이드 테일 실루엣으로, 격식 있는 만찬이나 갈라쇼, 웨딩 애프터 드레스로 더할 나위 없이 완벽한 자태를 완성합니다.',
    specs: [
      { label: '원단 소재', value: '100% 천연 멀버리 실크 샤르무즈 (22 Momme 프리미엄 헤비 실크)' },
      { label: '재단 공법', value: '3차원 입체 바이어스 재단 기법 (Bias-Cut - 지퍼 없는 편안한 실루엣)' },
      { label: '넥라인', value: '드레이프 카울 네크라인 (Cowl Neckline)' },
      { label: '백 디자인', value: '조절 가능한 슬림 스트랩 오픈 백 (Open Back) 디자인' },
      { label: '기장 & 실루엣', value: '풀 렝스 미끄러지듯 떨어지는 슬립 실루엣 (총장 약 155cm)' },
      { label: '세탁 가이드', value: '원단 광택 보존을 위해 실크 전문 명품 드라이클리닝 필수 권장' },
      { label: '보증 사항', value: '실크 원사 트임 및 올 풀림 발생 시 최초 1회 무상 올 교정 지원' },
      { label: '제조국', value: '프랑스 파리 오뜨 꾸뛰르 실크 전문 아틀리에 위탁 생산' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: '윤지민', rating: 5, date: '2026년 6월 2일', text: '실크가 몸을 흐르듯이 스치는데 가볍고 정말 고급스럽습니다. 특별한 만찬 파티에서 독보적으로 우아하다는 칭찬 많이 들었어요.' },
      { id: 'r2', reviewer: '장다혜', rating: 5, date: '2026년 5월 14일', text: '카울 네크라인 드레이프가 정말 예술적이고 쇄골과 목선이 엄청 길어 보여요. 실크 두께감도 도톰해서 흐물거리지 않습니다.' },
      { id: 'r3', reviewer: '송다솜', rating: 5, date: '2026년 5월 29일', text: '바이어스 재단이라 핏이 숨 막히지 않고 편해요. 백리스 스트랩으로 허리 파임 조절하기도 쉽습니다. 컬러도 맑은 샴페인이라 이쁩니다.' },
      { id: 'r4', reviewer: '임유리', rating: 5, date: '2026년 6월 04일', text: '웨딩 2부 피로연용으로 주문했는데 진짜 후회 없는 선택이었습니다. 수입 럭셔리 샵에서 빌리는 수백만원 드레스보다 실크 퀄이 더 좋네요.' }
    ]
  },
  {
    id: 6,
    name: '코튼 베이직 티셔츠',
    price: '$65.00',
    image: '/templates/OHMT001-fashion/basic-tee.png',
    category: '상의',
    desc: '박시한 헤비웨이트 코튼 저지 티셔츠입니다. 사이드 슬릿 헴 구조와 깔끔한 바운드 크루넥이 특징입니다. 편안하고 오래 지속되는 럭셔리 베이직 아이템으로 제작되었습니다.',
    longDesc: '오래 입어도 늘어나지 않고 각이 살도록 특별 제직한 고중량 260gsm 오가닉 코튼 코마사 싱글 저지 원단으로 완성한 에센셜 티셔츠입니다. 어깨 선이 자연스럽게 떨어지는 드롭 숄더와 여유로운 박시 핏을 지녔으며, 목 부분의 조밀한 립 바인딩 처리와 밑단 양측 슬릿 마감으로 어떤 하의에 넣어 입어도(Tuck-in) 편안하고 흐트러짐 없는 단정함을 선사합니다.\n\n이 티셔츠는 목 늘어남을 근본적으로 방지하기 위해 일반 시보리 처리가 아닌, 동일 원단을 바인딩 테이핑 봉제로 3중 체인 스티치 마감했습니다. 잦은 기계 세탁에도 변형이 없습니다.\n\n완성 단계에서 바이오 실리콘 유연 가공을 거쳐 원단 표면의 보풀을 완전히 제거하여, 부드럽고 매끄러우며 탄탄한 조직감을 자랑합니다.',
    specs: [
      { label: '원단 중량', value: '100% 최고급 오가닉 코마사 코튼 싱글 저지 (260 gsm 고밀도)' },
      { label: '실루엣', value: '내추럴 드롭 숄더 박시 릴랙스 핏' },
      { label: '넥라인 디테일', value: '늘어남 방지 삼중 바인딩 크루넥 (Bound Crewneck)' },
      { label: '밑단 마감', value: '양측 사이드 트임 슬릿 (Side Slit) 헴 가공' },
      { label: '원사 가공', value: '바이오 워싱 및 실리콘 콤팩트 가공 (보풀 및 정전기 방지)' },
      { label: '수축율 보장', value: '가마 텐타 가공 완료 (홈 란드리 세탁 시 수축율 1% 미만)' },
      { label: '세탁 가이드', value: '세탁망에 넣어 찬물 기계 세탁 가능 (건조기 사용은 피할 것)' },
      { label: '제조국', value: '포르투갈 친환경 오가닉 코튼 전문 직제 공장' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: '이태성', rating: 5, date: '2026년 6월 11일', text: '두께감이 톡톡해서 흰색인데도 찌찌 비침이 전혀 없고, 세탁기 수십 번 돌렸는데 목라인이 그대로 짱짱해요. 인생 무지티입니다.' },
      { id: 'r2', reviewer: '강성호', rating: 4, date: '2026년 6월 1일', text: '품질이 훌륭하고 적당한 세미오버핏이에요. 원단이 단단해서 몸매 커버도 잘 됩니다. 흰색 사고 검정색도 바로 재구매했어요.' },
      { id: 'r3', reviewer: '조민석', rating: 5, date: '2026년 5월 22일', text: '옆트임이 있어서 바지 앞부분만 찔러 넣기 진짜 편해요. 기장도 엉덩이 살짝 덮어줘서 레이어드 티셔츠로도 요긴하게 잘 입고 있습니다.' },
      { id: 'r4', reviewer: '백준영', rating: 5, date: '2026년 6월 08일', text: '이 가격이 전혀 아깝지 않은 탄탄한 하이엔드 코튼 질감입니다. 목 늘어남 걱정 없이 여름 내내 마음 편하게 입겠네요.' }
    ]
  }
];

function ProductDetailPageContent() {
  const params = useParams();
  const router = useRouter();
  const [mounted, setMounted] = React.useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [openTab, setOpenTab] = useState<string | null>(null);

  const toggleTab = (tabName: string) => {
    setOpenTab(openTab === tabName ? null : tabName);
  };

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const product = FASHION_PRODUCTS.find((p) => String(p.id) === String(params.id));

  if (!mounted) return null;
  if (!product) return <div className="pt-40 text-center uppercase font-bold tracking-widest text-[13px]">제품을 찾을 수 없습니다</div>;

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-white min-h-screen pt-20 md:pt-28 pb-12 selection:bg-black selection:text-white">
        <Navbar />
        
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          {/* Back Navigation */}
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.2em] mb-6 md:mb-10"
          >
            <ArrowLeft size={12} /> 컬렉션으로 돌아가기
          </Button>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 mb-16 md:mb-24">
            {/* Left: Product Image */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-3/5 lg:sticky lg:top-32 h-fit"
            >
              <div className="relative aspect-square bg-[var(--color-bg-secondary)] overflow-hidden w-full flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Right: Product Details Stack */}
            <div className="flex flex-col lg:w-2/5">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="space-y-6 md:space-y-8"
              >
                {/* Heading Block */}
                <div className="border-b border-black/10 pb-6">
                  <span className="text-[11px] font-medium text-black/40 uppercase tracking-[0.4em] mb-2 block">
                    {product.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-normal tracking-[-0.02em] uppercase leading-[1.5] text-[var(--color-text)] mb-4">
                    {product.name}
                  </h1>
                  <p className="text-[16px] font-bold text-black/70">
                    {product.price}
                  </p>
                </div>

                {/* Description */}
                <p className="text-[13px] md:text-[14px] text-black/60 leading-relaxed font-normal normal-case">
                  {product.desc}
                </p>

                {/* Size Selector */}
                <div className="space-y-3">
                  <span className="text-[11px] font-medium text-black/40 uppercase tracking-[0.3em] block">사이즈 선택</span>
                  <div className="flex gap-3">
                    {["S", "M", "L", "XL"].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 text-[13px] font-bold uppercase tracking-wider transition-colors border flex items-center justify-center ${
                          selectedSize === size
                            ? "bg-black border-black text-white"
                            : "border-black/15 text-black hover:border-black/55"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions Block */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  {/* Quantity */}
                  <div className="flex items-center justify-between border border-black/15 px-6 py-4 sm:w-36">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:opacity-50 transition-opacity">
                      <Minus size={14} />
                    </button>
                    <span className="text-[12px] font-bold w-4 text-center">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="hover:opacity-50 transition-opacity">
                      <Plus size={14} />
                    </button>
                  </div>

                  {/* Add Bag Button */}
                  <Button
                    variant="primary"
                    onClick={() => router.push('/ko/templates/OHMT001-fashion-KO/cart')}
                    className="flex-1 text-[13px] font-bold uppercase tracking-[0.3em] py-6"
                  >
                    장바구니 담기
                  </Button>
                </div>

                {/* 아코디언 탭 */}
                <div className="mt-10 border-t border-black/15">
                  {/* 탭 1: 상세 설명 */}
                  {product && (product as any).longDesc && (
                    <div className="border-b border-black/15">
                      <button
                        onClick={() => toggleTab('details')}
                        className="w-full flex items-center justify-between py-4 text-left font-bold text-[12px] uppercase tracking-[0.2em] text-black hover:opacity-60 transition-opacity"
                      >
                        <span>소재 & 상세 정보</span>
                        <span>{openTab === 'details' ? '−' : '+'}</span>
                      </button>
                      {openTab === 'details' && (
                        <div className="pb-6 text-[13px] leading-relaxed text-black/60 normal-case font-normal whitespace-pre-line">
                          {(product as any).longDesc}
                        </div>
                      )}
                    </div>
                  )}

                  {/* 탭 2: 제품 스펙 */}
                  {product && (product as any).specs && (product as any).specs.length > 0 && (
                    <div className="border-b border-black/15">
                      <button
                        onClick={() => toggleTab('specs')}
                        className="w-full flex items-center justify-between py-4 text-left font-bold text-[12px] uppercase tracking-[0.2em] text-black hover:opacity-60 transition-opacity"
                      >
                        <span>세부 사양</span>
                        <span>{openTab === 'specs' ? '−' : '+'}</span>
                      </button>
                      {openTab === 'specs' && (
                        <div className="pb-6">
                          <table className="w-full text-[13px] text-black/60 normal-case">
                            <tbody>
                              {(product as any).specs.map((spec: any, idx: number) => (
                                <tr key={idx} className="border-b border-black/5 last:border-0">
                                  <td className="py-2.5 font-bold text-black uppercase text-[11px] tracking-[0.05em] w-1/3">{spec.label}</td>
                                  <td className="py-2.5 w-2/3">{spec.value}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  )}

                  {/* 탭 3: 고객 리뷰 */}
                  {product && (product as any).reviewsList && (product as any).reviewsList.length > 0 && (
                    <div className="border-b border-black/15">
                      <button
                        onClick={() => toggleTab('reviews')}
                        className="w-full flex items-center justify-between py-4 text-left font-bold text-[12px] uppercase tracking-[0.2em] text-black hover:opacity-60 transition-opacity"
                      >
                        <span>구매 리뷰 ({(product as any).reviewsList.length})</span>
                        <span>{openTab === 'reviews' ? '−' : '+'}</span>
                      </button>
                      {openTab === 'reviews' && (
                        <div className="pb-6 space-y-6 normal-case text-[13px]">
                          {(product as any).reviewsList.map((review: any) => (
                            <div key={review.id} className="border-b border-black/5 pb-4 last:border-0 last:pb-0">
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-bold text-black">{review.reviewer}</span>
                                <span className="text-[11px] text-black/40">{review.date}</span>
                              </div>
                              <div className="flex gap-0.5 mb-2">
                                {[1, 2, 3, 4, 5].map((starIdx) => (
                                  <Star
                                    key={starIdx}
                                    size={10}
                                    fill={starIdx <= review.rating ? "black" : "none"}
                                    color={starIdx <= review.rating ? "black" : "#D1D5DB"}
                                    strokeWidth={1.5}
                                  />
                                ))}
                              </div>
                              <p className="leading-relaxed text-black/60">{review.text}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* 탭 4: 배송 및 반품 */}
                  <div className="border-b border-black/15">
                    <button
                      onClick={() => toggleTab('shipping')}
                      className="w-full flex items-center justify-between py-4 text-left font-bold text-[12px] uppercase tracking-[0.2em] text-black hover:opacity-60 transition-opacity"
                    >
                      <span>배송 및 반품 안내</span>
                      <span>{openTab === 'shipping' ? '−' : '+'}</span>
                    </button>
                    {openTab === 'shipping' && (
                      <div className="pb-6 text-[13px] leading-relaxed text-black/60 normal-case font-normal">
                        <p className="mb-2">25만 원 이상 구매 시 전 세계 무료 배송이 제공됩니다. 모든 주문은 DHL Express를 통해 발송되며, 일반적으로 영업일 기준 2~4일 이내에 배송 완료됩니다.</p>
                        <p>수령 후 30일 이내에 원본 택이 부착된 미착용 제품에 한하여 무료 반품 및 교환을 지원합니다.</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Service Pointers */}
                <div className="border-t border-black/10 pt-6 space-y-4 text-[13px] font-bold uppercase tracking-[0.25em] text-black/40">
                  <div className="flex items-center gap-3">
                    <Truck size={14} />
                    <span>전 세계 무료 배송</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <RefreshCw size={14} />
                    <span>45일 무료 반품</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield size={14} />
                    <span>안전한 결제 보장</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Editorial Visual Story section */}
          <section className="mt-16 md:mt-24 pb-12 border-t border-black/10">
            <div className="pt-12 md:pt-16 mb-10 md:mb-16">
              <span className="text-[11px] font-medium text-black/40 uppercase tracking-[0.4em] mb-2 block">분위기</span>
              <h2 className="text-3xl md:text-5xl font-normal uppercase tracking-tighter leading-none text-black">절제된 침묵.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="aspect-square bg-[var(--color-bg-secondary)] overflow-hidden"
              >
                <img 
                  src={product.image} 
                  className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-105"
                  alt="제품 에디토리얼 이미지"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl md:text-3xl font-normal uppercase leading-[1.5] text-black">
                  침묵으로 말하는<br/>테일러드 볼륨.
                </h3>
                <div className="w-12 h-px bg-black/20" />
                <p className="text-[13px] md:text-[14px] text-black/60 leading-relaxed font-normal normal-case max-w-md">
                  침묵을 통해 깊이를 전하는 실루엣. 각 의상은 전 세계에서 엄선된 최고급 소재로 정교하게 제작됩니다. 큐레이티드 모던 워드로브에 완벽히 통합되도록 디자인되었습니다. {product.desc}
                </p>
                <div className="pt-4">
                  <Link href="/ko/templates/OHMT001-fashion-KO" className="text-[13px] font-bold uppercase tracking-[0.25em] border-b border-black pb-1 hover:opacity-50 transition-opacity">
                    컬렉션으로 돌아가기
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
        
        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function ProductDetailPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <ProductDetailPageContent {...props} />
    </React.Suspense>
  );
}
