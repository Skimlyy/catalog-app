// Renderar filterknappar för objekttyper
function FilterButtons({ filter, onFilterChange }) {
    const types = ['Alla', 'Bok', 'Utrustning']

    return (
        <div className="filters">
            {types.map(type => (
                <button
                    key={type}
                    className={filter === type ? 'active' : ''}
                    onClick={() => onFilterChange(type)}
                >
                    {type}
                </button>
            ))}
        </div>
    )
}

export default FilterButtons