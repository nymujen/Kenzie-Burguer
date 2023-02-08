import { useEffect, useState } from 'react'
import { api } from './services/api.js'
import { Header } from './components/Header/Header.jsx'
import { ProductCard } from './components/ProductCard/ProductCard.jsx'
import { CartCard } from './components/CartCard/CartCard.jsx'
import { GlobalStyle } from './GlobalStyles.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [ cart, setCart ] = useState([])
  const [ products, setProducts ] = useState([])
  const [ filter, setFilter ] = useState([])

  useEffect(() => {
    async function getProducts(){
      try {
        const response = await api.get('products')
        setProducts(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [])

  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer />
      <Header setFilter={setFilter} filter={filter} products={products} />
      <main>
        <ProductCard products={products} cart={cart} setCart={setCart} filter={filter} />
        <CartCard cart={cart} setCart={setCart} />
      </main>
    </div>
  )
}

export default App
