// app/(pages)/menu-gallery/_components/MenuGallerySchema.jsx
import React from "react";

const SITE_URL = "https://www.nourmaison.co.uk";
const PAGE_URL = `${SITE_URL}/menu-gallery`;
const MENU_URL = `${SITE_URL}/menu`;

const GALLERY_IMAGES = [
    {
        url: `${SITE_URL}/images/menu-brunch-coffee.webp`,
        name: "Nour Maison Brunch & Coffee Menu",
        description:
            "Halal brunch and specialty coffee menu at Nour Maison Milton Keynes",
        category: "Brunch & Coffee",
    },
    {
        url: `${SITE_URL}/images/menu-food.webp`,
        name: "Nour Maison Food Menu",
        description:
            "Halal French and Middle Eastern food menu at Nour Maison Milton Keynes",
        category: "Food & Mains",
    },
    {
        url: `${SITE_URL}/images/menu-dessert.webp`,
        name: "Nour Maison Dessert Menu",
        description:
            "Halal French and Middle Eastern desserts menu at Nour Maison Milton Keynes",
        category: "Desserts",
    },
];

// ✅ CollectionPage بدل WebPage (لأن دي صفحة تجميعة)
const buildCollectionPageSchema = () => ({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Menu Gallery | Nour Maison – Halal Desserts & Food in Milton Keynes",
    description:
        "Explore Nour Maison's menu gallery featuring handcrafted halal desserts, pastries, brunch, and French Middle Eastern dishes in Milton Keynes.",
    inLanguage: "en-GB",
    isPartOf: {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "Nour Maison",
        url: SITE_URL,
    },
    breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
    },
    primaryImageOfPage: {
        "@type": "ImageObject",
        url: GALLERY_IMAGES[0].url,
    },
    // ✅ يقول إن الصفحة بتحتوي على gallery + بتشاور للـ Menu الأصلية
    mainEntity: {
        "@id": `${PAGE_URL}#gallery`,
    },
    // ✅ ربط مباشر بصفحة المنيو الأساسية
    significantLink: MENU_URL,
});

const buildBreadcrumbSchema = () => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${PAGE_URL}#breadcrumb`,
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Menu",
            item: MENU_URL,
        },
        {
            "@type": "ListItem",
            position: 3,
            name: "Menu Gallery",
            item: PAGE_URL,
        },
    ],
});

// ✅ ImageGallery محسّنة - كل صورة بتشاور للـ Menu
const buildImageGallerySchema = () => ({
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "@id": `${PAGE_URL}#gallery`,
    url: PAGE_URL,
    name: "Nour Maison Menu Gallery",
    description:
        "Visual gallery of Nour Maison's halal French and Middle Eastern menu collections in Milton Keynes — brunch, food, and desserts.",
    inLanguage: "en-GB",
    // ✅ كل صورة فيها تفاصيل أكتر + ربط بالمنيو
    image: GALLERY_IMAGES.map((img, index) => ({
        "@type": "ImageObject",
        "@id": `${PAGE_URL}#image-${index + 1}`,
        contentUrl: img.url,
        url: img.url,
        name: img.name,
        description: img.description,
        caption: img.name,
        representativeOfPage: index === 0,
        // ✅ كل صورة بتعبر عن جزء من المنيو
        isPartOf: {
            "@type": "Menu",
            "@id": `${MENU_URL}#menu`,
            name: "Nour Maison Full Menu",
            url: MENU_URL,
        },
        // ✅ كل صورة عندها category تخصها
        about: {
            "@type": "MenuSection",
            name: img.category,
        },
        creator: {
            "@type": "Restaurant",
            "@id": `${SITE_URL}/#restaurant`,
            name: "Nour Maison",
        },
    })),
});

// ✅ Restaurant Schema - يشاور للـ Menu الأصلية بدل ما يحاول يعمل menu data في الـ gallery page
const buildRestaurantSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE_URL}/#restaurant`,
    name: "Nour Maison",
    url: SITE_URL,
    telephone: "+441908772177",
    servesCuisine: [
        "French",
        "Middle Eastern",
        "Mediterranean",
        "Halal",
        "Fusion",
    ],
    priceRange: "££",
    acceptsReservations: true,
    image: GALLERY_IMAGES.map((img) => img.url),
    address: {
        "@type": "PostalAddress",
        streetAddress: "149 Grafton Gate",
        addressLocality: "Milton Keynes",
        addressRegion: "Buckinghamshire",
        postalCode: "MK9 1AE",
        addressCountry: "GB",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: "52.0406",
        longitude: "-0.7594",
    },
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.7",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "850",
        reviewCount: "850",
    },
    // ✅ ربط للـ Menu الأصلية في /menu
    hasMenu: {
        "@type": "Menu",
        "@id": `${MENU_URL}#menu`,
        name: "Nour Maison Full Menu",
        url: MENU_URL,
        description:
            "Halal French and Middle Eastern fusion menu featuring brunch, mains, desserts, and specialty drinks.",
        inLanguage: "en-GB",
        // ✅ نشاور إن دي عندها صور تفصيلية في الـ gallery
        image: GALLERY_IMAGES.map((img) => ({
            "@type": "ImageObject",
            url: img.url,
            name: img.name,
        })),
    },
});

const MenuGallerySchema = () => {
    const schemas = [
        buildCollectionPageSchema(),
        buildBreadcrumbSchema(),
        buildImageGallerySchema(),
        buildRestaurantSchema(),
    ];

    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={`menu-gallery-schema-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
};

export default MenuGallerySchema;