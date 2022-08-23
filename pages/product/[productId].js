import { useRouter } from 'next/router';
function ProductInfo() {
  const router = useRouter()
    const productId = router.query.productId
    return <h1>Info about product {productId}</h1>
  }
  export default ProductInfo