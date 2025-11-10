import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to see results?",
    answer:
      "Most users see guaranteed growth within 30 days. Our platform is designed for speed—from publishing to indexing to ranking. Average time to first results is just minutes after setup.",
  },
  {
    question: "Do I need to know coding or technical SEO?",
    answer:
      "Not at all. Abun is built for everyone. Whether you're a solopreneur, agency, or enterprise team, our zero-setup-time approach means you can start scaling immediately.",
  },
  {
    question: "How much does it cost?",
    answer:
      "We offer transparent, simple pricing with a single plan that includes everything. No hidden fees, no per-feature costs. Free accounts are available for a limited time.",
  },
  {
    question: "Is my content secure and private?",
    answer:
      "Yes. We use enterprise-grade security and are privacy-first by design. Your data is never used to train our models. Read our security details on our integrations page.",
  },
  {
    question: "What if I have questions or need support?",
    answer:
      "Our community-driven team is always available. We release new tools monthly based on user feedback. Great support is built into every plan.",
  },
  {
    question: "Can I integrate Abun with my existing tools?",
    answer:
      "Absolutely. We integrate with all the latest tech including WordPress, HubSpot, Zapier, and more. View our full integration list to see what works with your stack.",
  },
]

export function FaqSection() {
  return (
    <section className="border-y bg-secondary/50">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-balance text-center text-3xl font-semibold md:text-4xl">{"Frequently Asked Questions"}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          {"Have questions? We've got answers. Read on to learn more about Abun."}
        </p>

        <div className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
