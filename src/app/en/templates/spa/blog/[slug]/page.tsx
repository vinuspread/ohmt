import BlogPostFull from "./BlogPostFull";

// Sample detail page - every blog card on /blog links to this same sample
// post regardless of slug, so this route intentionally ignores the slug
// param rather than resolving per-post content.
export default function BlogPostPage() {
  return <BlogPostFull />;
}
