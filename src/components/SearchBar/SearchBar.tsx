import { useState } from "react"
import "./searchBar.scss"
import { SearchType } from "../../types"
import { PropertyType } from "../../types/searchType"


function SearchBar() {
  const [query, setQuery] = useState<SearchType>({
    propertyType: PropertyType.RESIDENTIAL,
    location: "",
    minPrice: "",
    maxPrice: "",
  })

  const switchType = (value: PropertyType) => {
    setQuery((prev) => ({ ...prev, propertyType: value }))
  }

  return (
    <div className="search-bar">
      <div className="type">
        {Object.values(PropertyType).map((type) => (
          <button
            className={query.propertyType === type ? "active" : ""}
            key={type}
            onClick={() => switchType(type as PropertyType)}
          >
            {type.toLowerCase()}
          </button>
        ))}
      </div>
      <form action="">
        <input
          type="text"
          name="location"
          placeholder="City Location"
        />
        <input
          type="number"
          name="minPrice"
          min={0} max={10000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  )
}

export default SearchBar