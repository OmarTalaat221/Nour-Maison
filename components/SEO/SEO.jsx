import Head from 'next/head';

const SEO = ({
  title = 'مطعم حلال في ميلتون كينز | اسم المطعم',
  description = 'استمتع بأشهى الأكلات الحلال في قلب ميلتون كينز. زرنا الآن أو اطلب أونلاين!',
  keywords = 'مطعم حلال, أكل حلال, ميلتون كينز, Halal Restaurant Milton Keynes',
  image = '/logo.jpg',
  url = 'https://example.com'
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default SEO;