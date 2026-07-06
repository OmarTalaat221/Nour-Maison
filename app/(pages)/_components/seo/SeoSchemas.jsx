import Script from "next/script";

const SeoSchemas = ({ schemas = [], pageId = "seo" }) => {
  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`${pageId}-schema-${index}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

export default SeoSchemas;
