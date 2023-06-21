'use client'
import { Saira_Stencil_One } from 'next/font/google'
import { InputText } from './InputText'
import { Cart } from './Cart'
import { useRouter } from 'next/navigation'
const Saira = Saira_Stencil_One({
        weight: '400',
        subsets: ['latin']
    })
export const Header = () => {
    const router = useRouter()
    const handleNavigate = () =>{
        router.push('/')
    }
    return(
        
        <header className='bg-white fixed top-0 w-full z-50'>
            <section className="flex mini-tela:justify-between items-center gap-10 w-full h-20 px-4 mini-tela:px-40">
                <button onClick={handleNavigate} className='w-fit'>
                    <h1 className={`${Saira.className} hidden mini-tela:flex text-4xl text-primary `}>BreakCoffe</h1>
                    <h1 className={`${Saira.className} text-xl mini-tela:hidden text-primary `}>BCoffe</h1>

                </button>
                <div className='flex w-full justify-center items-center mini-tela:justify-end '>
                    <InputText />
                    <Cart />
                </div>
            </section>
        </header>
    )
}