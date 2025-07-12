import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TimelinePage() {
  const timelineData = [
    {
      step: 'Step 1 – Research (July–August 2025)',
      tasks: [
        '🎯 Choose your course & university',
        '🔎 Check requirements (GPA, IELTS, language, etc.)',
        '🗂️ Make a shortlist of 5–10 public universities',
        '📌 Pro tip: Use DAAD.de to find English-taught programs',
      ],
    },
    {
      step: 'Step 2 – Prepare Documents (August–September 2025)',
      tasks: [
        '📄 Transcripts + degree certificates (Translated if not in English or German)',
        '✍️ Motivational Letter, CV, LOR',
        '🗣️ English language proof (IELTS/TOEFL)',
        '🎯 Start early — these take time!',
      ],
    },
    {
      step: 'Step 3 – Apply via UniAssist / Direct (September–November 2025)',
      tasks: [
        '📤 Apply to selected universities',
        '💳 Pay UniAssist fee (€75 + €30/additional)',
        '📩 Submit VPD if required',
        '🎯 Apply at least 2–3 months before deadlines',
      ],
    },
    {
      step: 'Step 4 – Blocked Account + Health Insurance (November–December 2025)',
      tasks: [
        '💳 Open a blocked account (Fintiba / Expatrio)',
        '🏦 Deposit around €11,208 (as of 2025)',
        '🩺 Get travel health insurance for visa',
        '🎯 Don’t wait for offer letter — do this early!',
      ],
    },
    {
      step: 'Step 5 – Student Visa Application (December 2025 – January 2026)',
      tasks: [
        '📋 Book visa appointment at German Embassy Kathmandu',
        '🧾 Prepare visa documents (admission letter, blocked account, APS, etc.)',
        '🧳 Plan for visa interview',
        '📌 Visa processing takes 4–8 weeks',
      ],
    },
    {
      step: 'Step 6 – Fly to Germany! (March–April 2026)',
      tasks: [
        '✈️ Book your flight',
        '🏠 Arrange accommodation (student housing / flatshare)',
        '🧾 Carry all original docs + passport + insurance',
        '🎉 Welcome to Germany 🇩🇪',
      ],
    },
  ];

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
            Timeline : From Nepal 🇳🇵 to Germany 🇩🇪
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A step-by-step plan to get your master’s degree abroad for Summer
            2026 Intake.
          </p>
        </div>
        <div className="mx-auto max-w-4xl space-y-8">
          {timelineData.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="font-headline">{item.step}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-none space-y-2 text-muted-foreground">
                  {item.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
