import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import Home from './pages/Home.tsx'
import Category from './pages/Category.tsx'
import Product from './pages/Product.tsx'
import Checkout from './pages/Checkout.tsx'
import ContextProvider from './context/CartContextProvider.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { element: <Home />, index: true },
      {
        path: 'category',
        children: [
          {
            path: ':categoryName',
            element: <Category />,
          },
        ],
      },
      {
        path: 'product',
        children: [{ path: ':productSlug', element: <Product /> }],
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
)
