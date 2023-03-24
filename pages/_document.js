import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html className='flex flex-col w-full justify-center items-center' lang="en">
      <Head>
        {/* No fallback fonts */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"  />
      </Head>
      <body className=' w-full max-w-[1500px]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
