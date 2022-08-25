import DB from '@database'
import Link from 'next/link'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
import type { GetStaticProps } from 'next'

type Props = { productList: TProduct[] }

export const getStaticProps: GetStaticProps<Props> = async () => {
  const db = new DB()
  const productList = await db.getAll()

  return {
    props: {
      productList,
    },
  }
}

const HomePage = ({ productList }: Props) => {
  return (
    <Layout>
      <KawaiiHeader />
      <section>
        <Link href="/yes-or-no">¿Deberia comer un avo hoy?</Link>
      </section>
      <ProductList products={productList} />
      <style jsx>{`
        section {
          text-align: center;
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default HomePage
