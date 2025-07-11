import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Eco-Adventure in Costa Rica",
    description: "Managed a 10-day eco-tour focusing on sustainable travel, biodiversity, and community engagement. Achieved a 98% satisfaction rate.",
    image: "https://placehold.co/600x400.png",
    aiHint: "costa rica rainforest",
    tags: ["Eco-Tourism", "Adventure", "Sustainability"],
  },
  {
    title: "Historical Tour of Rome",
    description: "Designed and led a comprehensive historical tour of Rome, covering major landmarks and hidden gems. Praised for depth of knowledge and storytelling.",
    image: "https://placehold.co/600x400.png",
    aiHint: "rome colosseum",
    tags: ["Cultural", "History", "Europe"],
  },
  {
    title: "Luxury Safari in Tanzania",
    description: "Coordinated a high-end safari experience, including luxury accommodations, private game drives, and cultural visits with the Maasai people.",
    image: "https://placehold.co/600x400.png",
    aiHint: "tanzania safari",
    tags: ["Luxury", "Wildlife", "Africa"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-24 bg-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-headline">Past Projects</h2>
        <p className="mt-4 mb-12 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          A selection of tours and projects I've proudly managed, showcasing a commitment to quality and unforgettable experiences.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader className="p-0">
                <Image src={project.image} alt={project.title} data-ai-hint={project.aiHint} width={600} height={400} className="w-full h-auto object-cover" />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => <Badge key={tag} variant="outline" className="border-accent text-accent">{tag}</Badge>)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
