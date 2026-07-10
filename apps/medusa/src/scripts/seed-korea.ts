import Medusa from "@medusajs/js-sdk";

const sdk = new Medusa({
  baseUrl: "http://localhost:9000",
  auth: { type: "session" },
});

async function seedKorea() {
  // 관리자 로그인
  await sdk.auth.login("user", "emailpass", {
    email: "admin@ohmt.site",
    password: "admin1234",
  });

  // 1. KRW 통화 추가 (없는 경우)
  // Admin UI에서 수동 설정: Settings > Regions > Add Region
  // Region name: 한국, Currency: KRW, Countries: KR

  // 2. 상품 카테고리 생성
  const categories = [
    { name: "액세서리", handle: "accessories" },
    { name: "신발", handle: "footwear" },
    { name: "여성", handle: "womens" },
    { name: "남성", handle: "mens" },
  ];

  const categoryMap: Record<string, string> = {};

  for (const cat of categories) {
    const res = await sdk.admin.productCategory.create({
      name: cat.name,
      handle: cat.handle,
      is_active: true,
      is_internal: false,
    });
    categoryMap[cat.handle] = res.product_category.id;
    console.log(`카테고리 생성: ${cat.name} (${res.product_category.id})`);
  }

  // 3. 샘플 상품 생성 (10개)
  const sampleProducts = [
    {
      title: "스퀘어 선글라스",
      handle: "square-sunglasses",
      description: "미니멀한 스퀘어 프레임 선글라스에 UV400 보호 기능. 가벼운 아세테이트 소재로 하루 종일 편안하게.",
      category_handle: "accessories",
      price_krw: 29000,
      original_price_krw: 45000,
      thumbnail: "/templates/OHMT017-multi-shop/product-01.jpg",
    },
    {
      title: "테일러드 코트",
      handle: "tailored-coat",
      description: "정제된 실루엣의 테일러드 코트. 울 혼방 원단으로 따뜻하고 고급스러운 착용감을 제공합니다.",
      category_handle: "womens",
      price_krw: 98000,
      original_price_krw: 145000,
      thumbnail: "/templates/OHMT017-multi-shop/product-02.jpg",
    },
    {
      title: "레더 앵클부츠",
      handle: "leather-ankle-boots",
      description: "천연 가죽 소재의 앵클부츠. 클래식한 디자인과 견고한 내구성을 갖춘 제품입니다.",
      category_handle: "footwear",
      price_krw: 125000,
      original_price_krw: null,
      thumbnail: "/templates/OHMT017-multi-shop/product-03.jpg",
    },
    {
      title: "크롭 재킷",
      handle: "crop-jacket",
      description: "트렌디한 크롭 실루엣의 재킷. 다양한 스타일링에 활용 가능한 베이직 아이템.",
      category_handle: "womens",
      price_krw: 67000,
      original_price_krw: 89000,
      thumbnail: "/templates/OHMT017-multi-shop/product-04.jpg",
    },
    {
      title: "슬림 치노",
      handle: "slim-chino",
      description: "편안한 착용감의 슬림핏 치노 팬츠. 캐주얼과 세미포멀 모두 어울리는 활용도 높은 아이템.",
      category_handle: "mens",
      price_krw: 45000,
      original_price_krw: null,
      thumbnail: "/templates/OHMT017-multi-shop/product-05.jpg",
    },
    {
      title: "캔버스 스니커즈",
      handle: "canvas-sneakers",
      description: "가볍고 통기성 좋은 캔버스 스니커즈. 데일리 착용에 최적화된 디자인.",
      category_handle: "footwear",
      price_krw: 38000,
      original_price_krw: 52000,
      thumbnail: "/templates/OHMT017-multi-shop/product-06.jpg",
    },
    {
      title: "실버 체인 네크리스",
      handle: "silver-chain-necklace",
      description: "925 실버 소재의 체인 네크리스. 미니멀한 디자인으로 어떤 룩에도 매치 가능.",
      category_handle: "accessories",
      price_krw: 22000,
      original_price_krw: null,
      thumbnail: "/templates/OHMT017-multi-shop/product-07.jpg",
    },
    {
      title: "오버사이즈 후드티",
      handle: "oversized-hoodie",
      description: "루즈한 핏의 오버사이즈 후드티. 부드러운 원단과 넉넉한 실루엣으로 편안함을 추구.",
      category_handle: "mens",
      price_krw: 55000,
      original_price_krw: 72000,
      thumbnail: "/templates/OHMT017-multi-shop/product-08.jpg",
    },
    {
      title: "플로랄 드레스",
      handle: "floral-dress",
      description: "봄여름 시즌에 어울리는 플로랄 패턴 드레스. 가볍고 시원한 원단 사용.",
      category_handle: "womens",
      price_krw: 59000,
      original_price_krw: 78000,
      thumbnail: "/templates/OHMT017-multi-shop/product-09.jpg",
    },
    {
      title: "레더 벨트",
      handle: "leather-belt",
      description: "진짜 가죽으로 제작된 클래식 벨트. 오래 사용할수록 자연스러운 빈티지 감성이 살아납니다.",
      category_handle: "accessories",
      price_krw: 35000,
      original_price_krw: null,
      thumbnail: "/templates/OHMT017-multi-shop/product-10.jpg",
    },
  ];

  // 주의: Medusa v2에서 가격은 variants에 포함
  // region_id는 Admin UI에서 KRW 리전 생성 후 확인 필요
  // 여기서는 구조만 예시로 작성 (실제 region_id는 환경변수로 전달)
  const REGION_ID = process.env.MEDUSA_KRW_REGION_ID ?? "";

  for (const p of sampleProducts) {
    try {
      const product = await sdk.admin.product.create({
        title: p.title,
        handle: p.handle,
        description: p.description,
        status: "published" as const,
        thumbnail: p.thumbnail,
        category_ids: categoryMap[p.category_handle]
          ? [{ id: categoryMap[p.category_handle] }]
          : [],
        variants: [
          {
            title: "기본",
            inventory_quantity: 100,
            prices: [
              {
                amount: p.price_krw,
                currency_code: "krw",
                ...(REGION_ID ? { region_id: REGION_ID } : {}),
              },
              ...(p.original_price_krw
                ? [
                    {
                      amount: p.original_price_krw,
                      currency_code: "krw",
                      rules: { type: "compare_at" },
                    },
                  ]
                : []),
            ],
          },
        ],
      });
      console.log(`상품 생성: ${p.title} (${product.product.id})`);
    } catch (err) {
      console.error(`상품 생성 실패: ${p.title}`, err);
    }
  }

  console.log("\n시드 완료");
}

seedKorea().catch(console.error);
