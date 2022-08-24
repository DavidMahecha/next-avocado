import DB from '@database'
import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'
import type { GetStaticPaths, GetStaticProps } from 'next'

type Props = { product: TProduct }

export const getStaticPaths: GetStaticPaths = async () => {
  const db = new DB()
  const avos = await db.getAll()

  const paths = avos.map(({ id }) => ({ params: { id } }))

  return {
    // Statically generate all paths
    paths,
    // Display 404 for everything else
    fallback: false,
  }
}

// This also gets called at build time
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const db = new DB()

  const id = params?.id
  const avo = await db.getById(id as string)

  // Pass post data to the page via props
  return { props: { product: avo! } }
}

const ProductPage = ({ product }: Props) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
