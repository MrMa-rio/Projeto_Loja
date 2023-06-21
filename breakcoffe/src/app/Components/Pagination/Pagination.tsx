import { useFilter } from "@/app/Hooks/useFilter"
import { CountPagination } from "@/app/Utility/CountPagination/CountPagination"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export const Pagination = () =>{

    const {page,setPage} = useFilter()
    const [isSelected, setisSelected] = useState(0)
    const handleColorPage = (value:number) =>{
        setisSelected(value)
    }
    const countPagination = CountPagination()
    
    return(
        <div className="flex justify-center mini-tela:justify-end gap-2">
            <div className="flex gap-1">
                {countPagination.map(index => {
                    return(
                        <button key={index} onClick={() => {setPage(index); handleColorPage(index)}} className={`bg-ShapesLightColorGray rounded-xl hover:brightness-95  p-1 px-4 disabled:brightness-75 ${isSelected == index ? 'border-2 border-hrOrange text-hrOrange font-semibold' : ''}`}>{index+1}</button>
                    )
                })}
            </div>
            <div className="flex gap-1 brightness-90 ">
                <button disabled={page == 0 !! } onClick={() => {handleColorPage(page-1); setPage(page - 1)}} className="bg-ShapesLightColorGray rounded-xl hover:brightness-95  p-2 disabled:brightness-75"><ChevronLeft className="w-6 stroke-TextosDark" /></button>
                <button disabled={page == countPagination.length-1 !! } onClick={() => {setPage(page + 1); handleColorPage(page+1)}} className="bg-ShapesLightColorGray rounded-xl hover:brightness-95  p-2 disabled:brightness-75"> <ChevronRight className="w-6 stroke-TextosDark" /></button>
            </div>
        </div>
    )
}

/**
 <div className="flex gap-1">
                <button onClick={() => {setPage(0); handleColorPage(0)}} className={`bg-ShapesLightColorGray rounded-xl hover:brightness-95  p-1 px-4 disabled:brightness-75 ${isSelected == 0 ? 'border-2 border-hrOrange text-hrOrange font-semibold' : ''}`}>Inicial</button>
                <button onClick={() => {setPage(1); handleColorPage(1)}} className={`bg-ShapesLightColorGray rounded-xl hover:brightness-95  p-1 px-4 disabled:brightness-75 ${isSelected == 1 ? 'border-2 border-hrOrange text-hrOrange font-semibold' : ''}`}>1</button>
                <button onClick={() => {setPage(2); handleColorPage(2)}} className={`bg-ShapesLightColorGray rounded-xl hover:brightness-95  p-1 px-4 disabled:brightness-75 ${isSelected == 2 ? 'border-2 border-hrOrange text-hrOrange font-semibold' : ''}`}>2</button>
                <button onClick={() => {setPage(3); handleColorPage(3)}} className={`bg-ShapesLightColorGray rounded-xl hover:brightness-95  p-1 px-4 disabled:brightness-75 ${isSelected == 3 ? 'border-2 border-hrOrange text-hrOrange font-semibold' : ''}`}>3</button>
                <button onClick={() => {setPage(4); handleColorPage(4)}} className={`bg-ShapesLightColorGray rounded-xl hover:brightness-95  p-1 px-4 disabled:brightness-75 ${isSelected == 4 ? 'border-2 border-hrOrange text-hrOrange font-semibold' : ''}`}>4</button>
                <button onClick={() => {setPage(5); handleColorPage(5)}} className={`bg-ShapesLightColorGray rounded-xl hover:brightness-95  p-1 px-4 disabled:brightness-75 ${isSelected == 5 ? 'border-2 border-hrOrange text-hrOrange font-semibold' : ''}`}>5</button>
            </div>
 */