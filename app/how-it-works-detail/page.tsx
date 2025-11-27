import Header from "@/components/header"
import Footer from "@/components/footer"

const detailedSteps = [
  {
    number: "1",
    title: "Create Your Account",
    description:
      "Sign up with your email address and create a secure password. Verify your email and you're ready to go.",
    details: ["Quick 2-minute signup process", "Secure password protection", "Email verification for security"],
  },
  {
    number: "2",
    title: "Set Up Your Profile",
    description:
      "Complete your personal information and upload a profile picture to get started building your family tree.",
    details: ["Add personal information", "Upload profile photo", "Add a brief bio"],
  },
  {
    number: "3",
    title: "Add Family Members",
    description:
      "Start building your family tree by adding family members. Connect parents, children, and grandparents.",
    details: ["Add parents and grandparents", "Include children and siblings", "Link family relationships"],
  },
  {
    number: "4",
    title: "Upload Media & Stories",
    description: "Make your family tree come alive by adding photos, documents, and stories for each family member.",
    details: ["Upload up to 3 images per member", "Add family stories and memories", "Document important dates"],
  },
  {
    number: "5",
    title: "Verify Identity (Optional)",
    description: "Optionally verify your identity to enhance the authenticity and credibility of your family tree.",
    details: ["Secure ID verification process", "Privacy-focused verification", "Enhanced trust badge"],
  },
  {
    number: "6",
    title: "View & Share Your Legacy",
    description:
      "Visualize your complete family tree and optionally invite other family members to view and contribute.",
    details: ["Beautiful family tree visualization", "Share with family members", "Manage privacy settings"],
  },
]

export default function HowItWorksDetail() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">How It Works</h1>
            <p className="text-xl text-foreground/60">A step-by-step guide to building and managing your family tree</p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {detailedSteps.map((step, index) => (
                <div key={step.number} className="grid md:grid-cols-4 gap-6 pb-12 border-b border-border last:border-0">
                  <div className="md:col-span-1">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-lg text-foreground/60 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex gap-3 text-foreground/70">
                          <span className="text-accent font-semibold">→</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
