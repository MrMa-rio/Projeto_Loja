'use client'
import { useQuery } from "@tanstack/react-query"
import axios, { AxiosPromise } from "axios"
import { ProductsFetchResponse } from "../Types/ProductsFetchResp/ProductsFetchResp"
import { FilterType } from "../Types/Filters/Filters"
import { CategoryType } from "../Utility/CategoryType/CategoryType"
import { useFilter } from "./useFilter"


const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> =>{
    return axios.post('http://localhost:3333',{query})
}
const mountQuery = (type:FilterType) => {
    if(type === FilterType.TODOS) return `
        query{
            allProducts {
            id
            name
            image_url
            price_in_cents
            category
            }
        }
    `
    return `query{
        allProducts(filter:{category: "${CategoryType(type)}"}) {
          id
          name
          image_url
          price_in_cents
          category
        }
      }
    
    `
}

export const useProducts = () =>{
    const { type } = useFilter()
    const query = mountQuery(type)
    const { data } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ['products', query]
    })
    return {
        data: data?.data?.data?.allProducts
    }

}