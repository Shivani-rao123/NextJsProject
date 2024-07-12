// pages/product/[id].jsx
import React from 'react'
import { useRouter } from 'next/router'

const Product = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-4">
      <header className="text-3xl font-bold mb-4">Product Page</header>
      <p className="text-lg">Details for product ID: {id}</p>
    </div>
  )
}

export default Product
