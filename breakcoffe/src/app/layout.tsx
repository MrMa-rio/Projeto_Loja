'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
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
const client = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${saira.className} bg-terciary`}>
        <QueryClientProvider client={client}>
          <FilterContextProvider >
            <Header />
            {children}
          </FilterContextProvider>
        </QueryClientProvider>
        
      </body>
    </html>
  )
}
