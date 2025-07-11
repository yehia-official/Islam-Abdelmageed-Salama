import { User } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <User className="h-5 w-5 text-primary" />
          <p className="text-sm font-semibold font-headline">Islam Abdelmageed Salama</p>
        </div>
        <p className="text-sm text-muted-foreground mt-4 md:mt-0">
          © {new Date().getFullYear()} Islam Abdelmageed Salama. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
