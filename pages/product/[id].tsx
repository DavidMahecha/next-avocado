import { useRouter } from 'next/router';

const ProductItem = () => {
  const router = useRouter();

  return <div>This is the page {router.query.id}</div>;
};

export default ProductItem;
