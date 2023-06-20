'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Header } from './Components/Header'
import { FilterContextProvider } from './Contexts/Filters/Filters'
import './globals.css'
import { Saira } from 'next/font/google'
import { ReactNode } from 'react'

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'] 
})
  const metadata = {
  title: 'BreakCoffe',
  description: 'Loja Virtual de Camisetas e Canecas',
}


export default function RootLayout({children}: {
  children: ReactNode
}) {
  
  const client = new QueryClient()
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
