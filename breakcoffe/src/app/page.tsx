'use client'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { FiltersItems } from "./Components/FiltersItems/FiltersItems";
import { ProductList } from "./Components/ProductsList";

export default function Home() {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client} >
      <main className="h-full px-6 mini-tela:px-40 bg-terciary">
        <FiltersItems />
        <ProductList  />
      </main>
    </QueryClientProvider>
    
  )
}
