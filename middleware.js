import { NextResponse } from "next/server";

// ✅ نفس الصفحات اللي في الـ sitemap
const VALID_ROUTES = new Set([
  "/",
  "/about-us",
  "/contact-us",
  "/menu-gallery",
  "/menu",
  "/blog",
  "/gallery",
  "/kids-menu",
  "/roast-menu",
  "/ramadan-iftar-menu-milton-keynes",
  "/booking",
  "/store",
  "/terms-and-conditions",
  "/privacy-policy-2",
  "/refund-policy",
  "/services",
  "/afternoon-tea-menu",
  "/all-blogs",
  "/afternoon-tea-booking",
  "/eid-al-adha-dinner-menu-milton-keynes",
  // الصفحات الإضافية الموجودة في الـ folder structure
  "/christmas-menu",
  "/checkout",
  "/payment",
  "/shipping-cart",
  "/gift-cards",
  "/CreateGiftPage",
  "/portfolio",
  "/become-a-member",
  "/free-coffee",
]);

// ✅ Dynamic routes prefixes
const DYNAMIC_PREFIXES = ["/blog/"];

// ✅ Paths to exclude entirely
const EXCLUDED_PREFIXES = [
  "/_next",
  "/api",
  "/images",
  "/videos",
  "/fonts",
  "/favicon",
  "/sitemap",
  "/robots",
  "/apple-touch-icon",
  "/manifest",
];

// ✅ Bot detection (شامل)
const BOT_REGEX =
  /bot|crawl|spider|slurp|mediapartners|facebookexternalhit|whatsapp|telegram|linkedinbot|twitterbot|pinterest|googlebot|bingbot|yandex|baiduspider|duckduckbot|applebot|semrushbot|ahrefsbot|mj12bot|dotbot|petalbot|seznambot|sogou|exabot|gptbot|chatgpt|perplexity|claude|anthropic|ccbot|google-extended|bytespider|amazonbot|lighthouse|chrome-lighthouse|pagespeed/i;

function isBot(userAgent) {
  if (!userAgent) return true;
  return BOT_REGEX.test(userAgent);
}

function isValidRoute(pathname) {
  const normalizedPath =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  if (VALID_ROUTES.has(normalizedPath)) return true;

  if (DYNAMIC_PREFIXES.some((prefix) => normalizedPath.startsWith(prefix))) {
    return true;
  }

  return false;
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // ✅ تجاهل الـ assets والـ API routes
  if (
    EXCLUDED_PREFIXES.some((prefix) => pathname.startsWith(prefix)) ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // ✅ لو الصفحة موجودة → كمل عادي
  if (isValidRoute(pathname)) {
    return NextResponse.next();
  }

  const userAgent = request.headers.get("user-agent") || "";

  // ✅ لو bot → سيبه يشوف صفحة 404 الحقيقية (Next.js هيرجع 404 status)
  if (isBot(userAgent)) {
    return NextResponse.next();
  }

  // ✅ لو user حقيقي → redirect صامت لـ /booking
  const bookingUrl = new URL("/booking", request.url);
  bookingUrl.searchParams.set("ref", "404");
  bookingUrl.searchParams.set("from", pathname);

  const response = NextResponse.redirect(bookingUrl, 307);

  // ✅ متخليش الـ bots تتبع الـ redirect ده لو شافته
  response.headers.set("X-Robots-Tag", "noindex, nofollow");

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images|videos|fonts|sitemap.xml|robots.txt|manifest.json).*)",
  ],
};
