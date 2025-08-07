import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  { text: 'Shared Goals and Vision', description: 'We align our efforts with your business objectives, ensuring the website reflects your brand.' },
  { text: 'Knowledge Sharing and Training', description: 'Our team empowers you with the tools to manage and maximize your website’s potential.' },
  { text: 'Focus on Quality Assurance', description: 'Every project undergoes rigorous testing to guarantee flawless performance and user experience.' },
  { text: 'Feedback and Recognition', description: 'Your input is our driving force. We actively listen to your feedback and value collaboration.' },
  { text: 'Customized Solutions', description: 'We tailor every website to your unique needs, combining creativity with functionality.' },
  { text: 'Timely Delivery and Support', description: 'We respect your timelines and ensure seamless support throughout and after the project.' },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
              We help teams build the business of their dreams
            </h2>
            <p className="mt-4 text-foreground/80">
              When you choose HEMPON GROUP, you’re not just hiring a web design service—you’re forming a partnership with a team of dedicated professionals who are genuinely invested in your success.
            </p>
            <p className="mt-4 text-foreground/70">Here’s what sets us apart:</p>
            <ul className="mt-6 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit.text} className="flex items-start">
                  <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <span className="font-bold text-foreground">{benefit.text}</span>
                    <p className="text-foreground/70 text-sm">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
             <p className="mt-6 text-foreground/70">
              With HEMPON GROUP, you’re not just getting a website—you’re gaining a partner committed to your growth and success.
            </p>
            <Button size="lg" asChild className="mt-8 bg-primary hover:bg-primary/90">
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/600x600.png"
              alt="Team collaborating on a project"
              width={600}
              height={600}
              className="rounded-lg shadow-xl"
              data-ai-hint="team collaboration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
