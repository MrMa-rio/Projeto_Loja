'use client'
import { useQuery } from "@tanstack/react-query"
import axios, { AxiosPromise } from "axios"
import { ProductsFetchResponse } from "../Types/ProductsFetchResp/ProductsFetchResp"
import { mountQuery } from "../Utility/GraphiQLFilters/GraphiQLFilter"
import { useFilter } from "./useFilter"
import { useDeferredValue } from "react"

const api_url = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> =>{
    return axios.post(api_url,{query})
}
export const useProducts = () =>{
    const { type, priority, search } = useFilter()
    const searchDeferred = useDeferredValue(search)
    const query = mountQuery(type, priority)
    const { data } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ['products', type, priority],
        staleTime: 1000*60*2
    })
    const products = data?.data?.data?.allProducts
    const filterProducts = products?.filter(product => product.name.toLowerCase().includes(searchDeferred.toLowerCase()))
    return {
        data: filterProducts
    }
}