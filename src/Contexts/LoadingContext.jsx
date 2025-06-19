import { createContext, useContext, useState } from 'react'
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner'

const LoadingContext = createContext()

export function LoadingProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        {children}
        {isLoading && <LoadingSpinner />}
        </LoadingContext.Provider>
    )
}

export const useLoading = () => useContext(LoadingContext)