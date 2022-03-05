import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Topbar from '../components/topbar'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Rubik&display=swap');
        </style> 
      </Head>      
      <Topbar />
    </Layout>
  )
}
