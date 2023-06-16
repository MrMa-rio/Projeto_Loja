import { useLocalStorage } from "@/app/Hooks/useLocalStorage"
import { ShoppingBag } from "lucide-react"
import { useEffect, useState } from "react"

export const Cart = () =>{
    const {value} = useLocalStorage('cart-items', [])
    
    
    return(
        <button className='pl-4 flex'>
            <ShoppingBag className=' stroke-primary ' />
            <span className='translate-y-3 -translate-x-2 bg-red-700 rounded-full w-4 text-xs text-white'>{value.length}</span>
        </button>
    )
}