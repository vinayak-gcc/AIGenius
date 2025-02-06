import Hero from "./Home/page";
import About from './About/page';
import Strength from './Strengths/page';
import Services from './Services/page';
import Testimonials from './Testimonials/page';
import Contact from './Contact/page';
import Highlights from './Highlights/page';
import Advantages from './Advantages/page';
import Navigation from '@/components/Home/Navigation';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="strengths"><Strength /></section>
      <section id="services"><Services /></section>
      <section id="highlights"><Highlights /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="advantages"><Advantages /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}
