import { Header } from './Components/Header'
import { FilterContextProvider } from './Contexts/Filters/Filters'
import './globals.css'
import { Saira } from 'next/font/google'

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'] 
  })

export const metadata = {
  title: 'BreakCoffe',
  description: 'Loja Virtual de Camisetas e Canecas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${saira.className} bg-terciary`}>
        <FilterContextProvider >
          <Header />
          {children}
        </FilterContextProvider>
        
      </body>
    </html>
  )
}
