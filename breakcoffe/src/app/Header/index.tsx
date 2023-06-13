'use client'
import { Search,ShoppingBag } from 'lucide-react'
import { Saira_Stencil_One } from 'next/font/google'

const Saira = Saira_Stencil_One({
        weight: '400',
        subsets: ['latin']
    })
export const Header = () => {
    return(
        <header>
            <section className="flex fixed top-0 justify-between items-center gap-10 w-full h-20 px-6 mini-tela:px-40">
                <div>
                    <h1 className={`${Saira.className} text-2xl mini-tela:text-4xl text-primary `} >BreakCoffe</h1>
                </div>
                <div className='flex justify-center items-center'>
                    <input 
                        className=' w-3/4 mini-tela:w-80 bg-secondary py-2.5 pl-4 text-sm placeholder-TextosDark focus:outline-none'
                        type="text" 
                        name="busca" 
                        id="busca" 
                        placeholder='Procurando por algo específico?'
                    />
                    <Search className='bg-secondary stroke-primary w-10 h-10 pr-3' />
                    <button className='pl-4 flex'>
                        <ShoppingBag className=' stroke-primary' />
                        <circle className='translate-y-3 -translate-x-2 bg-red-700 rounded-full w-4 text-xs text-white'>9</circle>
                    </button>
                </div>
            </section>
        </header>
    )
}