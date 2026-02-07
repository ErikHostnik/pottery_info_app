import { Link } from 'react-router-dom'
import { collections } from '../data/products'
import './CollectionGrid.css'

export default function CollectionGrid() {
  return (
    <section className="collection-grid-section">
      <h2 className="collection-grid-title">Our Collections</h2>
      <div className="collection-grid">
        {collections.map(collection => (
          <Link
            key={collection.id}
            to={`/collection/${collection.id}`}
            className="collection-card"
          >
            <div className="collection-image-container">
              <img
                src={collection.image}
                alt={collection.name}
                className="collection-image"
              />
            </div>
            <div className="collection-info">
              <h3 className="collection-name">{collection.name}</h3>
              <p className="collection-description">{collection.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
