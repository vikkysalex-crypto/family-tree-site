const features = [
  {
    title: "Easy Registration",
    description: "Quick and simple signup process. Get started in minutes.",
    icon: "✓",
  },
  {
    title: "Verify Authenticity",
    description: "Get verified with government issued ID in minutes.",
    icon: "📸",
  },
  {
    title: "Multi-Generation Support",
    description: "Get matched with your likely extended family members automatically.",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    title: "Identity Verification",
    description: "Optional ID verification for enhanced security and authenticity.",
    icon: "🔐",
  },
  {
    title: "Secure Storage",
    description: "Your family data is encrypted and securely stored in our servers.",
    icon: "🛡️",
  },
  {
    title: "View Family Tree",
    description: "Beautiful visualization of your family lineage and connections.",
    icon: "🌳",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Powerful Features for Your Family Story</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Simple yet powerful tool to manage and build a strong family history.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg border border-border bg-card hover:bg-accent/5 transition"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-foreground/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
