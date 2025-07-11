import Link from 'next/link';
import { User, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <User className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">Islam Abdelmageed Salama</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#resume" className="transition-colors hover:text-primary">Resume</Link>
          <Link href="#workplaces" className="transition-colors hover:text-primary">Experience</Link>
          <Link href="#contact" className="transition-colors hover:text-primary">Contact</Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
           <nav className="hidden md:flex items-center space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
               <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
               <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
           </nav>
        </div>
      </div>
    </header>
  );
}
