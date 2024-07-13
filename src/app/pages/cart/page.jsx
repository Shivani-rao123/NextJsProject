// pages/cart/page.jsx
import React from 'react'

const Cart = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-3xl font-bold">Cart Page</h1>
    </header>
    <main className="flex flex-col items-center justify-center flex-auto p-4">
      <p className="text-lg">View your shopping cart</p>
    </main>
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p></p>
    </footer>
  </div>
  )
}

export default Cart
