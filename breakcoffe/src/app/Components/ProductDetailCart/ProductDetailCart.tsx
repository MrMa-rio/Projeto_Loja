import { ProductInCart } from "@/app/Types/ProductFetchResp/ProductFetchResp"
import { centavosParaReais } from "@/app/Utility/ConversorMoeda/script"
import { Trash2 } from "lucide-react"
import { ChangeEvent } from "react"

interface ProductCart {
    product: ProductInCart,
    handleQuantityProduct (id:string, quantity:number): void
    handleDelete(id:string): void
}

export const ProductDetailCart = ({product,handleQuantityProduct, handleDelete}:ProductCart) =>{

    const handleQuantity = (e:ChangeEvent<HTMLSelectElement>) =>{
        handleQuantityProduct(product.id, Number(e.target.value))
    }
    
    return(
        <div className="flex gap-8 bg-white pr-4 rounded-lg">
            <img 
                src={product.image_url} 
                alt={product.name}
                className=" w-28 object-cover xl:w-64 xl:h-52 rounded-s-lg"
            />
            <div className="pt-2 pb-6 text-TextosDark2">
                <div className="flex flex-col gap-3">
                    <div className="flex w-full justify-between">
                        <h3 className="text-xl">{product.name}</h3>
                        <button onClick={() => handleDelete(product.id)} aria-label="Delete">
                            <Trash2 className="flex stroke-red-700 " />
                        </button>
                    </div>
                    <p className="text-xs w-full h-12 overflow-clip text-ellipsis">{product.description}</p>
                </div>
                <div className="flex justify-between mt-6 xl:mt-12">
                    <select value={product.quantity} onChange={handleQuantity} className="bg-secondary border border-TextosDark3 rounded-lg py-1 px-2">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <p className="font-semibold">{centavosParaReais(product.price_in_cents)}</p>
                </div>
            </div>
        </div>
    )
}