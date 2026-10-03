export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://seeratmemories.vercel.app/#website",
        name: "SEERAT",
        alternateName: "Seerat Memories",
        url: "https://seeratmemories.vercel.app/",
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://seeratmemories.vercel.app/#business",
        name: "SEERAT",
        description:
          "SEERAT is a 3D hand and foot casting studio creating handcrafted sculptures, memory frames and personalized keepsakes.",
        url: "https://seeratmemories.vercel.app/",
        image: "https://seeratmemories.vercel.app/seerat-og.png",
        telephone: "+919625353503",

        address: {
          "@type": "PostalAddress",
          addressLocality: "Kundli",
          addressRegion: "Haryana",
          addressCountry: "IN",
        },

        areaServed: [
          {
            "@type": "City",
            name: "Delhi",
          },
          {
            "@type": "AdministrativeArea",
            name: "Delhi NCR",
          },
          {
            "@type": "City",
            name: "Sonepat",
          },
        ],

        serviceType: [
          "3D Hand Casting",
          "3D Foot Casting",
          "Couple Hand Casting",
          "Family Hand Casting",
          "Baby Hand Casting",
          "Personalized 3D Sculptures",
          "Memory Frames",
          "Memory Cabinets",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}