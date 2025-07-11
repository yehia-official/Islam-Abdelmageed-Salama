import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* background video */}
      <video
        src="videos/Rixos Premium-Alamein.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-20 container px-4 md:px-6">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter">
          Islam Abdelmageed Salama
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-neutral-200 font-body">
          A highly organized and dedicated front desk professional with a solid background in hospitality, offering a wealth of experience in managing front office operations and delivering exceptional guest services.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#resume">View My Resume</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
