export interface ProductFetchResponse {
    id: string,
    name: string,
    image_url: string,
    price_in_cents: number,
    description?: string,
    category?: string
}

export interface ProductDetail {
    data:{
        Product: ProductFetchResponse
    }
}