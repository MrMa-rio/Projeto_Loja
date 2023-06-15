import { FilterType } from "@/app/Types/Filters/Filters";

export const CategoryType = (type: FilterType) => {
    if(type == FilterType.CAMISETAS) return "t-shirts"
    if(type == FilterType.CANECAS) return "mugs"
    return ""
}