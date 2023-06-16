'use client'
import { FiltersItems } from "./Components/FiltersItems/FiltersItems";
import { ProductList } from "./Components/ProductsList";

export default function Home() {
  return (
      <main className="h-full px-6 mini-tela:px-40 bg-terciary">
        <FiltersItems />
        <ProductList />
      </main>
  )
}
