import DB from '@database'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

type Props = { productList: TProduct[] }

export const getStaticProps: GetStaticProps<Props> = async () => {
  const db = new DB()
  const avos = await db.getAll()

  return {
    props: {
      productList: avos,
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
