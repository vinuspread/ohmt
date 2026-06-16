export type TemplateStatus = "uploaded" | "draft" | "published" | "archived";
export type TemplateLang = "en" | "ko";

export interface Template {
  id: string;
  slug: string;
  lang: TemplateLang;
  name: string;
  category: string;
  description: string | null;
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
