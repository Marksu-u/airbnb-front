import '@/styles/globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp

