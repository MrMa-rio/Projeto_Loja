import { centavosParaReais } from "@/app/Utility/ConversorMoeda/script"
import Image from "next/image"

interface ProductCardProps {
    title: string,
    image: string,
    price: number,
}

export const ProductCard = (props: ProductCardProps) => {

    return(
        <div className="flex flex-col w-fit bg-white bg-opacity-40 rounded-md">
            <img 
                src={props.image} 
                alt={props.title}
                className="w-64 h-76 rounded-t-md" 
            />
            <div className="flex flex-col gap-2 p-2 pl-3">
                <h2 className="text-base text-TextosDark2 font-light">{props.title}</h2>
                <div className="flex justify-center items-center">
                    <div className="w-11/12 h-px bg-ShapesColor"></div>
                </div>
                <h3 className="text-sm font-semibold text-ShapesDarkColor">{centavosParaReais(props.price)}</h3>
            </div>

        </div>
    )
}