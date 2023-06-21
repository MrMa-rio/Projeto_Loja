import { useProductsAll } from "@/app/Hooks/useProducts"

export const CountPagination = () =>{
    const quantityProducts = useProductsAll().data?.length || 0
    const perpage = 10
    const restPages = quantityProducts % perpage 
    const pages = (quantityProducts - restPages) / perpage
    const totalPages = restPages > 0 ? pages + 1 : pages
    let arrayIndexPage = []
    for(let i = 0; i< totalPages; i++){
        arrayIndexPage.push(i)
    }
    return arrayIndexPage
}