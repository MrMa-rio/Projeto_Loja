'use client'
import { useProducts } from "@/app/Hooks/useProducts"
import { ProductsFetchResponse } from "@/app/Types/ProductsFetchResp/ProductsFetchResp"

export const ProductList = () =>{
    const { data } = useProducts()
    console.log(data)
    return(
        <>
            
        </>
    )
}