'use client'
import { useQuery } from "@tanstack/react-query"
import axios, { AxiosPromise } from "axios"
import { ProductsFetchResponse } from "../Types/ProductsFetchResp/ProductsFetchResp"


const fetcher = (): AxiosPromise<ProductsFetchResponse> =>{
    return axios.post('http://localhost:3333', 
        {
            query: `
                query{
                    allProducts {
                    id
                    name
                    image_url
                    price_in_cents
                    }
                }
            `
        }
    )
}

export const useProducts = () =>{
    const { data} = useQuery({
        queryFn: fetcher,
        queryKey: ['products']
    })
    return {
        data: data?.data?.data?.allProducts
    }

}