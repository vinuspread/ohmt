"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useMemo } from "react";
import { Rocket, FileText, Keyboard, Users, Database, LinkIcon, ClipboardCopy, Search, Zap, Package, ChevronRight } from "lucide-react";
import { docPages, DocPage } from "../data/pages";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Rocket, FileText, Keyboard, Users, Database, LinkIcon, ClipboardCopy, Search, Zap, Package,
};

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 9.5L13 13M11 5.5C11 8.53757 8.53757 11 5.5 11C2.46243 11 0 8.53757 0 5.5C0 2.46243 2.46243 0 5.5 0C8.53757 0 11 2.46243 11 5.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

interface TreeNode {
  page: DocPage;
  children: TreeNode[];
}

function buildTree(pages: DocPage[]): TreeNode[] {
  const roots: TreeNode[] = [];
  const map = new Map<string, TreeNode>();

  for (const page of pages) {
    map.set(page.slug, { page, children: [] });
  }

  for (const page of pages) {
    const node = map.get(page.slug)!;
    if (page.parent) {
      const parent = map.get(page.parent);
      if (parent) {
        parent.children.push(node);
      } else {
        roots.push(node);
      }
    } else {
      roots.push(node);
    }
  }

  const sortPages = (nodes: TreeNode[]): TreeNode[] => {
    return nodes.sort((a, b) => a.page.order - b.page.order);
  };

  const sortRecursive = (nodes: TreeNode[]): TreeNode[] => {
    for (const node of nodes) {
      node.children = sortRecursive(node.children);
    }
    return sortPages(nodes);
  };

  return sortRecursive(roots);
}

function PageTreeItem({ node, depth, onNavigate }: { node: TreeNode; depth: number; onNavigate: () => void }) {
  const pathname = usePathname();
  const slug = node.page.slug;
  const isActive = pathname === `/en/templates/OHMT014-docs-EN/${slug}` || pathname === `/en/templates/OHMT014-docs-EN`;
  const [expanded, setExpanded] = useState(true);

  const hasChildren = node.children.length > 0;
  const Icon = iconMap[node.page.icon];
  const isRoot = depth === 0;

  return (
    <div className="relative">
      {depth > 0 && (
        <div className="absolute left-[18px] top-0 bottom-0 w-px bg-[var(--color-border)]" />
      )}
      <Link
        href={`/en/templates/OHMT014-docs-EN/${slug}`}
        onClick={onNavigate}
        className={`flex items-center gap-1.5 px-2 py-2 rounded-md transition-colors duration-150 relative ${
          isRoot ? "text-sm" : "text-[13px]"
        } ${
          isActive
            ? "text-[var(--color-text)] font-semibold"
            : isRoot
              ? "text-[var(--color-text)] font-medium"
              : "text-[var(--color-text-muted)]"
        }`}
        style={{ paddingLeft: `${12 + depth * 20}px` }}
      >
        {isRoot && Icon ? <Icon size={14} className="flex-shrink-0" /> : <span className="w-4 flex-shrink-0" />}
        <span className="flex-1 truncate">{node.page.title}</span>
        {hasChildren && (
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setExpanded(!expanded); }}
            className="flex-shrink-0 w-4 h-4 flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
          >
            <ChevronRight size={12} className={`transition-transform duration-150 ${expanded ? 'rotate-90' : ''}`} />
          </button>
        )}
      </Link>
      {hasChildren && expanded && (
        <div>
          {node.children.map((child) => (
            <PageTreeItem key={child.page.slug} node={child} depth={depth + 1} onNavigate={onNavigate} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const [searchQuery, setSearchQuery] = useState("");
  const tree = useMemo(() => buildTree(docPages), []);

  const filteredTree = useMemo(() => {
    if (!searchQuery.trim()) return tree;
    const q = searchQuery.toLowerCase();
    const matches = (page: DocPage) =>
      page.title.toLowerCase().includes(q) ||
      page.description.toLowerCase().includes(q);
    const filterRecursive = (nodes: TreeNode[]): TreeNode[] => {
      return nodes.reduce<TreeNode[]>((acc, node) => {
        const children = filterRecursive(node.children);
        if (matches(node.page) || children.length > 0) {
          acc.push({ ...node, children });
        }
        return acc;
      }, []);
    };
    return filterRecursive(tree);
  }, [tree, searchQuery]);

  const handleNav = () => {
    onNavigate?.();
  };

  return (
    <aside className="w-[260px] flex-shrink-0 h-screen border-r border-[var(--color-border)] flex flex-col overflow-hidden bg-[var(--color-bg)]">
      <div className="px-4 pt-4 pb-2">
        <Link href="/en/templates/OHMT014-docs-EN" onClick={handleNav} className="flex items-center gap-2 px-2 py-2 text-sm font-bold text-[var(--color-text)] rounded-md transition-colors duration-150">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M4 5H12M4 8H12M4 11H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span>Docs Home</span>
        </Link>
      </div>

      <div className="px-4 pb-2">
        <div className="relative">
          <div className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] pointer-events-none">
            <SearchIcon />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search pages..."
            className="w-full pl-8 pr-3 py-1.5 text-sm bg-transparent border border-[var(--color-border)] rounded-md text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
          />
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 pb-4">
        {filteredTree.map((node, index) => (
          <div key={node.page.slug}>
            {index > 0 && <div className="h-px bg-[var(--color-border)] mx-2 my-2" />}
            <PageTreeItem node={node} depth={0} onNavigate={handleNav} />
          </div>
        ))}
        {filteredTree.length === 0 && searchQuery && (
          <div className="px-2 py-8 text-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-2 text-[var(--color-text-muted)]">
              <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M16.5 16.5L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <p className="text-sm text-[var(--color-text-muted)]">No results for &ldquo;{searchQuery}&rdquo;</p>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">Try a different search term</p>
          </div>
        )}
        {filteredTree.length === 0 && !searchQuery && (
          <div className="px-2 py-8 text-center">
            <p className="text-sm text-[var(--color-text-muted)]">No pages found</p>
          </div>
        )}
      </nav>

      <div className="px-3 py-3 border-t border-[var(--color-border)]">
        <Link
          href="/en"
          onClick={handleNav}
          className="flex items-center gap-2 px-2 py-1.5 text-xs text-[var(--color-text-muted)] rounded-md transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 2L3 8M3 4V8H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Templates
        </Link>
      </div>
    </aside>
  );
}
