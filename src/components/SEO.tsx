import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  structuredData?: object;
}

const BASE_URL = 'https://aghealthindustries.com';
const DEFAULT_OG_IMAGE = 'https://storage.googleapis.com/gpt-engineer-file-uploads/6SzKisa3IgOyBtKsbOOaAaAvbLo1/uploads/1764399405894-untitled-design-1.png';

const SEO = ({
  title = 'A.G. Health Industries - Caring for Hygiene, Caring for You',
  description = 'A.G. Health Industries manufactures premium hygiene products including diapers, face masks, sanitary pads, and toilet paper. Quality hygiene solutions for Nepal and beyond.',
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  keywords = 'hygiene products, diapers, face masks, sanitary pads, toilet paper, Nepal, health products, baby diapers, Sagun',
  structuredData,
}: SEOProps) => {
  const fullTitle = title.includes('A.G. Health') ? title : `${title} | A.G. Health Industries`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content="A.G. Health Industries" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
