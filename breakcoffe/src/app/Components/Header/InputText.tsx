import { useFilter } from "@/app/Hooks/useFilter"
import { Search } from "lucide-react"
import { ProductListSearch } from "./ProductListSearch"
import { useProducts } from "@/app/Hooks/useProducts"
import { ChangeEvent, useState } from "react"

export const InputText = () => {
    const {setSearch, search} = useFilter()
    const {data} = useProducts()
    const [isShow, setIsShow] = useState(false)
    const handleIsShow = (e:ChangeEvent<HTMLInputElement>) =>{
        if(e.target.value.trim() != ''){
            return setIsShow(true)
        }
        setIsShow(false)
    }
    return(
        <div>
            <div className="flex w-full">
                <input
                    className=' w-fit xl:w-88 mini-tela:w-4/5 max-w-88 bg-secondary py-2.5 pl-4 text-sm placeholder-TextosDark rounded-s-md focus:outline-none'
                    type="text"
                    name="busca"
                    id="busca"
                    placeholder='Procurando por algo específico?'
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value)
                        handleIsShow(e)
                    }}
                />
                <Search className='bg-secondary stroke-primary w-8 h-fit mini-tela:w-10 pr-3 rounded-e-md' />
            
            </div>
            {isShow ? <div className="absolute w-full mt-1 max-w-45.25 mini-tela:max-w-88 h-fit bg-white">
                
                {data?.map((item,index) => index < 3 
                    ? 
                    <ProductListSearch key={item.id} handleShow={() => setIsShow(false)}  item={item}/> 
                    : <></>
                )}
                
            </div> : <></>}
        </div>
    )
}