export type TemplateStatus = "uploaded" | "draft" | "published" | "archived";
export type TemplateLang = "en" | "ko";

export interface Template {
  id: string;
  slug: string;
  lang: TemplateLang;
  template_key: string | null;
  name: string;
  category: string;
  description: string | null;
  thumbnail_url: string | null;
  price: number;
  status: TemplateStatus;
  sort_order: number;
  is_featured: boolean;
  tags: string[];
  applicable_packages: string[];
  requires_consultation: boolean;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  name: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface Faq {
  id: string;
  lang: TemplateLang;
  question: string;
  answer: string;
  sort_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface PricingPackage {
  id: string;
  lang: TemplateLang;
  slug: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  is_recommended: boolean;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export type InquiryType = "template" | "custom" | "other";
export type InquiryStatus = "new" | "in_progress" | "done" | "cancelled";

export interface Inquiry {
  id: string;
  lang: TemplateLang;
  inquiry_type: InquiryType;
  customer_name: string;
  customer_email: string;
  customer_phone: string | null;
  company: string | null;
  role: string | null;
  package_name: string | null;
  template_name: string | null;
  message: string;
  status: InquiryStatus;
  note: string | null;
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
