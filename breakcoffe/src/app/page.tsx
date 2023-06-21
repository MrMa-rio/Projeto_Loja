'use client'
import { FiltersItems } from "./Components/FiltersItems/FiltersItems";
import { Pagination } from "./Components/Pagination/Pagination";
import { ProductList } from "./Components/ProductsList";

export default function Home() {
  window.addEventListener('storage', () => console.log('aoba'))
  return (
      <main className="h-full pb-4 px-6 mini-tela:px-40 bg-terciary">
        <FiltersItems />
        <Pagination />
        <ProductList />
      </main>
  )
}
