# Sneaker 템플릿 감사 및 개선사항

**점검 날짜**: 2026-05-25  
**심각도**: 🔴 높음 (거의 모든 네비게이션 링크 깨짐)

---

## 문제점

### 1. 경로 프리픽스 누락 (심각)

#### Header.tsx (line 39)
```tsx
// ❌ 현재 (잘못된 코드)
href={item === 'Shop All' ? '/shop-all' : `/${item.toLowerCase().replace(' ', '-')}`}

// 결과:
// - /shop-all ❌ (필요: /sneaker/shop-all)
// - /new-drops ❌ (존재하지 않음)
// - /innovations ❌ (존재하지 않음)
// - /stories ❌ (존재하지 않음)
```

#### Footer.tsx (lines 37-49)
- `/shop-all` ❌
- `/new-drops` ❌
- `/innovations` ❌
- `/archive` ❌
- `/stories` ❌
- `/about-us` ❌

### 2. 이탤릭 클래스 위반

- `page.tsx:41` - 프로모 배너 "Summer Collection"
- `product/[id]/page.tsx:189` - "ADD TO CART" 버튼

### 3. 경로 일관성 부재

실제 존재하는 페이지:
- ✅ `/sneaker/shop-all`
- ✅ `/sneaker/cart`
- ✅ `/sneaker/product/[id]`

헤더/푸터 링크는 이들만 가리켜야 함

---

## 개선 방안

### 옵션 1: 페이지 생성 (권장하지 않음)
new-drops, innovations, stories, archive, about-us 페이지 생성 필요

### 옵션 2: 링크 수정 (권장)

**Header.tsx 수정:**
```tsx
// ✅ 수정된 코드
const navItems = [
  { label: 'Shop All', href: '/sneaker/shop-all' },
  { label: 'Cart', href: '/sneaker/cart' }
];

{navItems.map((item) => (
  <Link key={item.label} href={item.href}>
    {item.label}
  </Link>
))}
```

**Footer.tsx 수정:**
```tsx
// Shop 섹션
<li><Link href="/sneaker/shop-all">Shop All</Link></li>
<li><Link href="/sneaker/cart">Cart</Link></li>

// 나머지는 # 또는 제거
<li><a href="#" className="...">New Drops</a></li>
```

### 이탤릭 제거

```tsx
// page.tsx:41 - 프로모 배너 h3
<h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
  Summer Collection
</h3>

// product/[id]/page.tsx:189 - 버튼
<Link href="/sneaker/cart" className="w-full py-8 border border-black ...">
  Add to Cart
</Link>
```

---

## 체크리스트

- [ ] Header.tsx 링크 경로 프리픽스 추가
- [ ] Footer.tsx 링크 경로 프리픽스 추가
- [ ] page.tsx:41 이탤릭 제거
- [ ] product/[id]/page.tsx:189 이탤릭 제거
- [ ] 로컬에서 모든 링크 테스트
