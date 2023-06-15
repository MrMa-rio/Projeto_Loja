import { useFilter } from "@/app/Hooks/useFilter"
import { Search } from "lucide-react"

export const InputText = () => {
    const {setSearch, search} = useFilter()
    return(
        <>
            <input 
                className=' w-3/4 mini-tela:w-4/5 max-w-88 bg-secondary py-2.5 pl-4 text-sm placeholder-TextosDark rounded-s-md focus:outline-none'
                type="text" 
                name="busca" 
                id="busca" 
                placeholder='Procurando por algo específico?'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Search className='bg-secondary stroke-primary w-10 h-10 pr-3 rounded-e-md' />
                    
        </>
    )
}