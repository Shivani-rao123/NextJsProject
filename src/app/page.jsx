import React from 'react'

const Page = () => {
  return (
    <>
      <header className="bg-gray-800 p-4 text-white">
        <h1 className="text-2xl font-bold">Welcome to My Page</h1>
      </header>
      
      <main className="flex-auto p-4 bg-gray-100 min-h-screen">
        <h1 className="text-xl font-semibold">Shivani</h1>
        <p className="mt-2">
          Hey there! I am Shivani. I have learned to create a Next.js app
          and also learned about routing, adding folders, and Tailwind CSS.
        </p>
      </main>
      
      <footer className="bg-gray-800 p-4 mt-4 text-white text-center">
        <p>&copy; 2024 Shivani. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Page
