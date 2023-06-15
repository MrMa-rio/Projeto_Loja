'use client'
import { useQuery } from "@tanstack/react-query"
import axios, { AxiosPromise } from "axios"
import { ProductsFetchResponse } from "../Types/ProductsFetchResp/ProductsFetchResp"
import { mountQuery } from "../Utility/GraphiQLFilters/GraphiQLFilter"
import { useFilter } from "./useFilter"
import { useDeferredValue } from "react"
const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> =>{
    return axios.post('http://localhost:3333',{query})
}
export const useProducts = () =>{
    const { type, priority, search } = useFilter()
    const searchDeferred = useDeferredValue(search)
    const query = mountQuery(type, priority)
    const { data } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ['products', type, priority]
    })
    const products = data?.data?.data?.allProducts
    const filterProducts = products?.filter(product => product.name.toLowerCase().includes(searchDeferred.toLowerCase()))
    return {
        data: filterProducts
    }
}