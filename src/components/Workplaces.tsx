import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const workplaces = [
  {
    title: "Rixos Premium Alamein",
    role: "Acting Front Desk Shift Leader",
    description:
      "Led the front desk team, managed daily operations, and resolved guest issues to ensure a seamless and high-quality guest experience.",
    image: "images/rixos.jpg",
    aiHint: "luxury hotel reception",
    tags: ["Leadership", "Guest Relations", "Opera Cloud"],
  },
  {
    title: "Steigenberger Alcazar, Sharm El Sheikh",
    role: "Front Desk Agent",
    description:
      "Managed check-in/check-out, handled guest inquiries, and provided comprehensive assistance to ensure guest satisfaction at a high-volume luxury resort.",
    image: "images/Steigenberger.jpg",
    aiHint: "resort lobby evening",
    tags: ["Front Desk Operations", "Customer Service", "Luxury Hospitality"],
  },
  {
    title: "Parotel Lagoon Resort, Sharm El Sheikh",
    role: "Operator",
    description:
      "Served as the central point of communication, managing all incoming calls, directing inquiries, and coordinating guest services efficiently.",
    image: "/images/parotel-lagoon-resort.jpg",
    aiHint: "hotel telephone operator",
    tags: ["Communication", "Coordination", "Guest Services"],
  },
];

export default function Workplaces() {
  return (
    <section id="workplaces" className="py-12 md:py-24 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-headline">
          My Experience
        </h2>
        <p className="mt-4 mb-12 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          A showcase of the professional environments where I've honed my skills
          and contributed to delivering exceptional hospitality.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workplaces.map((place) => (
            <Card
              key={place.title}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card"
            >
              <CardHeader className="p-0">
                <img
                  src={place.image}
                  alt={place.title}
                  data-ai-hint={place.aiHint}
                  className="w-full h-56 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="font-headline text-xl mb-2 font-bold">
                  {place.title}
                </h3>
                <div className="flex items-center text-sm text-primary mb-3 font-semibold">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span>{place.role}</span>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  {place.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {place.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="font-normal"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
