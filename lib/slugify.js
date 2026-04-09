/** Normalize API fields (string | string[] | number | null) to a single string before slugging. */
function toSlugInput(value) {
  if (value == null || value === "") return "";
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) {
    return value
      .map((item) => toSlugInput(item))
      .filter(Boolean)
      .join(" ");
  }
  return "";
}

/**
 * Extract the blog slug segment from an API `link` (absolute or relative) for `/blog/:id/:title`.
 */
export function slugFromBlogLink(link, id) {
  if (!link || id == null || id === "") return "";
  const idStr = String(id);
  try {
    const raw = String(link).trim();
    let pathOnly = "";
    if (raw.includes("://")) {
      pathOnly = new URL(raw).pathname;
    } else {
      pathOnly = raw.split("?")[0].split("#")[0];
      if (!pathOnly.startsWith("/")) pathOnly = `/${pathOnly}`;
    }
    const esc = idStr.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`/blog/${esc}/([^/?#]+)`);
    const m = pathOnly.match(re);
    return m ? decodeURIComponent(m[1]) : "";
  } catch {
    return "";
  }
}

function slugify(title) {
  const raw = toSlugInput(title);
  if (!raw) return "";
  const out = raw
    .toLowerCase()
    .replace(/[^\w\s,-]/g, "")
    .replace(/[\s,]+/g, "-")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");
  return out || "";
}

export default slugify;
