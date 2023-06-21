import { useContext } from "react"
import { FilterContext } from "../Contexts/Filters/Filters"

export const useFilter = () => {
    return useContext(FilterContext)
}