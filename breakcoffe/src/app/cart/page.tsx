'use client'
import { BtnBackIcon } from "../Components/BtnBackIcon/BtnBackIcon";
import { CartOrder } from "../Components/CartOrder/CartOrder";
import { ProductDetailCart } from "../Components/ProductDetailCart/ProductDetailCart";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import { ProductInCart } from "../Types/ProductFetchResp/ProductFetchResp";
import { CalculateTotal } from "../Utility/CalculateTotal/CalculateTotal";

export default function CartPage(){

    const {value, updateLocalStorage} = useLocalStorage<ProductInCart[]>('cart-items', [])
    const cartTotal = CalculateTotal(value)
    const handleQuantityProduct = (id:string, quantity:number) =>{
        const newValue = value.map(item => {
            if(item.id !== id) return item
            return {
                ...item,
                quantity:quantity
            }
        })
        updateLocalStorage(newValue)
    }
    const handleDelete = (id: string) =>{
        const newValue = value.filter(item => item.id !== id)
        updateLocalStorage(newValue)
    }
    
    return(
        <div className="flex mt-28 gap-2 px-6 mini-tela:px-40 flex-col xl:flex-row w-full">
            <div className="xl:w-184 h-fit">
                <BtnBackIcon navigate="/" />
                <div className="mt-6 flex flex-col gap-1.5">
                    <h2 className="text-TextosDark2 font-medium text-2xl">SEU CARRINHO</h2>
                    <div className="flex gap-2 text-lg text-TextosDark2  ">
                        <h3 className="font-light">Total ({value?.length} produtos)</h3> 
                        <h3 className="font-semibold">{cartTotal}</h3>
                    </div>
                </div>
                <div className="flex flex-col gap-4 mt-6">
                    {value.map(item => 
                        <ProductDetailCart 
                            key={item.id} product={item}
                            handleDelete={handleDelete} 
                            handleQuantityProduct={handleQuantityProduct}  
                        />
                    )}
                </div>
            </div>
            <div>
                <CartOrder value={value} />
            </div>
        </div>
    )
}