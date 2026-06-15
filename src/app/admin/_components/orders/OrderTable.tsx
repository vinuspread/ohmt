"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "../ui/Badge";
import { Table, type Column } from "../ui/Table";
import { Toast } from "../ui/Toast";
import type { Order, OrderStatus } from "@/types/template";

type OrderFilter = "all" | OrderStatus;
type ToastState = { message: string; type: "success" | "error" };

const filters: OrderFilter[] = ["all", "pending", "paid", "cancelled"];

export function OrderTable({ data }: { data: Order[] }) {
  const router = useRouter();
  const [filter, setFilter] = useState<OrderFilter>("all");
  const [toast, setToast] = useState<ToastState | null>(null);

  const filteredData = useMemo(() => {
    return filter === "all" ? data : data.filter((order) => order.status === filter);
  }, [data, filter]);

  const handleStatusChange = async (id: string, status: OrderStatus) => {
    const response = await fetch(`/api/admin/orders/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    if (response.ok) {
      setToast({ message: "주문 상태가 변경됐습니다.", type: "success" });
      router.refresh();
      return;
    }

    setToast({ message: "주문 상태 변경에 실패했습니다.", type: "error" });
  };

  const columns: Column<Order>[] = [
    { key: "id", header: "주문번호", render: (order) => <span className="font-mono text-xs">{order.id.slice(0, 8)}</span> },
    { key: "template_slug", header: "템플릿", render: (order) => <span className="font-mono text-xs">{order.template_slug}</span> },
    { key: "customer_email", header: "고객 이메일", render: (order) => order.customer_email },
    { key: "amount", header: "금액", render: (order) => `${order.amount.toLocaleString()}원` },
    {
      key: "status",
      header: "상태",
      render: (order) => (
        <div className="flex items-center gap-2">
          <Badge status={order.status} />
          <select
            value={order.status}
            onChange={(event) => handleStatusChange(order.id, event.target.value as OrderStatus)}
            className="text-xs border border-zinc-200 rounded px-2 py-1 bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
          >
            <option value="pending">pending</option>
            <option value="paid">paid</option>
            <option value="cancelled">cancelled</option>
          </select>
        </div>
      ),
    },
    { key: "created_at", header: "주문일", render: (order) => new Date(order.created_at).toLocaleDateString("ko-KR") },
  ];

  return (
    <div className="p-6">
      <div className="flex gap-1 bg-zinc-100 p-1 rounded-lg mb-6 w-fit">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 ${
              filter === item ? "bg-white shadow-sm text-zinc-900" : "text-zinc-500 hover:text-zinc-700"
            }`}
          >
            {item === "all" ? "전체" : item}
          </button>
        ))}
      </div>
      <Table columns={columns} data={filteredData} />
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
