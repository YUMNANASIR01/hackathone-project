"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { MinusIcon, PlusIcon, Star, StarHalf } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface ProductImage {
  src: string
  alt: string
}

export default function Spmain() {
  const [selectedImage, setSelectedImage] = React.useState(0)
  const [quantity, setQuantity] = React.useState(1)

  const productImages: ProductImage[] = [
    { src: "/sp1.png", alt: "Asgaard sofa front view" },
    { src: "/sp2.png", alt: "Asgaard sofa side view" },
    { src: "/sp3.png", alt: "Asgaard sofa detail view" },
    { src: "/sp4.png", alt: "Asgaard sofa back view" },
  ]

  return (
    <div className="container mx-auto px-4 py-8 mb-[58px]">
      {/* Main content grid, responsive for mobile and tablet */}
      <div className="grid gap-8 md:grid-cols-2">
        
        {/* Image section (Thumbnails + Main Image) */}
        <div className="flex gap-4 flex-col md:flex-row">
          {/* Thumbnails for product images */}
          <div className="flex gap-4 overflow-x-auto md:flex-col">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={cn(
                  "border-2 rounded-lg overflow-hidden",
                  selectedImage === index ? "border-primary" : "border-transparent"
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main product image */}
          <div className="flex-1">
            <Image
              src={productImages[selectedImage].src}
              alt={productImages[selectedImage].alt}
              width={600}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Product details section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold">Asgaard sofa</h1>
            <p className="text-2xl text-muted-foreground mt-2">Rs. 250,000.00</p>
          </div>

          {/* Product rating and review section */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FFC700] text-primary border-b-[1px] border-[#FFC700] gap-[6px]" />
              ))}
              <StarHalf className="w-5 h-5 fill-primary text-primary gap-[6px] border-b-[1px] border-[#FFC700]" />
            </div>
            <span className="text-sm text-muted-foreground">5 Customer Review</span>
          </div>

          {/* Product description */}
          <p className="text-muted-foreground">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a
            well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>

          <div className="space-y-4">
            {/* Size selection section */}
            <div>
              <h3 className="font-medium mb-2">Size</h3>
              <RadioGroup defaultValue="L" className="flex gap-4">
                <div>
                  <RadioGroupItem value="L" id="L" className="peer sr-only" />
                  <Label
                    htmlFor="L"
                    className="px-4 py-2 border rounded-md peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
                  >
                    L
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="XL" id="XL" className="peer sr-only" />
                  <Label
                    htmlFor="XL"
                    className="px-4 py-2 border rounded-md peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
                  >
                    XL
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="XS" id="XS" className="peer sr-only" />
                  <Label
                    htmlFor="XS"
                    className="px-4 py-2 border rounded-md peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
                  >
                    XS
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Color selection section */}
            <div>
              <h3 className="font-medium mb-2">Color</h3>
              <RadioGroup defaultValue="purple" className="flex gap-4">
                <div>
                  <RadioGroupItem value="purple" id="purple" className="peer sr-only" />
                  <Label
                    htmlFor="purple"
                    className="w-8 h-8 rounded-full bg-purple-500 peer-data-[state=checked]:ring-2 ring-offset-2 ring-purple-500"
                  />
                </div>
                <div>
                  <RadioGroupItem value="black" id="black" className="peer sr-only" />
                  <Label
                    htmlFor="black"
                    className="w-8 h-8 rounded-full bg-black peer-data-[state=checked]:ring-2 ring-offset-2 ring-black"
                  />
                </div>
                <div>
                  <RadioGroupItem value="gold" id="gold" className="peer sr-only" />
                  <Label
                    htmlFor="gold"
                    className="w-8 h-8 rounded-full bg-yellow-700 peer-data-[state=checked]:ring-2 ring-offset-2 ring-yellow-700"
                  />
                </div>
              </RadioGroup>
            </div>

            {/* Quantity and Cart Buttons */}
            <div className="flex items-center gap-6">
              <div className="flex items-center border rounded-md w-[123px] h-[64px]">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="rounded-none"
                >
                  <MinusIcon className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="rounded-none "
                >
                  <PlusIcon className="w-4 h-4" />
                </Button>
              </div>
              <Button variant="outline" className="w-[215px] h-[64px] rounded-[15px]">Add To Cart</Button>
              <Button variant="outline" className="w-[215px] h-[64px] rounded-[15px]">+ Compare</Button>
            </div>
          </div>

          {/* Product details like SKU, Category, Tags, and Share buttons */}
          <div className="border-t pt-6 space-y-2">
            <div className="flex gap-2">
              <span className="text-muted-foreground">SKU:</span>
              <span>SS001</span>
            </div>
            <div className="flex gap-2">
              <span className="text-muted-foreground">Category:</span>
              <span>Sofas</span>
            </div>
            <div className="flex gap-2">
              <span className="text-muted-foreground">Tags:</span>
              <span>Sofa, Chair, Home, Shop</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-muted-foreground">Share:</span>
              <div className="flex gap-2">
                <Link href="#" className="hover:text-primary">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.878c4.78-.751 8.438-4.887 8.438-9.878z" clipRule="evenodd"></path>
                  </svg>
                </Link>
                {/* Add other social icons */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
