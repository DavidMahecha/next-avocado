import CartProvider from 'context/CartContext'
import type { AppProps, NextWebVitalsMetric } from 'next/app'

import 'semantic-ui-css/semantic.min.css'
import '../global.css'

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}
