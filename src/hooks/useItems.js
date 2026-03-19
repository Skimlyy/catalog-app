import { useState, useEffect } from 'react'

function useItems() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // Hämtar alla items från CatalogService API
    useEffect(() => {
        fetch('https://library-catalog-service.azurewebsites.net/api/Items')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setLoading(false)
            })
            .catch(err => {
                setError(err)
                setLoading(false)
            })
    }, [])

    return { items, loading, error }
}

export default useItems