# Analytics 페이지 — Google Looker Studio 전환 작업지시

## 배경

현재 관리자 > Analytics 페이지(`src/app/admin/analytics/page.tsx`)는 Umami iframe을 표시하고 있다.
이를 Google Looker Studio 임베드로 교체한다.

---

## 사전 조건 (개발자가 먼저 처리)

Codex 작업 전에 아래 Looker Studio 설정이 완료되어 있어야 한다.

1. [lookerstudio.google.com](https://lookerstudio.google.com) 접속
2. 새 보고서 생성 → 데이터 소스: **Google Analytics** → GA4 속성 선택 (ohmt.site)
3. 원하는 차트/지표 구성 후 저장
4. 우상단 **공유** → **보고서 게시** → "링크가 있는 모든 사용자가 볼 수 있음" 설정
5. **파일** → **보고서 삽입** → iframe 코드에서 `src` URL 복사
   - URL 형식: `https://lookerstudio.google.com/embed/reporting/XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX/page/XXXXX`
6. 복사한 URL을 `.env.local` 및 Vercel 환경변수에 추가:
   ```
   NEXT_PUBLIC_LOOKER_STUDIO_URL=https://lookerstudio.google.com/embed/reporting/...
   ```

---

## Codex 작업 내용

### 1. `src/app/admin/analytics/page.tsx` 수정

기존 Umami iframe을 Looker Studio iframe으로 교체한다.

**요구사항:**
- `NEXT_PUBLIC_LOOKER_STUDIO_URL` 환경변수 값을 iframe src로 사용
- 환경변수가 없을 경우 설정 안내 UI 표시 (에러 없이 graceful하게 처리)
- iframe 높이: `calc(100vh - 120px)` 유지
- `loading="lazy"` 유지
- `allowFullScreen` 속성 추가 (Looker Studio 권장)

**환경변수 미설정 시 안내 UI 예시:**
```
[아이콘] Looker Studio 연결 필요
NEXT_PUBLIC_LOOKER_STUDIO_URL 환경변수를 설정해주세요.
설정 방법은 docs/task-analytics-looker-studio-codex.md를 참고하세요.
[GA4 바로가기 버튼] → https://analytics.google.com
```

### 2. 참고 파일

- 기존 파일: `src/app/admin/analytics/page.tsx`
- 레이아웃 참고: `src/app/admin/_components/layout/AdminShell.tsx`

---

## 완료 기준

- [ ] `NEXT_PUBLIC_LOOKER_STUDIO_URL`이 설정된 경우 Looker Studio 리포트가 iframe으로 표시됨
- [ ] 환경변수 미설정 시 에러 없이 설정 안내 메시지가 표시됨
- [ ] `npx tsc --noEmit` 통과
- [ ] Umami 관련 코드가 analytics 페이지에서 제거됨 (layout.tsx의 Umami 스크립트는 건드리지 않음)
