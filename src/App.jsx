import React from 'react'
import Navbar from './components/Navbar'
import ProductsScreen from './components/product/product'
import { CartProvider } from './cartContext/cartContext'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import About from './Pages/About'
import Homepage from './Pages/Homepage'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Layout from './Layout'



const router = createBrowserRouter([
{path:"/" , 
element:<Layout />,
children:[{path:"/home" , element:< Homepage />},
{path:"/about" , element:< About />},
{path:"/store" , element:< ProductsScreen />},
{path:"/cart" , element:<Cart />}
]
},
])

function App() {

  return (<>
  <RouterProvider router={router}>
  <CartProvider>
  <Navbar/>
  <ProductsScreen />
  </CartProvider>
  </RouterProvider>
  </>
  )
}

export default App
