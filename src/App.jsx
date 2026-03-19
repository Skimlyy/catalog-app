import { useState } from 'react'
import './App.css'
import ItemCard from './components/ItemCard'
import FilterButtons from './components/FilterButtons'
import useItems from './hooks/useItems'

function App() {
    const { items, loading, error } = useItems()
    const [filter, setFilter] = useState('Alla')
    const [search, setSearch] = useState('')

    const filteredItems = items
        .filter(item => filter === 'Alla' || item.itemType === filter)
        .filter(item => item.title.toLowerCase().includes(search.toLowerCase()))

    if (error) return <p>Något gick fel vid hämtning av data.</p>

    return (
        <div className="app">
            <h1>Bibliotekskatalog</h1>

            <input
                className="search"
                type="text"
                placeholder="Sök efter titel..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            <FilterButtons filter={filter} onFilterChange={setFilter} />

            {loading ? (
                <p>Laddar...</p>
            ) : filteredItems.length === 0 ? (
                <p className="no-results">Inga objekt hittades.</p>
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