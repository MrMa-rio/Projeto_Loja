'use client'
import { useQuery } from "@tanstack/react-query"
import axios, { AxiosPromise } from "axios"
import { ProductsFetchResponse } from "../Types/ProductsFetchResp/ProductsFetchResp"
import { mountQuery, mountQueryAll } from "../Utility/GraphiQLFilters/GraphiQLFilter"
import { useFilter } from "./useFilter"
import { useDeferredValue } from "react"

const api_url = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> =>{
    return axios.post(api_url,{query})
}
export const useProducts = () =>{
    const { type, priority, search, page } = useFilter()
    const searchDeferred = useDeferredValue(search)
    const query = mountQuery(type, priority, page)
    const { data } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ['products', type, priority, page, searchDeferred],
        staleTime: 1000*60*2
    })
    const products = data?.data?.data?.allProducts
    return {
        data: products
    }
}

export const useProductsAll = () => {
    const { type, priority, search } = useFilter()
    const searchDeferred = useDeferredValue(search)
    const query = mountQueryAll(type, priority)
    const { data } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ['products', type, priority, searchDeferred],
        staleTime: 1000*60*2
    })
    const products = data?.data?.data?.allProducts
    return {
        data: products
    }
}

