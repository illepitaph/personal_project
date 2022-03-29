import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
  <html lang="en-US">
  <title>{Component.title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta charSet="utf-8"/>
    <meta name="author" content="Steve Barbaro"/>
  <link rel="icon" href="/images/favicon.ico" />
  <meta name="description" content="steve barbaro + writer + developer + photographer + editor"/>
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content={Component.pieceName}/>
  <meta name="twitter:description" content={Component.description}/>
  <meta name="twitter:image:src" content={Component.image} key="ogtitle"/>
  </Head>
  <Component {...pageProps} />
  </html>
  </>
 );
}

export default MyApp
