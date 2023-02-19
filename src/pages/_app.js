import Header from '@/components/header/header'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}
