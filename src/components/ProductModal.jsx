import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import './ProductModal.css'

export default function ProductModal({ product, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [zoomed, setZoomed] = useState(false)
  const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 })
  const navigate = useNavigate()

  const closeZoom = useCallback(() => setZoomed(false), [])

  useEffect(() => {
    if (!zoomed) return
    const handleKey = (e) => { if (e.key === 'Escape') closeZoom() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [zoomed, closeZoom])

  if (!product) return null

  const handleZoomMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setZoomOrigin({ x, y })
  }

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
            onClick={() => setZoomed(true)}
            title="Kliknite za povečavo"
          />

          <button
            className="modal-zoom-btn"
            onClick={() => setZoomed(true)}
            title="Povečaj"
          >
            &#x1F50D;
          </button>

          {product.images.length > 1 && (
            <div className="modal-image-counter">
              {currentImageIndex + 1} / {product.images.length}
            </div>
          )}
        </div>

        {zoomed && (
          <div className="zoom-overlay" onClick={closeZoom}>
            <div
              className="zoom-container"
              onMouseMove={handleZoomMove}
              onClick={closeZoom}
              style={{
                backgroundImage: `url(${product.images[currentImageIndex]})`,
                backgroundPosition: `${zoomOrigin.x}% ${zoomOrigin.y}%`,
              }}
            />
            <div className="zoom-hint">Kliknite kjerkoli za zapiranje</div>
          </div>
        )}

        <div className="modal-details">
          <h2>{product.name}</h2>

          <div className="modal-price">{product.price}</div>

          <div className="modal-section">
            <h3>Opis</h3>
            <p className="modal-description">
              {product.description || 'Ta čudovit ročno izdelan keramični kos je narejen z ljubeznijo in skrbnostjo. Vsak izdelek je edinstven in odraža mojstrovo spretnost ter pozornost do detajlov. Popoln za pridih elegance v vašem domu.'}
            </p>
          </div>

          <div className="modal-section">
            <h3>Podrobnosti</h3>
            <ul className="modal-details-list">
              <li><strong>Material:</strong> {product.material || 'Keramika/kamenina'}</li>
              <li><strong>Površina:</strong> {product.finish || 'Glazirana'}</li>
              <li><strong>Vzdrževanje:</strong> {product.care || 'Priporočamo ročno pranje'}</li>
              <li><strong>Izdelava:</strong> {product.madeIn || 'Ročno izdelano z ljubeznijo'}</li>
            </ul>
          </div>

          <button
            className="modal-inquiry-btn"
            onClick={handleInquiry}
          >
            Povprašajte o tem izdelku
          </button>
        </div>
      </div>
    </div>
  )
}
