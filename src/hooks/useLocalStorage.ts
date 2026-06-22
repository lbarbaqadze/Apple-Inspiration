'use client'

import { useState, useEffect, useCallback } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
    const [state, setState] = useState<T>(initialValue)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        try {
            const item = window.localStorage.getItem(key)
            if (item !== null) {
                setState(JSON.parse(item))
            }
        } catch (error) {
            console.error('Error reading localStorage key:', key, error)
        } finally {
            setMounted(true)
        }
    }, [key])

    const setPersistedState = useCallback((value: T | ((val: T) => T)) => {
        try {
            setState((prevState) => {
                const valueToStore = value instanceof Function ? value(prevState) : value
                window.localStorage.setItem(key, JSON.stringify(valueToStore))
                return valueToStore
            })
        } catch (error) {
            console.error('Error setting localStorage key:', key, error)
        }
    }, [key])

    return [state, setPersistedState, mounted] as const
}