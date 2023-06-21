'use client'
import { ReactNode, createContext, useState } from "react";
import { FilterType } from "@/app/Types/Filters/Filters";
import { PriorityTypes } from "@/app/Types/Priority/Priority";
export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterType.TODOS,
    priority: PriorityTypes.NOVOS,
    setPriority: (value:PriorityTypes) => {},
    setSearch: (value:string) => {},
    setPage: (value:number) => {},
    setType: (value:FilterType) => {},
})
interface ProviderProps{
    children: ReactNode
}
export const FilterContextProvider = ({children}:ProviderProps) =>{
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.TODOS)
    const [priority, setPriority] = useState(PriorityTypes.POPULAR)
    return(
        <FilterContext.Provider value={{search, page, type, setSearch, setPage, setType, priority, setPriority}}>
            {children}
        </FilterContext.Provider>
    )
}