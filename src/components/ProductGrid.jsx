import { useState } from 'react'
import ProductModal from './ProductModal'
import './ProductGrid.css'

export default function ProductGrid({ products }) {
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
        <h2 className="product-grid-title">
          {'Naša kolekcija'.split('').map((char, i) => (
            <span
              key={i}
              className="product-grid-title-char"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="product-card"
              style={{ animationDelay: `${0.3 + index * 0.12}s` }}
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
