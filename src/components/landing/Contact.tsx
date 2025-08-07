import { ContactForm } from './ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    details: ['+254711879129', '+254738219953'],
  },
  {
    icon: Mail,
    details: ['info@hempongroup.co.ke', 'admin@hempongroup.co.ke'],
  },
  {
    icon: MapPin,
    details: ['Mombasa, Kenya'],
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Get a professional website today</h2>
          <p className="mt-4 text-foreground/80">
            Stop wasting time and money. Get a professional website today, Happiness guaranteed!
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="space-y-8 lg:col-span-2">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  {item.details.map((detail) => (
                    <p key={detail} className="text-foreground/90">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
             <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                   <a href="https://maps.app.goo.gl/69WVyjyQaKheYG866" target="_blank" rel="noopener noreferrer" className="text-foreground/90 hover:text-primary transition-colors">
                      Mombasa, Kenya
                   </a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
