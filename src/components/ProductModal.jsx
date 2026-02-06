import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ProductModal.css'

export default function ProductModal({ product, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const navigate = useNavigate()

  if (!product) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    )
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    )
  }

  const handleInquiry = () => {
    onClose()
    navigate(`/contact?product=${encodeURIComponent(product.name)}`)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          ×
        </button>

        <div className="modal-gallery">
          {product.images.length > 1 && (
            <>
              <button className="modal-nav-btn prev" onClick={previousImage}>
                ‹
              </button>
              <button className="modal-nav-btn next" onClick={nextImage}>
                ›
              </button>
            </>
          )}

          <img
            src={product.images[currentImageIndex]}
            alt={product.name}
            className="modal-image"
          />

          {product.images.length > 1 && (
            <div className="modal-image-counter">
              {currentImageIndex + 1} / {product.images.length}
            </div>
          )}
        </div>

        <div className="modal-details">
          <h2>{product.name}</h2>

          <div className="modal-price">{product.price}</div>

          <div className="modal-section">
            <h3>Description</h3>
            <p className="modal-description">
              {product.description || 'This beautiful handcrafted pottery piece is made with love and care. Each item is unique and showcases the artisan\'s skill and attention to detail. Perfect for adding a touch of elegance to your home.'}
            </p>
          </div>

          <div className="modal-section">
            <h3>Details</h3>
            <ul className="modal-details-list">
              <li><strong>Material:</strong> {product.material || 'Ceramic/Stoneware'}</li>
              <li><strong>Finish:</strong> {product.finish || 'Glazed'}</li>
              <li><strong>Care:</strong> {product.care || 'Hand wash recommended'}</li>
              <li><strong>Made:</strong> {product.madeIn || 'Handmade with love'}</li>
            </ul>
          </div>

          <button
            className="modal-inquiry-btn"
            onClick={handleInquiry}
          >
            Inquire About This Piece
          </button>
        </div>
      </div>
    </div>
  )
}
