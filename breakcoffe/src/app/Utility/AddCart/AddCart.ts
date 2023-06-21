import { ProductFetchResponse } from "@/app/Types/ProductFetchResp/ProductFetchResp";

export const handleAddCart = (data: ProductFetchResponse, id:string) =>{
    if(data){
        let cartItems = localStorage.getItem('cart-items')
        
        if(cartItems){
            let cartItemsArray = JSON.parse(cartItems)
            let existingProductIndex = cartItemsArray.findIndex((item:{id:string}) => item.id === id )
            if(existingProductIndex != -1){
                cartItemsArray[existingProductIndex].quantity += 1
            }
            else{
                cartItemsArray.push({...data,id:id, quantity: 1})
            }
            localStorage.setItem('cart-items', JSON.stringify(cartItemsArray))
        }
        else{
            const newCart = [{
                ...data,
                id: id,
                quantity: 1
            }]
            localStorage.setItem('cart-items', JSON.stringify(newCart))
        }
    }
}