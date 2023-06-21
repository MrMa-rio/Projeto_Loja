'use client'
import { useFilter } from "@/app/Hooks/useFilter"
import { PriorityTypes } from "@/app/Types/Priority/Priority"
import { ChevronDown, ListFilter } from "lucide-react"
import { useState } from "react"

export const FilterPriority = () => {
    const [isShow, setShow] = useState(false)
    const { setPriority } = useFilter()

    const handleShow = () => {
        setShow(!isShow)
    }
    const handlePriority = (value:PriorityTypes) =>{
        setPriority(value)
        handleShow()
    }
    return(
        <div className="flex w-fit flex-col justify-center items-center text-TextosDark z-50">
            <button onClick={handleShow} className="hidden mini-tela:flex justify-end gap-2 cursor-pointer">
                <p>Organizar por</p>
                <ChevronDown className="stroke-TextosDark" />
            </button>
            <div onClick={handleShow} className="flex mini-tela:hidden cursor-pointer">
                <ListFilter />
            </div>
            {isShow
                && 
            <ul className="absolute flex flex-col gap-1 justify-center p-3 mt-40 rounded-md w-44 h-32 bg-white right-2 mini-tela:right-auto">
                <li onClick={ () => {handlePriority(PriorityTypes.NOVOS)}} className="cursor-pointer">Novidades</li>
                <li onClick={ () => {handlePriority(PriorityTypes.MAIOR_PREÇO)}} className="cursor-pointer">Preço:Maior - menor</li>
                <li onClick={ () => {handlePriority(PriorityTypes.MENOR_PREÇO)}} className="cursor-pointer">Preço:Menor - maior</li>
                <li onClick={ () => {handlePriority(PriorityTypes.POPULAR)}} className="cursor-pointer">Mais vendidos</li>
            </ul>
            }
        </div>
    )
}


/*


    #Conhecimento basico em graphiQL
    #Manipulação do localStorage
    #Amadurecimento no React com Typescript
    #Aprendendo a criar hooks e interfaces
    

me ajude a cria um depoimento para um post de desenvolvimento de um projeto de loja para fins de estudo.
Nele coloquei em pratica:
    #Conhecimento basico em graphiQL
    #Manipulação do localStorage
    #Amadurecimento no React com Typescript
    #Aprendendo a criar hooks e interfaces

Faça um texto resumido contando como foi minhas dificuldades na criação dessa aplicação web






    Olá rede!!

    Venho publicar mais um percurso importante dessa minha jornada como dev.
    Dessa vez estive estudando sobre o armazenamento local do navegador e encontrei esse
    projeto incrivel da RocketSeat por meio de um video do youtube. No video mostra um desafio 
    de frontend, e nele pede-se uma aplicação react de uma loja virtual. com isso pude aprender 
    novas funcionalidades jamais vistas antes por mim, pude aprender uma maneira muito interessante 
    de desenvolver aplicações seguras e otimizadas. Entender como funciona o armazenamento local do navega-
    dor foi a chave para poder criar prjetos ainda mais otimizados e me criou varias ideias otimas
    Com esse projeto pude aprimorar meus conehcimentos em react e typecript com criações de hooks e interfaces
    que ajudam a deixar o codigo mais limpo e seguro



*/