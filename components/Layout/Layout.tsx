import Navbar from '@components/Navbar'
import type { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>This is the footer</footer>

      <style jsx>{`
        div {
          background-color: salmon;
        }
      `}</style>
    </div>
  )
}

export default Layout
