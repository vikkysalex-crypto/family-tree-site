import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Discover Your Family Story and Build Your Lineage
            </h1>
            <p className="text-lg text-foreground/60 text-balance">
              Create a beautiful family history profile, upload precious memories, connect family members across
              generations, and preserve your legacy securely in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link href="/register">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="relative h-96 rounded-lg bg-muted flex items-center justify-center border border-border">
            <svg viewBox="0 0 400 400" className="w-full h-full p-8 text-primary/20" fill="currentColor">
              <circle cx="200" cy="100" r="40" />
              <circle cx="120" cy="200" r="35" />
              <circle cx="280" cy="200" r="35" />
              <circle cx="100" cy="320" r="30" />
              <circle cx="200" cy="320" r="30" />
              <circle cx="300" cy="320" r="30" />

              <line x1="200" y1="140" x2="120" y2="165" stroke="currentColor" strokeWidth="2" />
              <line x1="200" y1="140" x2="280" y2="165" stroke="currentColor" strokeWidth="2" />
              <line x1="120" y1="235" x2="100" y2="290" stroke="currentColor" strokeWidth="2" />
              <line x1="120" y1="235" x2="200" y2="290" stroke="currentColor" strokeWidth="2" />
              <line x1="280" y1="235" x2="200" y2="290" stroke="currentColor" strokeWidth="2" />
              <line x1="280" y1="235" x2="300" y2="290" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
