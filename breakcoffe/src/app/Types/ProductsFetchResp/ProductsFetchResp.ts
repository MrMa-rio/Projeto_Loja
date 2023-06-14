import { ProductFetchResponse } from "../ProductFetchResp/ProductFetchResp"

export interface ProductsFetchResponse {
    data: {
        allProducts: ProductFetchResponse[]
    }
}