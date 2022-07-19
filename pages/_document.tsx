import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

export default function Document() {
  return (
    <Html lang='en'>

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5cc2aa" />
        <meta name="apple-mobile-web-app-title" content="Your Cleaner" />
        <meta name="application-name" content="Your Cleaner" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="stylesheet" href="https://unicons.iconscout.com/release-pro/v4.0.0/css/thinline.css?key=ab4b9070-793f-11ec-9497-0242ac140003" />
      <Head />
      <body className='bg-[#F8F9FC] overflow-x-hidden'>
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}