function ItemCard({ item }) {
    return (
        <div className="card">
            <h2>{item.title}</h2>
            <span className="type">{item.itemType}</span>
            <p>{item.description ?? 'Ingen beskrivning'}</p>
            <p className="identifier">{item.identifier ?? ''}</p>
            <span className={item.isActive ? 'status active' : 'status inactive'}>
        {item.isActive ? 'Tillgänglig' : 'Ej tillgänglig'}
      </span>
        </div>
    )
}

export default ItemCard