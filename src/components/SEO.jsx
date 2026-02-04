import { Helmet } from "react-helmet-async";

export default function SEO() {
  const title = "SPROXX — Operational Support & Automation";
  const description =
    "Excel automation, PDF data extraction, reporting, and internal tools — delivered quickly, securely, and with minimal overhead.";
  const url = "https://sproxx.io";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="Excel automation, PDF extraction, data cleanup, operational support, business automation, reporting automation" />
      <meta name="author" content="SPROXX" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="SPROXX" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* JSON-LD Schemas */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SPROXX",
          "url": url,
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "contact@sproxx.io",
            "contactType": "Customer Service"
          }
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Will my employer find out?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. We don't use client logos, screenshots, or internal references publicly. Work is handled privately using separate tooling, and we can sign an NDA if needed. Your work stays confidential."
              }
            },
            {
              "@type": "Question",
              "name": "Do you need system access?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Usually no. We don't log into your systems. Most work is done using exports, reports, and files you provide, and we return cleaned files, automations, or tools back to you."
              }
            },
            {
              "@type": "Question",
              "name": "How fast is delivery?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most requests are completed within 24–72 hours. Larger automations may take longer, but you'll get a clear timeline and quote before we start."
              }
            },
            {
              "@type": "Question",
              "name": "What do you need from me to start?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A short description of what you want and the actual files involved. If anything is sensitive, you can redact it — otherwise we work with real business data, like professionals."
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
}
