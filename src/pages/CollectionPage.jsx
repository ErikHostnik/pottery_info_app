import { useParams, Link } from 'react-router-dom'
import { collections } from '../data/products'
import ProductGrid from '../components/ProductGrid'
import './CollectionPage.css'

export default function CollectionPage() {
  const { collectionId } = useParams()
  const collection = collections.find(c => c.id === collectionId)

  if (!collection) {
    return (
      <div className="collection-page">
        <div className="collection-not-found">
          <h2>Kolekcija ni bila najdena</h2>
          <Link to="/" className="back-link">&larr; Nazaj na kolekcije</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="collection-page">
      <div
        className="collection-bg"
        style={{ backgroundImage: `url(${collection.image})` }}
      />
      <div className="collection-header">
        <Link to="/" className="back-link">&larr; Nazaj na kolekcije</Link>
        <h1 className="collection-page-title">
          {collection.name.split('').map((char, i) => (
            <span
              key={i}
              className="collection-page-title-char"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        <p className="collection-page-description">{collection.description}</p>
      </div>
      <ProductGrid products={collection.items} />
    </div>
  )
}
