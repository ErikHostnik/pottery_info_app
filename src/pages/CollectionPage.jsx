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
          <h2>Collection not found</h2>
          <Link to="/" className="back-link">&larr; Back to Collections</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="collection-page">
      <div className="collection-header">
        <Link to="/" className="back-link">&larr; Back to Collections</Link>
        <h1 className="collection-page-title">{collection.name}</h1>
        <p className="collection-page-description">{collection.description}</p>
      </div>
      <ProductGrid products={collection.items} />
    </div>
  )
}
