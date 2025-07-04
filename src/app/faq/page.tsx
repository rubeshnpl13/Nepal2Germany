import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "What is a 'Blocked Account' (Sperrkonto) and why do I need it?",
    answer:
      'A blocked account is a special bank account required for non-EU students to prove they have sufficient funds to cover their living expenses in Germany for one year. The German government sets the required amount annually. You must deposit this amount before applying for your student visa. Each month, you can withdraw a fixed portion of the total sum.',
  },
  {
    question: 'What is Uni-Assist and do I have to apply through it?',
    answer:
      'Uni-Assist is a centralized admissions portal for international students in Germany. Many universities use it to pre-check international applications for formal requirements. You need to check the specific application procedure for each university you apply to. Most universities require you to go through Uni-Assist, while some accept direct applications.',
  },
  {
    question:
      'What are the most important things to prepare for the German student visa interview?',
    answer:
      'For the visa interview at the German Embassy in Kathmandu, be prepared to discuss your study plans, reasons for choosing Germany and your specific university, and how you plan to finance your stay. Key documents include your passport, university admission letter, proof of financial means (blocked account confirmation), health insurance, and your academic documents. It is crucial to be genuine and clear about your intentions.',
  },
  {
    question: 'Can I work in Germany as a student?',
    answer:
      'Yes, international students are allowed to work in Germany. You can work for up to 120 full days or 240 half days per year. This helps in covering living expenses. However, you cannot fully rely on this income to finance your studies, as the blocked account is a mandatory requirement.',
  },
  {
    question:
      'Do I need to learn German for studying in an English-taught Master’s program?',
    answer:
      'You don’t need German to study in English-taught programs. However, learning German is strongly recommended for daily life, part-time jobs, and internships. Basic German (A1/A2) can significantly improve your integration and job prospects in Germany.',
  },
  {
    question: 'When should I start preparing for my Master’s application?',
    answer:
      'Ideally, start at least 6-10 months in advance. Begin with researching programs, checking eligibility, preparing documents (transcripts, English test), and planning finances. Application deadlines for winter intake are usually between March and July, and for summer intake between September and January.',
  },
  {
    question: 'What are the main intakes for Masters programs in Germany?',
    answer:
      'The two main intakes are: Winter Semester (starts in October): Main intake with more course options. Summer Semester (starts in April). Most Nepali students apply for the winter semester due to broader options and smoother timelines.',
  },
  {
    question:
      'How long does it take to process a German student visa in Nepal?',
    answer:
      'Visa processing at the German Embassy in Kathmandu can take 6–10 weeks after your visa interview. Book your appointment early, and make sure all documents (especially APS and blocked account) are ready before applying.',
  },
  {
    question: 'Can I stay in Germany after completing my Master’s degree?',
    answer:
      'Yes. After graduation, you can apply for an 18-month job-seeking visa to look for a job related to your degree. Once employed in a qualified job, you can apply for a Blue Card or residence permit for work purposes.',
  },
];

export default function FaqPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Find answers to the most common questions about studying in Germany.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
