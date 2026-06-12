export interface DocPage {
  slug: string;
  title: string;
  icon: string;
  description: string;
  content: {
    type: "heading" | "text" | "list" | "code" | "quote" | "callout";
    value: string;
    variant?: "h2" | "h3";
    items?: string[];
    language?: string;
  }[];
  parent?: string;
  order: number;
}

export const docPages: DocPage[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    icon: "Rocket",
    description: "Set up your workspace and start collaborating in minutes.",
    order: 1,
    content: [
      { type: "heading", value: "Welcome to the Docs", variant: "h2" },
      { type: "text", value: "This documentation template gives you a clean, distraction-free space to write and organize your knowledge. Think of it as your team's second brain — structured, searchable, and always up to date." },
      { type: "callout", value: "Everything you see here is a page. Pages can nest inside other pages, just like folders. Try creating a sub-page under any parent." },
      { type: "heading", value: "Quick Start", variant: "h3" },
      { type: "text", value: "To begin, create your first workspace. A workspace is the top-level container for all your docs, wikis, and projects. You can have multiple workspaces for different teams or clients." },
      { type: "list", value: "", items: ["Click 'New Workspace' in the sidebar", "Give it a name and optional description", "Invite your team members by email", "Start creating pages inside your workspace"] },
      { type: "heading", value: "System Requirements", variant: "h3" },
      { type: "list", value: "", items: ["Modern web browser (Chrome 90+, Firefox 88+, Safari 14+)", "Internet connection for real-time sync", "Screen resolution of 1024px or wider recommended"] },
    ],
  },
  {
    slug: "creating-pages",
    title: "Creating Pages",
    icon: "FileText",
    description: "Learn how to create, nest, and organize your documentation pages.",
    order: 2,
    parent: "getting-started",
    content: [
      { type: "heading", value: "Page Basics", variant: "h2" },
      { type: "text", value: "Pages are the fundamental building block of your documentation. Each page can contain rich text, code blocks, images, and more. You can nest pages up to five levels deep to create a clear hierarchy." },
      { type: "quote", value: "A well-structured doc is like a well-organized desk — everything has its place, and nothing is lost." },
      { type: "heading", value: "Creating a New Page", variant: "h3" },
      { type: "text", value: "Click the '+' icon next to any page in the sidebar, or use the quick-create command palette with Cmd+P. Give your page a title and start typing — it's that simple." },
      { type: "code", value: "# Page title — use short, descriptive names\n## Sections — break content into digestible chunks\n\nUse Markdown shortcuts to format as you type:\n- **bold** for emphasis\n- `code` for inline references\n- ``` for code blocks", language: "markdown" },
      { type: "heading", value: "Page Properties", variant: "h3" },
      { type: "text", value: "Every page has metadata properties you can set: status, assignee, priority, and custom fields. Use properties to track progress, organize by category, or filter your doc tree." },
      { type: "list", value: "", items: ["Status: Draft, In Review, Published, Archived", "Assignee: Team member responsible for the page", "Tags: Add multiple tags for cross-referencing", "Created/Updated: Auto-tracked timestamps"] },
    ],
  },
  {
    slug: "editor-guide",
    title: "Editor Guide",
    icon: "Keyboard",
    description: "Master the editor with shortcuts, formatting, and slash commands.",
    order: 3,
    parent: "getting-started",
    content: [
      { type: "heading", value: "The Slash Command", variant: "h2" },
      { type: "text", value: "Type '/' anywhere in the editor to open the command menu. This is your fastest path to inserting any block type — headings, lists, code blocks, dividers, and more." },
      { type: "code", value: "/heading 1    — Large section title\n/heading 2    — Subsection title\n/heading 3    — Group title\n/bullet      — Bulleted list\n/number      — Numbered list\n/todo        — Checkbox list\n/code        — Code block with syntax highlighting\n/quote       — Blockquote\n/callout     — Highlighted callout box\n/divider     — Horizontal rule\n/image       — Insert an image", language: "markdown" },
      { type: "heading", value: "Keyboard Shortcuts", variant: "h3" },
      { type: "text", value: "Power users can navigate entirely by keyboard. Here are the essential shortcuts:" },
      { type: "list", value: "", items: ["Cmd+P — Quick open / search pages", "Cmd+Shift+N — New page", "Cmd+B — Bold", "Cmd+I — Italic", "Cmd+K — Insert link", "Cmd+E — Inline code", "Cmd+Z — Undo", "Cmd+Shift+Z — Redo"] },
      { type: "heading", value: "Markdown Support", variant: "h3" },
      { type: "text", value: "The editor supports Markdown-style shortcuts. Type naturally and your text will auto-format: # for heading, ** for bold, ` for inline code, and > for quotes." },
    ],
  },
  {
    slug: "collaboration",
    title: "Collaboration",
    icon: "Users",
    description: "Work together in real-time with comments, mentions, and permissions.",
    order: 4,
    content: [
      { type: "heading", value: "Real-Time Editing", variant: "h2" },
      { type: "text", value: "Multiple team members can edit the same page simultaneously. Cursors appear in different colors, showing who is typing what in real time. Changes sync instantly across all connected clients." },
      { type: "callout", value: "Tip: Use @mentions to notify specific team members. They'll receive a notification with a link to the exact page and location." },
      { type: "heading", value: "Comments & Discussions", variant: "h3" },
      { type: "text", value: "Select any text and click the comment icon to start a discussion. Comments are threaded and support rich text, mentions, and emoji reactions. Resolve threads when the discussion is complete." },
      { type: "list", value: "", items: ["Inline comments on specific text selections", "Page-level comments for general feedback", "Threaded replies for organized discussions", "Emoji reactions for quick feedback"] },
      { type: "heading", value: "Permission Levels", variant: "h3" },
      { type: "code", value: "Admin      — Full access, settings, billing\nEditor     — Create, edit, delete pages\nCommenter  — Read + comment only\nViewer     — Read only", language: "plaintext" },
    ],
  },
  {
    slug: "databases",
    title: "Databases",
    icon: "Database",
    description: "Organize information with tables, boards, and custom properties.",
    order: 5,
    content: [
      { type: "heading", value: "What is a Database?", variant: "h2" },
      { type: "text", value: "A database is a collection of pages with structured properties. Think of it as a spreadsheet where each row is a page you can open and edit. Databases can be viewed as table, board, gallery, or list." },
      { type: "heading", value: "Database Views", variant: "h3" },
      { type: "text", value: "Each database can have multiple views showing the same data in different layouts. Changes made in one view are reflected in all others." },
      { type: "list", value: "", items: ["Table View — Classic spreadsheet layout with sortable columns", "Board View — Kanban-style grouped by status or assignee", "Gallery View — Card layout with cover images", "List View — Compact chronological list"] },
      { type: "heading", value: "Property Types", variant: "h3" },
      { type: "code", value: "Text       — Free-form text\nNumber     — Numeric values with formatting\nSelect     — Single choice from options\nMulti-Select — Multiple choices\nStatus     — To Do / In Progress / Done\nDate       — Date picker with range support\nPerson     — Team member reference\nFile       — Upload or link to file\nCheckbox   — True / False\nURL        — Hyperlink\nEmail      — Email address\nPhone      — Phone number", language: "plaintext" },
    ],
  },
  {
    slug: "integrations",
    title: "Integrations",
    icon: "LinkIcon",
    description: "Connect your docs with Slack, GitHub, Figma and more.",
    order: 6,
    content: [
      { type: "heading", value: "Available Integrations", variant: "h2" },
      { type: "text", value: "Extend your documentation workspace by connecting the tools your team already uses. Integrations sync data, embed content, and automate workflows." },
      { type: "list", value: "", items: ["Slack — Get notifications and search docs from Slack", "GitHub — Link pull requests and issues to docs", "Figma — Embed designs and prototypes inline", "Google Drive — Attach Docs, Sheets, and Slides", "Jira — Sync issues and project status", "Zapier — Connect 3000+ apps with custom workflows"] },
      { type: "heading", value: "Setting Up an Integration", variant: "h3" },
      { type: "text", value: "Navigate to Settings > Integrations and click 'Connect' on any available service. You'll be guided through OAuth authentication. Once connected, use the /embed command to add content from that service." },
      { type: "quote", value: "Integrations turn your docs from a static knowledge base into a living command center for your entire operation." },
    ],
  },
  {
    slug: "templates",
    title: "Page Templates",
    icon: "ClipboardCopy",
    description: "Save and reuse page structures with custom templates.",
    order: 7,
    parent: "creating-pages",
    content: [
      { type: "heading", value: "Using Templates", variant: "h2" },
      { type: "text", value: "Templates let you create reusable page structures. When a team member creates a new page from a template, all the content blocks and properties are pre-filled, saving time and ensuring consistency." },
      { type: "heading", value: "Creating a Template", variant: "h3" },
      { type: "text", value: "Build a page with the structure you want to reuse, then open the page menu and select 'Save as Template'. Give it a name and choose which team workspaces can access it." },
      { type: "list", value: "", items: ["Meeting Notes — Agenda, attendees, action items", "Project Brief — Overview, goals, timeline, resources", "Bug Report — Environment, steps to reproduce, expected vs actual", "Weekly Review — Wins, challenges, next steps"] },
      { type: "callout", value: "Pro tip: Create a 'Templates' database to manage and share templates across your entire organization." },
    ],
  },
  {
    slug: "search",
    title: "Search & Discovery",
    icon: "Search",
    description: "Find anything instantly with powerful full-text search.",
    order: 8,
    content: [
      { type: "heading", value: "Full-Text Search", variant: "h2" },
      { type: "text", value: "Search across all pages, databases, and file content from a single search bar. Results are ranked by relevance and grouped by page. Use Cmd+P to open the quick search from anywhere." },
      { type: "heading", value: "Search Filters", variant: "h3" },
      { type: "text", value: "Narrow down results with advanced filters. Combine filters to pinpoint exactly what you need." },
      { type: "list", value: "", items: ["By page title or content body", "By database property values", "By assignee or creator", "By date range (created or updated)", "By tags or status"] },
      { type: "code", value: "Advanced search syntax:\n\"exact phrase\"   — Match exact wording\n-title:outdated  — Exclude pages with 'outdated'\nfrom:@john       — Pages created by John\nhas:todo         — Pages with unchecked todos", language: "plaintext" },
    ],
  },
  {
    slug: "shortcuts",
    title: "Keyboard Shortcuts",
    icon: "Zap",
    description: "Complete list of keyboard shortcuts for power users.",
    order: 9,
    content: [
      { type: "heading", value: "Navigation", variant: "h2" },
      { type: "code", value: "Cmd+P        — Quick open / search\nCmd+Shift+N  — New page\nCmd+[        — Go back\nCmd+]        — Go forward\nCmd+Shift+L  — Toggle dark mode\nEscape       — Close search / close menu", language: "plaintext" },
      { type: "heading", value: "Formatting", variant: "h3" },
      { type: "code", value: "Cmd+B        — Bold\nCmd+I        — Italic\nCmd+U        — Underline\nCmd+Shift+S  — Strikethrough\nCmd+K        — Insert link\nCmd+E        — Inline code\nCmd+Shift+M  — Comment", language: "plaintext" },
      { type: "heading", value: "Blocks", variant: "h3" },
      { type: "code", value: "Enter        — New block\nShift+Enter  — New line in block\nBackspace    — Delete empty block\nDrag handle  — Reorder block\nCmd+Shift+8  — Toggle bullet list\nCmd+Shift+7  — Toggle numbered list\nCmd+Shift+9  — Toggle todo list", language: "plaintext" },
    ],
  },
  {
    slug: "export",
    title: "Export & Backup",
    icon: "Package",
    description: "Export your docs to Markdown, PDF, or HTML format.",
    order: 10,
    content: [
      { type: "heading", value: "Export Options", variant: "h2" },
      { type: "text", value: "You can export individual pages or entire workspaces. Choose the format that works best for your workflow." },
      { type: "list", value: "", items: ["Markdown — Best for developers and version control (Git)", "PDF — Best for sharing with stakeholders and clients", "HTML — Best for publishing as a static site"] },
      { type: "heading", value: "Automated Backups", variant: "h3" },
      { type: "text", value: "Enable automated daily backups in Settings > Data. Backups are stored for 30 days and can be downloaded at any time. Enterprise plans include 90-day retention." },
      { type: "code", value: "# Export structure\nworkspace-export/\n├── pages/\n│   ├── getting-started.md\n│   ├── creating-pages.md\n│   └── ...\n├── assets/\n│   ├── images/\n│   └── files/\n└── export-metadata.json", language: "plaintext" },
    ],
  },
];
