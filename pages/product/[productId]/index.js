import Link from 'next/link';
import { useRouter } from 'next/router';
function ProductInfo() {
  const router = useRouter()
    const productId = router.query.productId
    return (
          <>
            <h1>Info about product {productId}</h1>
            <h3>
              <Link href='/product'><a>Back</a></Link>
            </h3>
          </>
      )
  }
  export default ProductInfo