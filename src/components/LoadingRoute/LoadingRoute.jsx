import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLoading } from '../../Contexts/LoadingContext'

export function LoadingRoute({ element: Component}) {
    const { setIsLoading } = useLoading()
    const location = useLocation()

    useEffect(() => {
        setIsLoading(true)
        const timer = setTimeout(() => setIsLoading(false), 500) // Minimum loading time
        return () => {
            clearTimeout(timer)
            setIsLoading(false) // Ensure loading state is reset on unmount
        }
    }, [location.pathname, setIsLoading])

    return Component
}