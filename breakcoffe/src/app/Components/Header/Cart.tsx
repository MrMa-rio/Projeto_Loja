import { useLocalStorage } from "@/app/Hooks/useLocalStorage"
import { ProductFetchResponse } from "@/app/Types/ProductFetchResp/ProductFetchResp";
import { CounterCart } from "@/app/Utility/CounterCart/CounterCart";
import { ShoppingBag } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export const Cart = () =>{
    const router = useRouter()
    const handleNavigate = () =>{
        router.push('/cart')
    }
    const {value} = useLocalStorage<ProductFetchResponse[]>('cart-items', [])
    let valueItem = ''
    const [count, setCount] = useState(value?.length)
    CounterCart(setCount,valueItem)
    return(
        <button onClick={handleNavigate} className='p-3 pl-1 mini-tela:pl-4 flex'>
            <ShoppingBag className='stroke-primary' />
            <span className='translate-y-3 -translate-x-2 bg-red-700 rounded-full w-4 text-xs text-white'>
                {count || value?.length}
            </span>
        </button>
    )
}