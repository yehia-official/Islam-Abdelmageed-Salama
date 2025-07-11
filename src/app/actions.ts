'use server';

import {
  generateTravelItinerary,
  type GenerateTravelItineraryInput,
  type GenerateTravelItineraryOutput,
} from '@/ai/flows/generate-travel-itinerary';

export async function generateItineraryAction(
  input: GenerateTravelItineraryInput
): Promise<GenerateTravelItineraryOutput> {
  // In a real app, you'd add validation and error handling here.
  return await generateTravelItinerary(input);
}
