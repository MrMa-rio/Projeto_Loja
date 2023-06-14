import { useFilter } from "@/app/Hooks/useFilter"
import { FilterType as FilterType_ } from "@/app/Types/Filters/Filters"

export const FilterType = () =>{
    const {type, setType} = useFilter()
    const toggleLI = (e:FilterType_) =>{
        setType(e)
    }
    return(
        <ul className="flex mini-tela:w-1/2 h-14 gap-3 mini-tela:gap-10 text-TextosDark text-xs mini-tela:text-base ">
            <li onClick={() => toggleLI(FilterType_.TODOS)} className={`${type === FilterType_.TODOS ? 'font-bold border-b-4 border-hrOrange' : '' } cursor-pointer h-fit`}>
                TODOS OS PRODUTOS
            </li>
            <li onClick={() => toggleLI(FilterType_.CAMISETAS)} className={`${type === FilterType_.CAMISETAS ? 'font-bold border-b-4 border-hrOrange' : '' } cursor-pointer h-fit`}>
                CAMISETAS
            </li>
            <li onClick={() => toggleLI(FilterType_.CANECAS)} className={`${type === FilterType_.CANECAS ? 'font-bold border-b-4 border-hrOrange' : '' } cursor-pointer h-fit`}>
                CANECAS
            </li>
        </ul>
    )
}