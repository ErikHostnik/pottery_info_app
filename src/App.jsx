import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import CollectionPage from './pages/CollectionPage'

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ fontFamily: 'serif', color: '#2b2b2b' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection/:collectionId" element={<CollectionPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
