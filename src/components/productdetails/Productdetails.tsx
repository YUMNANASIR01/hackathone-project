"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function ProductDetails() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Tabs for Description, Additional Information, and Reviews */}
      <Tabs defaultValue="description" className="w-full">
        {/* Tab navigation list with 3 items */}
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="description" className="text-lg">Description</TabsTrigger>
          <TabsTrigger value="additional" className="text-lg">Additional Information</TabsTrigger>
          <TabsTrigger value="reviews" className="text-lg">Reviews [5]</TabsTrigger>
        </TabsList>

        {/* Tab content for "Description" */}
        <TabsContent value="description" className="space-y-6">
          <div className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Embodying the raw, wayward spirit of rock &apos;n&apos; roll, the Kilburn portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange
              and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls
              to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
            </p>
          </div>

          {/* Grid layout for images, responsive with 1 column on small screens and 2 columns on medium and larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#fdf6f0] rounded-lg p-8">
              <Image
                src="/sofa.png"
                alt="Sofa straight view"
                width={605}
                height={348}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="bg-[#fdf6f0] rounded-lg p-8">
              <Image
                src="/sofa.png"
                alt="Sofa L-shaped view"
                width={605}
                height={348}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </TabsContent>

        {/* Tab content for "Additional Information" */}
        <TabsContent value="additional">
          <div className="prose max-w-none">
            <p className="text-gray-600">Additional product information will be displayed here.</p>
          </div>
        </TabsContent>

        {/* Tab content for "Reviews" */}
        <TabsContent value="reviews">
          <div className="prose max-w-none">
            <p className="text-gray-600">Product reviews will be displayed here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
