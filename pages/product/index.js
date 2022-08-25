import Link from "next/link"
import { useRouter } from "next/router"

function Product() {
    const router = useRouter()
    const handleClick =()=>{
        router.replace('/')
        console.log('moving to homepage')
    }
    return (
        <>
            <button onClick={handleClick}>Home</button>
            <h2><Link href='/product/1'>
                    <a>Product 1</a> 
                </Link>
            </h2>
            <h2><Link href='/product/2'>
                    <a>Product 2</a> 
                </Link>
            </h2>
            <h2><Link href='/product/3'>
                <a>Product 3</a> 
                </Link>
            </h2> 
        </>
        
    )
  }
  export default Product