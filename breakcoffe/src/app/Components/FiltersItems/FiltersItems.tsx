'use client'

import { FilterPriority } from "./FilterPriority"
import { FilterType } from "./FilterType"

export const FiltersItems = () => {
    
    return(
        <div className="mt-28 flex items-start justify-between flex-row gap-5">
            <FilterType />
            <FilterPriority />
        </div>
    )
}