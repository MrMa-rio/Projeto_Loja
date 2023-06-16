'use client'
import axios, { AxiosPromise } from "axios"
import { ProductDetail } from "../Types/ProductFetchResp/ProductFetchResp"
import { useQuery } from "@tanstack/react-query"

const api_url = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (productId: string): AxiosPromise<ProductDetail> =>{
    return axios.post(api_url,{
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
        queryKey: ['product', id],
        enabled: !!id
    })
    return{
        data: data?.data?.data?.Product
    }
}