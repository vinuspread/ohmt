# OHMT Medusa 백엔드

OHMT017-multi-shop 템플릿의 Medusa.js v2 백엔드입니다.

## 요구사항

- Node.js v20+
- PostgreSQL 14+

## 설치

```bash
npm install
createdb ohmt_medusa
cp .env.example .env
# .env 파일에 DATABASE_URL 등 설정
npx medusa db:migrate
npx medusa user -e admin@ohmt.site -p admin1234
npm run dev
```

## Admin 접속

http://localhost:9000/app

## 초기 설정

1. Settings > Regions > Add Region
   - Name: 한국
   - Currency: KRW (Korean Won)
   - Countries: South Korea (KR)
2. Settings > API Key Management > Create Publishable Key 생성
3. 생성된 Key를 프론트엔드 `.env.local`에 입력

## 시드 데이터 실행

```bash
# 서버 실행 중인 상태에서
npx ts-node src/scripts/seed-korea.ts
```

## API 주요 엔드포인트

| 경로 | 설명 |
|------|------|
| GET /store/products | 상품 목록 |
| GET /store/products/:id | 상품 상세 |
| GET /store/product-categories | 카테고리 |
| POST /store/carts | 장바구니 생성 |
| POST /store/carts/:id/line-items | 아이템 추가 |
| DELETE /store/carts/:id/line-items/:item_id | 아이템 삭제 |

## 향후 결제 연동 TODO

- [ ] Toss Payments 플러그인 설치: `@medusajs/payment-toss` (또는 커스텀 Payment Provider)
- [ ] PortOne 연동 시 `@medusajs/payment-portone` 검토
- [ ] shipping option 설정 (무료 배송, 조건부 무료)
- [ ] 이메일 알림 (order confirmed) 템플릿 연결
- [ ] 재고 관리 알림 설정
- [ ] 쿠폰/할인 코드 (Promotion 모듈)
