'use client'
import { useState } from "react"

export const useLocalStorage = <T>(item:string) => {

    const [value, setValue] = useState(JSON.parse(localStorage.getItem(item) || '[]'))
    const updateLocalStorage = (newValue: T) => {
        setValue(newValue)
        localStorage.setItem(item, JSON.stringify(newValue))
    }
    return{
        value,
        updateLocalStorage
    }
}