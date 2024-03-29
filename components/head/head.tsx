import NextHead from 'next/head';

const defaultDescription = 'LP';
const iconPath = '/brand/icon/';

const Head = (props: { title?: string, description?: string }) => (
  <NextHead>
    <meta charSet="utf-8" />
    <title>{props.title || 'LP'}</title>

    <meta name="description" content={props.description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:url" content="https://lukeporupski.com" />
    <meta property="og:title" content={props.title || 'Luke Porupski'} />

    <link href="/fonts/trajan.otf" rel="preload" as="font" />
  
    <link rel="icon" href={iconPath + 'favicon.ico'} />
    <link rel="apple-touch-icon" sizes="152x152" href={iconPath + 'apple-touch-icon.png'} />
    <link rel="shortcut icon" type="image/png" sizes="32x32" href={iconPath + 'favicon-32x32.png'} />
    <link rel="shortcut icon" type="image/png" sizes="16x16" href={iconPath + 'favicon-16x16.png'} />
    <link rel="icon" href={iconPath + 'favicon.ico'} type="image/x-icon" />
  </NextHead>
);

export default Head;
