import Header from './components/Header'
import Info from './components/Info'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ fontFamily: 'serif', color: '#2b2b2b' }}>
      <Header />
      <Info />
      <ProductGrid />
      <Footer />
    </div>
  )
}
