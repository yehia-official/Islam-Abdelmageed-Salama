'use client';

import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe } from 'lucide-react';

const locations = [
  { lat: 9.7489, lng: -83.7534, name: "Costa Rica Eco-Tours", description: "Expertise in Central American biodiversity and sustainable travel." },
  { lat: 41.9028, lng: 12.4964, name: "Italian Historical Journeys", description: "Deep knowledge of Roman history and Italian culture." },
  { lat: -6.3690, lng: 34.8888, name: "Tanzanian Safari Adventures", description: "Specializing in East African wildlife and luxury safari logistics." },
  { lat: 35.6895, lng: 139.6917, name: "Japan Cultural Immersion", description: "Curating unique cultural experiences across Japan." },
];

export default function InteractiveMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [selected, setSelected] = useState<typeof locations[0] | null>(null);

  if (!apiKey) {
    return (
      <section id="map" className="py-12 md:py-24">
        <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Interactive Expertise Map</h2>
            <p className="mt-4 text-lg text-muted-foreground">Google Maps API Key not configured.</p>
            <p className="mt-2 text-sm text-muted-foreground">Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in your environment variables.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="map" className="py-12 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-headline">Interactive Expertise Map</h2>
        <p className="mt-4 mb-12 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore the regions where I've developed deep expertise and managed successful tourism projects.
        </p>
        <APIProvider apiKey={apiKey}>
          <div style={{ height: '60vh', minHeight: '500px', width: '100%' }} className="rounded-lg overflow-hidden shadow-lg">
            <Map
              defaultCenter={{ lat: 20, lng: 0 }}
              defaultZoom={2}
              mapId="wanderwise-map"
              gestureHandling={'greedy'}
              disableDefaultUI={true}
            >
              {locations.map((loc) => (
                <AdvancedMarker key={loc.name} position={loc} onClick={() => setSelected(loc)}>
                  <Pin background={'hsl(var(--accent))'} glyphColor={'hsl(var(--accent-foreground))'} borderColor={'hsl(var(--accent-foreground))'} />
                </AdvancedMarker>
              ))}

              {selected && (
                <InfoWindow
                  position={{ lat: selected.lat, lng: selected.lng }}
                  onCloseClick={() => setSelected(null)}
                >
                  <Card className="border-none shadow-none max-w-sm bg-card">
                    <CardHeader>
                      <CardTitle className="font-headline flex items-center gap-2 text-base"><Globe className="w-5 h-5 text-primary"/>{selected.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{selected.description}</p>
                    </CardContent>
                  </Card>
                </InfoWindow>
              )}
            </Map>
          </div>
        </APIProvider>
      </div>
    </section>
  );
}
