import { useState } from 'react'
import { products } from '../data/products'
import ProductModal from './ProductModal'
import './ProductGrid.css'

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const openModal = (product) => {
    setSelectedProduct(product)
  }

  const closeModal = () => {
    setSelectedProduct(null)
  }

  return (
    <>
      <section className="product-grid-section">
        <h2 className="product-grid-title">Our Collection</h2>
        <div className="product-grid">
          {products.map(product => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => openModal(product)}
            >
              <div className="product-image-container">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </>
  )
}
