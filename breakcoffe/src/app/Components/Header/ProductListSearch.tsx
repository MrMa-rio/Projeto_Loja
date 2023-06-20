import { ProductFetchResponse } from "@/app/Types/ProductFetchResp/ProductFetchResp"
import { centavosParaReais } from "@/app/Utility/ConversorMoeda/script"
import { useRouter } from "next/navigation"
interface ProductFetch {
    item:ProductFetchResponse
    handleShow():void
}

export const ProductListSearch = ({item,handleShow}:ProductFetch) =>{
    const router = useRouter()
    const handleNavigate = () =>{
        router.push(`/product?id=${item.id}`)
    }
    return(
        <button  onClick={() => {handleNavigate(); handleShow()} } className="w-full text-left hover:brightness-90">
            <div className="flex gap-1 p-1 bg-secondary">
                <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-14 h-16 mini-tela:w-16"
                />
                <div className=" text-sm mini-tela:text-base">
                    <p>{item.category}</p>
                    <p className="w-full overflow-y-hidden h-5">{item.name}</p>
                    <p className="font-semibold">{centavosParaReais(item.price_in_cents)}</p>
                </div>
            </div>
        </button>
    )    
}