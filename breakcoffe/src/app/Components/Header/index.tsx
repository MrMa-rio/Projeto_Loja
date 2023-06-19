'use client'
import { Search,ShoppingBag } from 'lucide-react'
import { Saira_Stencil_One } from 'next/font/google'
import { InputText } from './InputText'
import { Cart } from './Cart'
const Saira = Saira_Stencil_One({
        weight: '400',
        subsets: ['latin']
    })
export const Header = () => {
    return(
        <header className='bg-white fixed top-0 w-full '>
            <section className="flex mini-tela:justify-between items-center gap-10 w-full h-20 px-4 mini-tela:px-40">
                <div className='w-fit'>
                    <h1 className={`${Saira.className} hidden mini-tela:flex text-4xl text-primary `}>BreakCoffe</h1>
                    <h1 className={`${Saira.className} text-xl mini-tela:hidden text-primary `}>BCoffe</h1>

                </div>
                <div className='flex w-full justify-center items-center mini-tela:justify-end '>
                    <InputText />
                    <Cart />
                </div>
            </section>
        </header>
    )
}