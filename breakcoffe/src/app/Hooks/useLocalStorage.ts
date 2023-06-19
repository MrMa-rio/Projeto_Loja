'use client'
import { useEffect, useState } from "react"

export const useLocalStorage = <T>(item:string, initialValue:T) => {

    const [value, setValue] = useState(initialValue)
    useEffect(()=>{
        if(typeof globalThis === 'undefined') return
        let valueItem = localStorage.getItem(item)
        if(valueItem){
            setValue(JSON.parse(valueItem))
        }
    },[globalThis])
    const updateLocalStorage = (newValue: T) => {
        setValue(newValue)
        localStorage.setItem(item, JSON.stringify(newValue))
    }
    return{
        value,
        updateLocalStorage
    }
}