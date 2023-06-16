'use client'
import axios, { AxiosPromise } from "axios"
import { ProductDetail } from "../Types/ProductFetchResp/ProductFetchResp"
import { useQuery } from "@tanstack/react-query"

const fetcher = (productId: string): AxiosPromise<ProductDetail> =>{
    return axios.post('https://4124-177-200-73-137.ngrok-free.app/',{
        query:`
        query{
            Product(id: "${productId}"){
              category
              name
              price_in_cents
              description
              image_url
            }
          }
        `
    })
}
export const useProduct = (id:string) =>{
    const { data } = useQuery({
        queryFn: () => fetcher(id),
        queryKey: ['product', id]
    })
    return{
        data: data?.data?.data?.Product
    }
}