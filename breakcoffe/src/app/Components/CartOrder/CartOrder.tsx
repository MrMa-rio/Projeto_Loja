import { ProductInCart } from "@/app/Types/ProductFetchResp/ProductFetchResp"
import { CalculateTotal, CalculateTotalComFrete } from "@/app/Utility/CalculateTotal/CalculateTotal"
import { centavosParaReais } from "@/app/Utility/ConversorMoeda/script"

export const CartOrder = (props:{value:ProductInCart[]}) =>{
   const frete = 40 
    return(
        <div className="flex flex-col gap-7 bg-white xl:w-88 xl:h-145 px-6 pt-4 pb-6 ">
            <h2 className="text-TextosDark2 font-semibold text-xl">
                RESUMO DO PEDIDO
            </h2>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between " >
                        <p>
                            Subtotal de produtos
                        </p>
                        <p>
                            {CalculateTotal(props.value)}
                        </p>
                    </div>
                    <div className="flex justify-between ">
                        <p>
                            Entrega
                        </p>
                        <p>
                        {centavosParaReais(4000)}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <hr  />
                        <div className="flex justify-between font-semibold " >
                                <p>
                                    Total
                                </p>
                                <p>
                                {CalculateTotalComFrete(props.value)}
                                </p>
                        </div>
                    </div>
                    <button className="w-full rounded-md h-11 bg-quartenary text-ShapesLightColor font-medium" >
                        FINALIZAR A COMPRA
                    </button>
                </div>
            </div>
            <div className=" flex flex-col gap-3 justify-end h-full text-sm text-TextosDark">
                
            <a className="underline underline-offset-2" href="#">AJUDA</a>
            <a className="underline underline-offset-2" href="#">REEMBOLSOS</a>
            <a className="underline underline-offset-2" href="#">ENTREGAS E FRETE</a>
            <a className="underline underline-offset-2" href="#">TROCAS E DEVOLUÇÕES</a>

            </div>
        </div>
    )
}