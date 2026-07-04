# Task: ZIP 재업로드 시 관리자 입력 설명글 보존

## 배경

템플릿 ZIP 파일을 업로드하면 `theme.json` 안의 `description` / `description_ko` 값이 Supabase `templates.description` 필드에 저장된다.

문제는 관리자가 수정 화면에서 설명글을 직접 편집한 후, 같은 템플릿의 ZIP을 다시 업로드(덮어쓰기)하면 `theme.json`의 description이 다시 덮어써진다는 것이다. 관리자가 직접 입력한 값이 최종이어야 한다.

---

## 수정 대상 파일

```
src/app/api/admin/templates/upload/route.ts
```

---

## 현재 로직 (문제 있음)

`existing && overwrite` 분기 (약 92~109번째 줄):

```ts
if (existing && overwrite) {
  const { error: updateError } = await supabase
    .from("templates")
    .update({
      name,
      category: themeJson.category ?? "uncategorized",
      description,           // ← 항상 theme.json 값으로 덮어씀
      thumbnail_url: `/templates/${slug}/og-image.jpg`,
      tags: themeJson.tags ?? [],
      ...(templateKey && { template_key: templateKey }),
    })
    .eq("slug", slug)
    .eq("lang", lang);
```

---

## 요구사항

ZIP 재업로드(overwrite) 시:

1. **기존 row에서 `description`을 먼저 조회한다.**
2. **기존 `description`이 null이 아니고 빈 문자열도 아닌 경우** → 관리자가 입력한 값으로 간주하고 덮어쓰지 않는다.
3. **기존 `description`이 null이거나 빈 문자열인 경우** → theme.json의 description으로 채운다.

---

## 구현 방법

### Step 1. 기존 row 조회 시 `description`도 함께 SELECT

현재 약 66~71번째 줄:

```ts
const { data: existing, error: lookupError } = await supabase
  .from("templates")
  .select("id")           // ← "id, description" 으로 변경
  .eq("slug", slug)
  .eq("lang", lang)
  .maybeSingle();
```

변경:

```ts
const { data: existing, error: lookupError } = await supabase
  .from("templates")
  .select("id, description")
  .eq("slug", slug)
  .eq("lang", lang)
  .maybeSingle();
```

### Step 2. overwrite update 시 description 보존 로직 추가

```ts
if (existing && overwrite) {
  // 관리자가 입력한 description이 있으면 유지, 없으면 theme.json 값 사용
  const existingDesc = (existing as { id: string; description: string | null }).description;
  const finalDescription = existingDesc && existingDesc.trim().length > 0
    ? existingDesc
    : description;

  const { error: updateError } = await supabase
    .from("templates")
    .update({
      name,
      category: themeJson.category ?? "uncategorized",
      description: finalDescription,   // ← 보존 로직 적용
      thumbnail_url: `/templates/${slug}/og-image.jpg`,
      tags: themeJson.tags ?? [],
      ...(templateKey && { template_key: templateKey }),
    })
    .eq("slug", slug)
    .eq("lang", lang);
```

---

## 주의사항

- 신규 등록(insert)은 그대로 theme.json 값을 사용한다. 변경 불필요.
- `name`, `category`, `thumbnail_url`, `tags`, `template_key`는 ZIP 재업로드 시 항상 덮어쓴다. description만 보존 대상이다.
- TypeScript 타입 오류 없이 컴파일되어야 한다.

---

## 완료 기준

- ZIP 재업로드 후 Supabase `templates.description`이 관리자 입력값을 유지하는지 확인
- 신규 업로드 시 theme.json description이 정상적으로 들어가는지 확인
