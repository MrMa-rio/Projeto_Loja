import { centavosParaReais } from "@/app/Utility/ConversorMoeda/script"
import { useRouter } from "next/navigation"

interface ProductCardProps {
    title: string,
    image: string,
    price: number,
    id: string
}

export const ProductCard = (props: ProductCardProps) => {
    const navigate = useRouter()

    const handleNavigate = () =>{
        navigate.push(`/product?id=${props.id}`)
    }

    return(
        <div onClick={handleNavigate} className="flex flex-col w-fit bg-white bg-opacity-40 rounded-md cursor-pointer overflow-hidden">
            <div className="w-fit h-fit overflow-hidden">
                <img
                    src={props.image}
                    alt={props.title}
                    className="w-64 h-76 rounded-t-md opacity-90 hover:opacity-100 hover:scale-125  transition-all duration-500"
                />
            </div>
            <div className="flex flex-col gap-2 p-2 pl-3 ">
                <h2 className="text-base text-TextosDark2 font-light">{props.title}</h2>
                <div className="flex justify-center items-center">
                    <div className="w-11/12 h-px bg-ShapesColor"></div>
                </div>
                <h3 className="text-sm font-semibold text-ShapesDarkColor">{centavosParaReais(props.price)}</h3>
            </div>

        </div>
    )
}