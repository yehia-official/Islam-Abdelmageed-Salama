'use server';
/**
 * @fileOverview Generates a personalized travel itinerary based on user inputs.
 *
 * - generateTravelItinerary - A function that generates a travel itinerary.
 * - GenerateTravelItineraryInput - The input type for the generateTravelItinerary function.
 * - GenerateTravelItineraryOutput - The return type for the generateTravelItinerary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTravelItineraryInputSchema = z.object({
  location: z.string().describe('The desired travel location.'),
  budget: z.string().describe('The budget for the trip (e.g., \'low\', \'medium\', \'high\').'),
  interests: z.string().describe('The interests of the traveler (e.g., \'history\', \'food\', \'adventure\').'),
});
export type GenerateTravelItineraryInput = z.infer<typeof GenerateTravelItineraryInputSchema>;

const GenerateTravelItineraryOutputSchema = z.object({
  itinerary: z.string().describe('A personalized travel itinerary based on the user inputs.'),
});
export type GenerateTravelItineraryOutput = z.infer<typeof GenerateTravelItineraryOutputSchema>;

export async function generateTravelItinerary(input: GenerateTravelItineraryInput): Promise<GenerateTravelItineraryOutput> {
  return generateTravelItineraryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTravelItineraryPrompt',
  input: {schema: GenerateTravelItineraryInputSchema},
  output: {schema: GenerateTravelItineraryOutputSchema},
  prompt: `You are a travel expert. Generate a personalized travel itinerary based on the user's desired location, budget, and interests.

Location: {{{location}}}
Budget: {{{budget}}}
Interests: {{{interests}}}

Itinerary:`,
});

const generateTravelItineraryFlow = ai.defineFlow(
  {
    name: 'generateTravelItineraryFlow',
    inputSchema: GenerateTravelItineraryInputSchema,
    outputSchema: GenerateTravelItineraryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
