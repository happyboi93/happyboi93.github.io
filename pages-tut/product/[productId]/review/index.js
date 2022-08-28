import Link from "next/link"
import { useRouter } from "next/router"

function Review() {
    const router = useRouter()
    const {productId, reviewId} = router.query
    console.log(router.query)
    return (
        <>
        <h2>This is the review {productId} for product {reviewId}</h2>
        <h2>
            <Link href='/product'><a>Products</a> 
            </Link>
        </h2> 
        </> 
    )
}

export default Review