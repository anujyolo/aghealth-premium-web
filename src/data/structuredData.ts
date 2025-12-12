export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "A.G. Health Industries Pvt. Ltd.",
  "alternateName": "AG Health Industries",
  "url": "https://aghealthindustries.com",
  "logo": "https://storage.googleapis.com/gpt-engineer-file-uploads/6SzKisa3IgOyBtKsbOOaAaAvbLo1/uploads/1764399405894-untitled-design-1.png",
  "description": "A.G. Health Industries manufactures premium hygiene products including diapers, face masks, sanitary pads, and toilet paper in Nepal.",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kathmandu",
    "addressCountry": "NP"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "kripa.ad25@gmail.com",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61556698594648",
    "https://www.instagram.com/sagun_diapers_/",
    "https://www.linkedin.com/company/ag-health-industries-pvt-ltd/"
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "A.G. Health Industries Pvt. Ltd.",
  "image": "https://storage.googleapis.com/gpt-engineer-file-uploads/6SzKisa3IgOyBtKsbOOaAaAvbLo1/uploads/1764399405894-untitled-design-1.png",
  "description": "Premium hygiene products manufacturer in Nepal - diapers, face masks, sanitary pads, toilet paper",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kathmandu",
    "addressCountry": "Nepal"
  },
  "priceRange": "$$",
  "openingHours": "Mo-Sa 09:00-18:00"
};

export const productsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "A.G. Health Industries Products",
  "description": "Premium hygiene products manufactured in Nepal",
  "itemListElement": [
    {
      "@type": "Product",
      "name": "Sagun Baby Diapers",
      "description": "Premium quality baby diapers with superior absorption",
      "brand": {
        "@type": "Brand",
        "name": "Sagun"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "A.G. Health Industries"
      }
    },
    {
      "@type": "Product",
      "name": "Sagun Face Masks",
      "description": "High-quality protective face masks",
      "brand": {
        "@type": "Brand",
        "name": "Sagun"
      }
    },
    {
      "@type": "Product",
      "name": "Sagun Sanitary Pads",
      "description": "Comfortable and absorbent sanitary pads",
      "brand": {
        "@type": "Brand",
        "name": "Sagun"
      }
    },
    {
      "@type": "Product",
      "name": "Sagun Toilet Paper",
      "description": "Soft and durable toilet paper",
      "brand": {
        "@type": "Brand",
        "name": "Sagun"
      }
    }
  ]
};

export const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "A.G. Health Industries Blog",
  "description": "Health tips and parenting advice for pregnancy, newborn care, infant development, and toddler growth",
  "publisher": {
    "@type": "Organization",
    "name": "A.G. Health Industries",
    "logo": "https://storage.googleapis.com/gpt-engineer-file-uploads/6SzKisa3IgOyBtKsbOOaAaAvbLo1/uploads/1764399405894-untitled-design-1.png"
  }
};

export const careerSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Career Opportunities at A.G. Health Industries",
  "description": "Join our team at A.G. Health Industries - Nepal's leading hygiene products manufacturer",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "A.G. Health Industries Pvt. Ltd.",
    "sameAs": "https://aghealthindustries.com"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kathmandu",
      "addressCountry": "Nepal"
    }
  }
};
