// pages/product/[id].jsx
import React from 'react'
import { useRouter } from 'next/router'

const Product = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-3xl font-bold">Product Page</h1>
    </header>
    <main className="flex flex-col items-center justify-center flex-auto p-4">
      <p className="text-lg">Details of your product</p>
    </main>
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p></p>
    </footer>
  </div>
  )
}

export default Product
