const steps = [
  {
    number: "1",
    title: "Register",
    description: "Create your account with just an email and password.",
  },
  {
    number: "2",
    title: "Add Family Members",
    description: "Build your family tree by adding relatives across generations.",
  },
  {
    number: "3",
    title: "Upload & Share",
    description: "Add photos, stories, and details to make your family tree unique.",
  },
  {
    number: "4",
    title: "Manage Profile",
    description: "Update information, verify identity, and maintain your legacy.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">How It Works</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">Get started in four simple steps</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-card border border-border rounded-lg p-6 text-center h-full">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-foreground/60">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-3 w-6 h-0.5 bg-primary/30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
