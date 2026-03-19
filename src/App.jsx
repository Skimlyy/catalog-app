import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('Alla')
  
  useEffect(() => {
    fetch('https://library-catalog-service.azurewebsites.net/api/Items')
        .then(res => res.json())
        .then(data => {
          setItems(data)
          setLoading(false)
        })
  }, [])
  
  const filteredItems = filter === 'Alla'
  ? items: items.filter(item => item.itemType === filter)
  
  return (
      <div className="app">
        <h1>Bibliotekskatalog</h1>
        
        <div className="filters">
          {['Alla', 'Bok', 'Utrustning'].map(type => (
              <button
              key={type}
              className={filter === type ? 'active' : ''}
              onClick={() => setFilter(type)}
              >
                {type}
              </button>
              ))}
      </div>

        {loading ? (
            <p>Laddar...</p>
        ) : (
            <div className="grid">
              {filteredItems.map(item => (
                  <div key={item.id} className="card">
                    <h2>{item.title}</h2>
                    <span className="type">{item.itemType}</span>
                    <p>{item.description ?? 'Ingen beskrivning'}</p>
                    <p className="identifier">{item.identifier ?? ''}</p>
                    <span className={item.isActive ? 'status active' : 'status inactive'}>
                {item.isActive ? 'Tillgänglig' : 'Ej tillgänglig'}
              </span>
                  </div>
              ))}
            </div>
        )}
      </div>
  )
}

export default App