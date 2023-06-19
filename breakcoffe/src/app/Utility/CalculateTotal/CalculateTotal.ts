import { ProductInCart } from "@/app/Types/ProductFetchResp/ProductFetchResp";
import { centavosParaReais } from "../ConversorMoeda/script";

export const CalculateTotal = (value: ProductInCart[]) =>{

    return centavosParaReais(value.reduce((sum,item) => sum += (item.price_in_cents * item.quantity),0))
}
export const CalculateTotalComFrete = (value: ProductInCart[]) =>{
    const frete = 4000
    const valorAcima = 90000
    const valorTotal = value.reduce((sum,item) => sum += (item.price_in_cents * item.quantity),0)
    return centavosParaReais(valorTotal <= valorAcima && valorTotal != 0 ? valorTotal+frete : valorTotal)
}