import Head from 'next/head'

export const siteTitle = 'CleanApp'

export default function Layout({ children }) {
    return (
        <>
        <Head>
          <link rel="icon" href="/favicon.ico" />          
        </Head>        
        <main>{children}</main>        
        </>
    )
}
