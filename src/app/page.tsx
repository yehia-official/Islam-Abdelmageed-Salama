import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Hero from '@/components/Hero';
import Resume from '@/components/Resume';
import Workplaces from '@/components/Workplaces';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Resume />
        <Workplaces />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
