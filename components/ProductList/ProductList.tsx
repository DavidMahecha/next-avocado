import { Card, Image as ImageCard } from 'semantic-ui-react'
import Link from 'next/link'
import Image from 'next/image'

type ProductListProps = {
  products: TProduct[]
}

const ProductList = ({ products }: ProductListProps) => (
  <Card.Group itemsPerRow={2} stackable>
    {products.map(({ name, id, price, image }) => (
      <Link key={id} href={`/product/${id}`} passHref>
        <Card as="a">
          <ImageCard>
            <Image src={image} width={333} height={333} />
          </ImageCard>
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>
          </Card.Content>
        </Card>
      </Link>
    ))}
  </Card.Group>
)

export default ProductList
