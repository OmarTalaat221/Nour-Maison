// app/(pages)/menu/_components/MenuSchema.jsx
import React from "react";

const SITE_URL = "https://www.nourmaison.co.uk";
const MENU_URL = `${SITE_URL}/menu`;

// تحويل allergens object إلى array للـ schema
const getAllergensList = (allergensItems) => {
    if (!allergensItems) return [];
    return Object.entries(allergensItems)
        .filter(([_, value]) => value === true)
        .map(([key]) => key);
};

const buildMenuItem = (item, categoryName) => {
    const allergens = getAllergensList(item.allergensItems);

    return {
        "@type": "MenuItem",
        name: item.name,
        description: item.description || `${item.name} - Part of our ${categoryName} menu at Nour Maison Milton Keynes`,
        ...(item.image && { image: item.image }),
        offers: {
            "@type": "Offer",
            price: typeof item.price === "number" ? item.price.toFixed(2) : String(item.price),
            priceCurrency: "GBP",
            availability: "https://schema.org/InStock",
            seller: {
                "@type": "Restaurant",
                name: "Nour Maison",
            },
        },
        suitableForDiet: "https://schema.org/HalalDiet",
        ...(allergens.length > 0 && {
            menuAddOn: allergens.map((allergen) => ({
                "@type": "MenuItem",
                name: `Contains: ${allergen}`,
            })),
        }),
    };
};

const buildMenuSchema = (menuData) => {
    return {
        "@context": "https://schema.org",
        "@type": "Menu",
        "@id": `${MENU_URL}#menu`,
        url: MENU_URL,
        name: "Nour Maison Full Menu – Halal French & Middle Eastern Cuisine",
        description:
            "Explore the full Nour Maison menu featuring halal French and Middle Eastern fusion dishes in Milton Keynes. Breakfast, brunch, mains, desserts, coffee, and specialty drinks.",
        inLanguage: "en-GB",
        provider: {
            "@type": "Restaurant",
            "@id": `${SITE_URL}/#restaurant`,
            name: "Nour Maison",
            url: SITE_URL,
            telephone: "+441908772177",
            servesCuisine: ["French", "Middle Eastern", "Mediterranean", "Halal", "Fusion"],
            priceRange: "££",
            acceptsReservations: true,
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
        },
        hasMenuSection: menuData.map((category) => ({
            "@type": "MenuSection",
            "@id": `${MENU_URL}#${category.category.toLowerCase().replace(/\s+/g, "-")}`,
            name: category.category,
            description: category.slogan || `${category.category} at Nour Maison Milton Keynes`,
            ...(category.image && { image: category.image }),
            hasMenuItem: category.items.map((item) => buildMenuItem(item, category.category)),
        })),
    };
};

const buildBreadcrumbSchema = () => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${MENU_URL}#breadcrumb`,
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
    ],
});

const buildWebPageSchema = () => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${MENU_URL}#webpage`,
    url: MENU_URL,
    name: "Menu | Nour Maison – Halal French & Middle Eastern Restaurant in Milton Keynes",
    description:
        "Discover the Nour Maison menu featuring halal French and Middle Eastern fusion brunch, mains, desserts, and specialty drinks in Milton Keynes.",
    inLanguage: "en-GB",
    isPartOf: {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "Nour Maison",
        url: SITE_URL,
    },
    breadcrumb: {
        "@id": `${MENU_URL}#breadcrumb`,
    },
    primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767447622/f76djjyilyjfpzpjmryl_puk2vj.webp",
    },
});

const MenuSchema = ({ menuData }) => {
    const schemas = [
        buildWebPageSchema(),
        buildBreadcrumbSchema(),
        buildMenuSchema(menuData),
    ];

    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={`menu-schema-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
};

export default MenuSchema;