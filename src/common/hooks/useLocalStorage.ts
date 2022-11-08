import { useState, useEffect } from 'react'

const storage = window.localStorage

type ConcreteReturnTypeCallback<T> = () => T
type UseLocalStorageInitialEntity<T> = T | ConcreteReturnTypeCallback<T>

function initialValueProvider<T>(key: string, initial: UseLocalStorageInitialEntity<T>): T {
    const value = storage.getItem(key)
    
    return value
        ? JSON.parse(value) as T
        : initial instanceof Function ? initial() : initial
}

export function useLocalStorage<T>(key: string, initial: UseLocalStorageInitialEntity<T>): [T, Function] {
    const [state, setState] = useState<T>(() => initialValueProvider<T>(key, initial))
    
    useEffect(() => storage.setItem(key, JSON.stringify(state)), [state])
    
    return [state, setState]
}
