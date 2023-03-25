import Head from 'next/head'
import About from '../components/about/about'
import Assignments from '../components/assignments/assignments'
import Footer from '../components/footer/footer'
import Layout, { siteTitle } from '../components/layout'
import Portfolio from '../components/portfolio/portfolio'
import Topbar from '../components/topbar/topbar'
import Welcome from '../components/welcome/welcome'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
        <style>
          @import url(`https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Rubik&display=swap`);
        </style> 
      </Head>      
      <Topbar />
      <Welcome />
      <About />
      <Assignments />
      <Portfolio />
      <Footer />
    </Layout>
  )
}
