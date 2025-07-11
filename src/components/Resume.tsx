import { Button } from "@/components/ui/button";
import { Download, Briefcase, Award, Star, Languages, GraduationCap, Wrench } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const personalSkills = [
  "Team Leadership",
  "Problem-Solving",
  "Time Management",
  "Attention to Detail",
  "Communication",
  "Adaptability",
];

const technicalSkills = [
  "Opera Five System",
  "Opera Cloud System",
  "Amadeus System",
  "Complaint Resolution Tools",
  "Guest Communication Systems",
  "Scheduling and Coordination Systems",
  "Data Entry & Record Management",
  "Front Desk Operations",
  "Microsoft Office Suite",
];

const experiences = [
    {
        title: "Acting Front Desk Shift Leader",
        company: "Rixos Premium Alamein",
        period: "March 2024 - Present",
        description: "Leading and coordinating the front desk team during shifts to ensure smooth operations. Overseeing daily front desk functions, ensuring seamless guest experience. Handling and resolving guest complaints and issues efficiently and professionally."
    },
    {
        title: "Front Desk Agent",
        company: "Rixos Premium Alamein",
        period: "Aug 2023 - Mar 2024",
        description: "Welcoming and assisting guests as they enter the hotel. Answering phone calls, directing inquiries, and managing email communications. Conducting check-in and check-out procedures smoothly and professionally."
    },
    {
        title: "Front Desk Agent",
        company: "Steigenberger Alcazar, Sharm El Sheikh",
        period: "May 2022 - July 2023",
        description: "Welcoming and assisting guests as they enter the hotel. Answering phone calls, directing inquiries, and managing email communications. Conducting check-in and check-out procedures smoothly and professionally."
    },
    {
        title: "Operator",
        company: "Parotel Lagoon Resort, Sharm El Sheikh",
        period: "Nov 2021 - May 2022",
        description: "Welcoming and assisting guests as they enter the hotel. Answering phone calls, directing inquiries, and managing email communications. Conducting check-in and check-out procedures smoothly and professionally."
    }
];

const training = [
    "Amadeus Course - Egypt Air",
    "Front Office Supervisor Skills Training"
];

const languages = [
    { lang: "Arabic", level: "Native" },
    { lang: "English", level: "Very Good (Spoken, Written, and Understanding)" }
];

export default function Resume() {
  return (
    <section id="resume" className="py-12 md:py-24 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 items-center mb-16">
          <div className="md:col-span-1 flex justify-center">
            <img
              src="images/Picsart_25-07-11_11-56-10-228.jpg"
              alt="Islam Abdelmageed Salama"
              data-ai-hint="portrait person"
              className="rounded-full object-cover w-64 h-64 md:w-80 md:h-80 shadow-lg border-4 border-card"
            />
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">About Me</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A highly organized and dedicated front desk professional with a solid background in hospitality. I offer a wealth of experience in managing front office operations, leading teams, and delivering the exceptional guest services that define premier hotel experiences. I am known for maintaining a welcoming and professional atmosphere, ensuring a smooth workflow, and upholding the highest service standards. Currently, I am thriving in a leadership role where I focus on enhancing every guest's experience through efficient processes, proactive problem-solving, and effective team coordination.
            </p>
            <Button asChild className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="/Islam_Abdelmageed_Salama_CV.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Full CV
              </a>
            </Button>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
            <div>
                <h3 className="text-2xl font-bold font-headline flex items-center mb-6"><Briefcase className="mr-3 text-primary"/>Work Experience</h3>
                <div className="space-y-8 relative before:absolute before:inset-y-0 before:w-px before:bg-border before:left-4">
                    {experiences.map(exp => (
                        <div key={exp.title + exp.company} className="relative pl-12">
                            <div className="absolute left-[11px] top-1 w-2.5 h-2.5 rounded-full bg-primary mt-1.5 border-2 border-background" />
                            <p className="font-semibold text-lg">{exp.title}</p>
                            <p className="text-sm text-muted-foreground">{exp.company} | {exp.period}</p>
                            <p className="mt-2 text-base">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="space-y-12">
                <div>
                    <h3 className="text-2xl font-bold font-headline flex items-center mb-6"><GraduationCap className="mr-3 text-primary"/>Education</h3>
                     <Card className="bg-card">
                        <CardContent className="p-4">
                            <p className="font-semibold text-lg">Bachelor of Tourism Studies</p>
                            <p className="text-sm text-muted-foreground">Faculty of Tourism and Hotels, Abo Qier Institute | 2014 - 2018</p>
                            <p className="mt-1 text-base">Alexandria University</p>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <h3 className="text-2xl font-bold font-headline flex items-center mb-6"><Award className="mr-3 text-primary"/>Training</h3>
                    <div className="space-y-4">
                        {training.map((item) => (
                            <Card key={item} className="bg-card">
                                <CardContent className="p-4 flex items-center">
                                    <Star className="mr-4 h-5 w-5 text-accent" />
                                    <span className="font-medium">{item}</span>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
                 <div>
                    <h3 className="text-2xl font-bold font-headline flex items-center mb-6"><Languages className="mr-3 text-primary"/>Languages</h3>
                    <div className="space-y-4">
                        {languages.map((item) => (
                            <Card key={item.lang} className="bg-card">
                                <CardContent className="p-4 flex items-center">
                                    <span className="font-medium w-24">{item.lang}:</span>
                                    <span>{item.level}</span>
                                 </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-2xl font-bold font-headline flex items-center mb-6"><Wrench className="mr-3 text-primary"/>Technical Skills</h3>
                <ul className="space-y-3">
                    {technicalSkills.map((skill) => (
                        <li key={skill} className="flex items-center text-lg p-3 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-colors group">
                           <Star className="mr-4 h-5 w-5 text-accent group-hover:text-primary-foreground" />
                           <span>{skill}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-2xl font-bold font-headline flex items-center mb-6"><Star className="mr-3 text-primary"/>Personal Skills</h3>
                 <ul className="space-y-3">
                    {personalSkills.map((skill) => (
                        <li key={skill} className="flex items-center text-lg p-3 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-colors group">
                           <Star className="mr-4 h-5 w-5 text-accent group-hover:text-primary-foreground" />
                           <span>{skill}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

      </div>
    </section>
  );
}
