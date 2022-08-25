import { useRouter } from "next/router"

function Docs() {
    const router = useRouter()
    const {params =[]} = router.query
    console.log(params)
    if(params.length === 2){
        return(
            <h2>Viweing docs of {params[0]} sub-heading of {params[1]}</h2>
        )
    }else if(params.length === 1){
        return(
            <h2>Viweing Docs of {params[0]}</h2>
        )
    }
    return <h1>Welcome to The Docs Homepage</h1>
}
export default Docs