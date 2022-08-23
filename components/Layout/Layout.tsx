import { Container } from 'semantic-ui-react'
import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'
import type { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <Container as="main" text>
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout
