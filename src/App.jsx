import { useState } from 'react'
import './App.css'
import ItemCard from './components/ItemCard'
import FilterButtons from './components/FilterButtons'
import useItems from './hooks/useItems'

function App() {
    const { items, loading, error } = useItems()
    const [filter, setFilter] = useState('Alla')

    const filteredItems = filter === 'Alla'
        ? items
        : items.filter(item => item.itemType === filter)

    if (error) return <p>Något gick fel vid hämtning av data.</p>

    return (
        <div className="app">
            <h1>Bibliotekskatalog</h1>

            <FilterButtons filter={filter} onFilterChange={setFilter} />

            {loading ? (
                <p>Laddar...</p>
            ) : (
                <div className="grid">
                    {filteredItems.map(item => (
                        <ItemCard key={item.id} item={item} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default App