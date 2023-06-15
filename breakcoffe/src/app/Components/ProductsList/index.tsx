'use client'
import { useProducts } from "@/app/Hooks/useProducts"
import { ProductCard } from "../ProductCard/ProductCard"

export const ProductList = () =>{
    const { data } = useProducts()
   
    return(
        
        <div>
            <div className='w-full flex-grow mt-5 mini-tela:mt-10 justify-center grid grid-cols-auto gap-8 '>
                {
                    data?.map((result) => {
                        return(
                            <ProductCard
                            key={result.id}
                            image={result.image_url}
                            price={result.price_in_cents}
                            title={result.name}
                        />
                        )
                    })
                }
                {data?.length == 0 ?
                    <p className="w-full text-center">Nenhum resultado encontrado</p>
                 : ''}
            </div>
        </div>
    )
}