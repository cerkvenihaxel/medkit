import 'focus-visible'
import '@/styles/tailwind.css'
import { Footer } from '@/components/Footer'

export default function App({ Component, pageProps }) {
  return (
  <>
    <Component {...pageProps} />
    <Footer />
  </>
)}
