'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateItineraryAction } from '@/app/actions';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Wand2, Loader2, Sparkles } from 'lucide-react';
import { Textarea } from './ui/textarea';

const formSchema = z.object({
  location: z.string().min(2, { message: 'Location is required.' }),
  budget: z.enum(['low', 'medium', 'high']),
  interests: z.string().min(3, { message: 'Please list at least one interest.' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ItineraryGenerator() {
  const [itinerary, setItinerary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: '',
      budget: 'medium',
      interests: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setError(null);
    setItinerary(null);
    try {
      const result = await generateItineraryAction(values);
      if (result.itinerary) {
        setItinerary(result.itinerary);
      } else {
        setError('Failed to generate itinerary. Please try again.');
      }
    } catch (e) {
      setError('An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="ai-itinerary" className="py-12 md:py-24 bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline flex items-center">
              <Wand2 className="mr-4 text-primary" />
              AI Itinerary Generator
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get a taste of my planning expertise. Use this AI-powered tool to generate a sample itinerary tailored to your preferences.
            </p>
            <Card className="mt-8 bg-card">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <CardHeader>
                    <CardTitle className="font-headline">Plan Your Trip</CardTitle>
                    <CardDescription>Fill in the details below to get started.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Destination</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Paris, France" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Budget</FormLabel>
                           <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your budget" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="low">Budget-friendly</SelectItem>
                              <SelectItem value="medium">Mid-range</SelectItem>
                              <SelectItem value="high">Luxury</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="interests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Interests</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., history, food, hiking" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" disabled={isLoading} className="w-full">
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-4 w-4" />
                          Generate Itinerary
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </form>
              </Form>
            </Card>
          </div>
          
          <div className="h-full">
            <Card className="h-full min-h-[500px] flex flex-col bg-card">
                <CardHeader>
                    <CardTitle className="font-headline">Your Personalized Itinerary</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  {isLoading && (
                    <div className="flex items-center justify-center h-full flex-grow">
                       <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                  )}
                  {error && <p className="text-destructive p-4">{error}</p>}
                  {itinerary && (
                    <Textarea readOnly value={itinerary} className="h-full flex-grow bg-background resize-none text-sm"/>
                  )}
                   {!isLoading && !itinerary && !error && (
                        <div className="text-center text-muted-foreground h-full flex flex-col justify-center items-center flex-grow">
                            <Wand2 className="w-16 h-16 mb-4" />
                            <p>Your generated itinerary will appear here.</p>
                        </div>
                    )}
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
