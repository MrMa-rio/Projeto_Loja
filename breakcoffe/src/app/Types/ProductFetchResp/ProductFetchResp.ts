export interface ProductFetchResponse {
    id: string,
    name: string,
    image_url: string,
    price_in_cents: number,
    description?: string,
    category?: string
}

export interface ProductInCart extends ProductFetchResponse{
    quantity: number
}

export interface ProductDetail {
    data:{
        Product: ProductFetchResponse
    }
}