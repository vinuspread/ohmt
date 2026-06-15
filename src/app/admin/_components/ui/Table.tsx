import type { ReactNode } from "react";
import { EmptyState } from "./EmptyState";

export interface Column<T> {
  key: string;
  header: string;
  width?: string;
  render: (row: T) => ReactNode;
}

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  emptyMessage?: string;
}

export function Table<T>({ columns, data, emptyMessage = "데이터가 없습니다" }: TableProps<T>) {
  return (
    <div className="overflow-x-auto bg-white border border-zinc-200 rounded-xl">
      <table className="w-full text-sm">
        <thead className="bg-zinc-50 border-b border-zinc-200">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider"
                style={column.width ? { width: column.width } : undefined}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length}>
                <EmptyState title={emptyMessage} />
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors last:border-b-0">
                {columns.map((column) => (
                  <td key={column.key} className="px-4 py-3 text-zinc-700">
                    {column.render(row)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
