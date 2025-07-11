import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Mail, Phone, Home, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-24 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-headline">Get In Touch</h2>
        <p className="mt-4 mb-12 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          I'm open to new opportunities and would love to hear from you.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-lg bg-card">
                <CardHeader>
                    <CardTitle className="font-headline">Contact Form</CardTitle>
                    <CardDescription>Send me a message directly.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <Input type="text" placeholder="Your Name" required/>
                        <Input type="email" placeholder="Your Email" required/>
                        <Textarea placeholder="Your Message" required rows={5}/>
                        <Button type="submit" className="w-full">
                            <Send className="mr-2 h-4 w-4"/>
                            Send Message
                        </Button>
                    </form>
                </CardContent>
            </Card>
             <div className="space-y-6">
                <Card className="shadow-lg bg-card">
                    <CardHeader>
                        <CardTitle className="font-headline">Contact Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-base md:text-lg">
                        <a href="mailto:captainmayo1994@gmail.com" className="flex items-center gap-4 hover:text-primary transition-colors">
                            <Mail className="w-6 h-6 text-primary" />
                            <span>captainmayo1994@gmail.com</span>
                        </a>
                        <a href="tel:+01090557799" className="flex items-center gap-4 hover:text-primary transition-colors">
                            <Phone className="w-6 h-6 text-primary" />
                            <span>01090557799</span>
                        </a>
                        <div className="flex items-center gap-4">
                            <Home className="w-6 h-6 text-primary" />
                            <span>Mansoura, Egypt</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
