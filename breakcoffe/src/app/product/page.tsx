'use client'
import { ShoppingBag } from "lucide-react"
import { BtnBackIcon } from "../Components/BtnBackIcon/BtnBackIcon"
import { useProduct } from "../Hooks/useProduct"
import { centavosParaReais } from "../Utility/ConversorMoeda/script"
import { handleAddCart } from "../Utility/AddCart/AddCart"

export default function DetailProduct({searchParams}:{searchParams:{id:string}}){
    const {data} = useProduct(searchParams.id)
    if(data?.name){
        return(
            <div className="flex flex-col mt-28 gap-2 px-6 mini-tela:px-40">
                <div className="w-fit"><BtnBackIcon navigate={"/"} /></div>
                <div className="flex flex-col xl:flex-row items-center xl:items-start gap-8">
                    <img 
                        src={data?.image_url} 
                        alt={data?.name}
                        className="w-1/2 xl:w-160 xl:h-145 rounded-md"
                    />
                    <div className="flex flex-col items-center justify-between xl:w-112 gap-6 xl:h-145">
                        <div className="flex  flex-col gap-14 text-TextosDark">
                            <div className="flex flex-col gap-3">
                                <p className="text-base font-normal">{data?.category}</p>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-1 ">
                                        <h2 className="text-3xl font-light ">{data?.name}</h2>
                                        <h4 className="text-xl font-semibold text-ShapesDarkColor">{centavosParaReais(data?.price_in_cents ?? 0)}</h4>
                                    </div>
                                    <p className="text-xs ">*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="font-medium">DESCRIÇÃO</h3>
                                <p className="text-sm leading-6">{data?.description}</p>
                            </div>
                        </div>
                        <button onClick={() => {handleAddCart(data, searchParams.id)}} className="flex gap-2 justify-center items-center w-full text-white py-2.5 bg-BrandBlue ">
                            <ShoppingBag /> 
                            <p>ADICIONAR AO CARRINHO</p>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}