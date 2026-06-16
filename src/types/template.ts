export type TemplateStatus = "uploaded" | "draft" | "published" | "archived";

export interface Template {
  id: string;
  slug: string;
  name_en: string;
  name_ko: string | null;
  category: string;
  description_en: string | null;
  description_ko: string | null;
  thumbnail_url: string | null;
  price: number;
  status: TemplateStatus;
  sort_order: number;
  is_featured: boolean;
  tags: string[];
  created_at: string;
  updated_at: string;
}

export type OrderStatus = "pending" | "paid" | "cancelled";

export interface Order {
  id: string;
  template_id: string | null;
  template_slug: string;
  customer_email: string;
  customer_name: string | null;
  amount: number;
  status: OrderStatus;
  note: string | null;
  created_at: string;
}
