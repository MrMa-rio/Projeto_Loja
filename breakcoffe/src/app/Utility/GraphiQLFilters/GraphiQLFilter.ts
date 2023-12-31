import { useFilter } from "@/app/Hooks/useFilter";
import { FilterType } from "@/app/Types/Filters/Filters";
import { PriorityTypes } from "@/app/Types/Priority/Priority";

export const CategoryType = (type: FilterType) => {
    if(type == FilterType.CAMISETAS) return "t-shirts"
    if(type == FilterType.CANECAS) return "mugs"
    return ""
}

export const getFildPriority = (priority: PriorityTypes) =>{
    if(priority === PriorityTypes.NOVOS) return {field: "created_at", order:"ASC"}
    if(priority === PriorityTypes.MAIOR_PREÇO) return {field: "price_in_cents", order:"DSC"}
    if(priority === PriorityTypes.MENOR_PREÇO) return {field: "price_in_cents", order:"ASC"}
    return {field: "sales", order:"DSC"}
}

export const mountQuery = (type:FilterType, priority: PriorityTypes, page: number) => {
    const {search, setType} = useFilter()
    if(type === FilterType.TODOS && priority === PriorityTypes.POPULAR && search.trim() == "") return `
        query{
            allProducts (page:${page}, perPage:10, sortField: "sales", sortOrder:"DSC") {
            id
            name
            image_url
            price_in_cents
            category
            }
        }
    `
    const sortPriority = getFildPriority(priority)
    const CategoryFilter = CategoryType(type)

    if(search){
        setType(FilterType.TODOS)
        return`
        query{
            allProducts(filter:{q:"${search}"}, page:${page}, perPage: 10, sortField: "${sortPriority.field}", sortOrder: "${sortPriority.order}") {
              id
              name
              image_url
              price_in_cents
              category
              created_at
            }
          }
        `
    }
    return `query{
        allProducts(page:${page}, perPage:10, sortField: "${sortPriority.field}", sortOrder: "${sortPriority.order}", ${CategoryFilter ? `filter: {category: "${CategoryFilter}"}`: ''}, ) {
          id
          name
          image_url
          price_in_cents
          category
          created_at
        }
      }
    
    `
}
export const mountQueryAll = (type:FilterType, priority: PriorityTypes) => {
    const {search, setType} = useFilter()
    if(type === FilterType.TODOS && priority === PriorityTypes.POPULAR && search.trim() == "") return `
        query{
            allProducts (sortField: "sales", sortOrder:"DSC") {
            id
            name
            image_url
            price_in_cents
            category
            }
        }
    `
    const sortPriority = getFildPriority(priority)
    const CategoryFilter = CategoryType(type)
    if(search){
        setType(FilterType.TODOS)
        return`
        query{
            allProducts(filter:{q:"${search}"}, sortField: "${sortPriority.field}", sortOrder: "${sortPriority.order}") {
              id
              name
              image_url
              price_in_cents
              category
              created_at
            }
          }
        `
    }
    return `query{
        allProducts(sortField: "${sortPriority.field}", sortOrder: "${sortPriority.order}", ${CategoryFilter ? `filter: {category: "${CategoryFilter}"}`: ''}, ) {
          id
          name
          image_url
          price_in_cents
          category
          created_at
        }
      }
    `
}