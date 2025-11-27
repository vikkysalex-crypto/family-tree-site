import Header from "@/components/header"
import Footer from "@/components/footer"

export default function About() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">About FamilyTree Platform</h1>
            <p className="text-xl text-foreground/60 mb-8">Preserving family heritage for generations to come</p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-4">
                At FamilyTree Platform, we believe that family history is precious and deserves to be preserved. Our
                mission is to make it easy for families to create, organize, and share their lineage across generations.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We provide a secure, intuitive platform where families can build their family trees, upload memories,
                and maintain their legacy for future generations.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 border border-border rounded-lg bg-card">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Security</h3>
                  <p className="text-foreground/60">
                    Your family data is encrypted and protected with enterprise-grade security.
                  </p>
                </div>
                <div className="p-6 border border-border rounded-lg bg-card">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Simplicity</h3>
                  <p className="text-foreground/60">
                    We believe technology should be simple. Our platform is intuitive and easy to use.
                  </p>
                </div>
                <div className="p-6 border border-border rounded-lg bg-card">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Legacy</h3>
                  <p className="text-foreground/60">
                    Your family stories matter. We help you preserve them for future generations.
                  </p>
                </div>
                <div className="p-6 border border-border rounded-lg bg-card">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Community</h3>
                  <p className="text-foreground/60">
                    We support families in connecting and sharing their heritage with one another.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Us</h2>
              <ul className="space-y-3 text-lg text-foreground/70">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Easy-to-use interface that anyone can master in minutes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Support for multi-generation family trees</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Secure storage with enterprise-grade encryption</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Optional identity verification for authenticity</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Dedicated customer support to help you succeed</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
