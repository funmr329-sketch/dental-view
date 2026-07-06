import { Hero } from '@/components/ui/Hero';
import { Services } from '@/components/ui/Services';
import { About } from '@/components/ui/About';
import { Team } from '@/components/ui/Team';
import { Testimonials } from '@/components/ui/Testimonials';
import { Contact } from '@/components/ui/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
}