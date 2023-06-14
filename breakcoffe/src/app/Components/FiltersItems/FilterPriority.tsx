'use client'
import { useFilter } from "@/app/Hooks/useFilter"
import { PriorityTypes } from "@/app/Types/Priority/Priority"
import { ChevronDown, ListFilter } from "lucide-react"
import { useState } from "react"

export const FilterPriority = () => {
    const [isShow, setShow] = useState(false)
    const { setPriority } = useFilter()

    const handleShow = () => {
        setShow(!isShow)
    }
    const handlePriority = (value:PriorityTypes) =>{
        setPriority(value)
        handleShow()
    }
    return(
        <div className="flex w-fit flex-col justify-center items-center text-TextosDark">
            <button onClick={handleShow} className="hidden mini-tela:flex justify-end gap-2 cursor-pointer">
                <p>Organizar por</p>
                <ChevronDown className="stroke-TextosDark" />
            </button>
            <div onClick={handleShow} className="flex mini-tela:hidden cursor-pointer">
                <ListFilter />
            </div>
            {isShow
                && 
            <ul className="absolute flex flex-col gap-1 justify-center p-3 mt-40 rounded-md w-44 h-32 bg-white right-2 mini-tela:right-auto">
                <li onClick={ () => {handlePriority(PriorityTypes.NOVOS)}} className="cursor-pointer">Novidades</li>
                <li onClick={ () => {handlePriority(PriorityTypes.MAIOR_PREÇO)}} className="cursor-pointer">Preço:Maior - menor</li>
                <li onClick={ () => {handlePriority(PriorityTypes.MENOR_PREÇO)}} className="cursor-pointer">Preço:Menor - maior</li>
                <li onClick={ () => {handlePriority(PriorityTypes.POPULAR)}} className="cursor-pointer">Mais vendidos</li>
            </ul>
            }
        </div>
    )
}