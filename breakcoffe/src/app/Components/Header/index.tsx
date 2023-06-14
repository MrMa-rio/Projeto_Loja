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
        <header>
            <section className="flex fixed top-0 justify-between items-center gap-10 w-full h-20 px-6 mini-tela:px-40">
                <div>
                    <h1 className={`${Saira.className} text-2xl mini-tela:text-4xl text-primary `} >BreakCoffe</h1>
                </div>
                <div className='flex justify-center items-center w-1/2'>
                    <InputText />
                    <Cart />
                </div>
            </section>
        </header>
    )
}