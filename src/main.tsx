import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import Home from './pages/Home.tsx'
import Category from './pages/Category.tsx'
import Product from './pages/Product.tsx'

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
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
