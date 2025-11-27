// import Header from "@/components/header"
// import Hero from "@/components/hero"
// import Features from "@/components/features"
// import HowItWorks from "@/components/how-it-works"
// import Footer from "@/components/footer"

// export default function Home() {
//   return (
//     <main>
//       <Header />
//       <Hero />
//       <Features />
//       <HowItWorks />
//       <Footer />
//     </main>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import FamilyTreeLoader from "@/components/FamilyTreeLoader"

import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import Footer from "@/components/footer"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000) // 2s loader
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <FamilyTreeLoader />

  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}

