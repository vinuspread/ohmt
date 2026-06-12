# Technology (Robotflow) Template Planning Document

This planning document outlines the structure, copy, flow, and assets required for the new `technology` template, inspired by the Robotflow Webflow template (Home V1).

## 1. Structure and Routing

Following the project rules (`CLAUDE.md`), the template will be implemented with complete separation between English (en) and Korean (ko) versions, with no shared translation code or URL parameters.

- **English version path**: `src/app/en/templates/technology/`
- **Korean version path**: `src/app/ko/templates/technology/`
- **Assets directory**: `public/templates/technology/` (shared by both en and ko)
- **Local components**: `_components/` under each version's folder (flat, no nesting)
- **Design Tokens**: `theme.css` and `theme.json` in the root of each version.

---

## 2. Page Sections (Home V1)

The landing page consists of the following key sections:

### Section 0: Header & Navigation
- **Left Side**: Logo ("Robotflow" text + custom robotic SVG logo icon).
- **Center**: Navigation links (Home, About, Products, Blog, Contact).
- **Right Side**: Call to Action button: "Reserve Now" (styled as a high-tech modern flat button).
- **Mobile**: Hamburger menu overlay.

### Section 1: Hero Section (`home-v1-hero`)
- **Headline**:
  - *EN*: "The revolution of the world is right here"
  - *KO*: "세상의 혁신은 바로 이곳에서 시작됩니다"
- **Subtext**:
  - *EN*: "Lorem ipsum dolor sit amet consectetur vel pharetra nulla a varius ac cras et est nec elementum ut facilisi tortor mi duis non."
  - *KO*: "로봇 공학과 인공지능 기술의 경이로운 결합으로, 비즈니스와 일상 모두를 진화시킵니다. 혁신적인 자율 시스템을 만나보세요."
- **CTA Row**:
  - Button: "Reserve Now" (예약하기)
  - Secondary Link: "From $45,000 USD" / "₩58,000,000부터"
- **Background**: Futuristic dark tech grid/dot background with a glowing robot/abstract engine preview.

### Section 2: Key Features Grid
- **Section Heading**: "Key Features" / "핵심 기술"
- **Grid Layout**: 3 columns (Mobile 1 column, Tablet/Desktop 3 columns).
- **Columns**:
  1. **Enhanced Mobility (향상된 이동성)**
     - Image: Futuristic mechanical wheel/leg structure.
     - Description: "자율 주행 및 지형 적응 알고리즘을 갖춘 고성능 이동 제어 기술."
  2. **Advanced AI (차세대 인공지능)**
     - Image: AI neural network chip mockup or coding overlay.
     - Description: "실시간 환경 분석과 판단 능력을 극대화한 온디바이스 딥러닝 시스템."
  3. **Human-like Dexterity (정밀한 상호작용)**
     - Image: Robotic arm/hand interface.
     - Description: "인간의 손길만큼 정교하고 부드러운 핸들링과 조작 기능 제공."

### Section 3: Where Technology Meets Design
- **Section Heading**: "Where technology meets design" / "기술과 미학의 경이로운 결합"
- **Description**: "로봇의 성능만큼이나 아름답고 직관적인 산업용 디자인과 완성도 높은 유저 인터페이스를 제공합니다."
- **Main Asset**: A large visual panel showing OmniBot layout with a stylized Video Play button lightbox.
- **CTA**: "Browse all articles" / "자세히 보기"

### Section 4: Introducing OmniBot Gen 2
- **Section Heading**: "Introducing OmniBot Gen 2" / "OmniBot Gen 2를 소개합니다"
- **Layout**: Center mockup of OmniBot Gen 2 with line pointers pointing to key specs on the left and right sides:
  - **Left 1**: Long life battery (고용량 배터리) - 24시간 연속 가동 및 자동 무선 충전 시스템.
  - **Left 2**: Voice assistant (지능형 음성 제어) - 자연어 음성 인식 탑재 및 멀티 링구얼 지원.
  - **Right 1**: Modular design (모듈식 아키텍처) - 용도에 따른 다양한 하드웨어 모듈 탈부착 가능.
  - **Right 2**: Gesture recognition (제스처 인식) - 사용자의 실시간 제스처 및 움직임을 자동 감지.
- **CTA**: "Reserve Now" (사전 예약하기)

### Section 5: Real Robotics, Real Impact (CTA Banner)
- **Title**: "Real robotics. Real impact." / "진정한 로봇 공학, 실질적인 혁신."
- **Subtext**: "현실 세계의 문제를 해결하고 비즈니스 효율을 극대화하는 자율 로봇의 실질적인 효과를 확인해 보세요."
- **CTA**: "Reserve Now" (예약하기) + "Learn More" (더 알아보기)

### Section 6: Models Available
- **Section Heading**: "Models Available" / "구매 가능한 라인업"
- **Grid Layout**: 2 detailed columns.
  - **Model 1: OmniBot Gen 2**
    - Desc: "4K 해상도 카메라, 120도 시야각, 빌트인 AI 프로세서가 포함된 실내 환경 최적화 플래그십 모델."
    - Price: $20K (Slashed from $25K) / ₩26,000,000 (₩32,500,000)
    - Link: "Learn more details" / "자세히 보기"
  - **Model 2: OmniBot Prime**
    - Desc: "고출력 구동부와 외곽 전용 정밀 센서, 강화 기계 골격이 적용된 프리미엄 고강도 산업용 모델."
    - Price: $25K (Slashed from $30K) / ₩32,500,000 (₩39,000,000)
    - Link: "Learn more details" / "자세히 보기"

### Section 7: Our Latest News (Blog Section)
- **Left Featured**:
  - Image: Modern robotics lab.
  - Title: "How OmiBot's robot could transform your daily life" / "OmniBot이 바꾸는 우리의 평온하고 효율적인 미래상"
- **Right List**:
  - Post 1: "New update v1.3 for OmniBot now enables new features" / "앱 제어 기능을 강화하는 OmniBot v1.3 펌웨어 업데이트 소식"
  - Post 2: "How AI enhances learning and behavior in humanoid robots" / "휴머노이드 로봇의 학습 능력 강화를 위한 인공지능 기술의 적용"

### Section 8: Footer
- Brand copyright, quick links (About, Contact, Products, Licensing, Docs), and social icons.

---

## 3. Localization Rules (Korean Typography Rules)
As per standard:
- Apply `tracking-tight` or `tracking-[-0.015em]` to Korean text.
- Increase leading on headings and body: body `leading-[1.8]`, headings `leading-[1.3]`.
- Title headings will feature modern English titles with Korean subtexts (e.g. "KEY FEATURES" in large type, followed by clean Korean section subtitles).
- Keep word breaks wrapping naturally via `break-keep` and `[overflow-wrap:normal]`.
