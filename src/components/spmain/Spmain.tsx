"use client";

import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon, Star, StarHalf } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { products } from "@/constant/pro1";





 function Spmain(props:{id:number}) {

  
  console.log("------------>",props)
  

  const data = products[props.id];


  console.log("😎😍",data)
  

  return (
    <div className="w-full mt-[30px] mb-[100px] px-4 md:px-6 lg:px-10">
    <div className="m-auto flex flex-col  lg:flex-row gap-10 lg:justify-center ">
      {/* Product Images Section */}
      <div className="flex flex-col items-center justify-center lg:items-start lg:flex-row gap-[31px] lg:w-1/2">
        <div className="flex flex-row lg:flex-col gap-4">
          {[...Array(4)].map((_, index) => (
            <Image
              key={index}
              src={data.src}
              alt="mainImage"
              width={76}
              height={80}
              className="w-[60px] h-[60px] rounded-xl md:w-[76px] md:h-[80px] object-cover"
            />
          ))}
        </div>
  
        <div className="relative w-full max-w-[300px] md:max-w-[423px] h-[300px] md:h-[500px] rounded-lg">
          <Image
            src={data.src}
            alt="mainImage"
            objectFit="cover"
            fill
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>
  
      {/* Product Details Section */}
      <div className="w-full lg:w-[606px]  space-y-6 ">
        {/* Product Title and Price */}
        <div className="text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{data.name}</h1>
          <p className="text-lg sm:text-2xl text-muted-foreground mt-2">Rs. {data.price}</p>
        </div>
  
        {/* Product Rating and Review */}
        <div className="flex items-center justify-center lg:justify-start gap-2">
          <div className="flex">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFC700] text-primary" />
            ))}
            <StarHalf className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
          </div>
          <span className="text-sm text-muted-foreground">|</span>
          <span className="text-sm text-muted-foreground">5 Customer Review</span>
        </div>
  
        {/* Product Description */}
        <p className="text-sm sm:text-base text-muted-foreground">
          Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
        </p>
  
        {/* Size Selection */}
        <div>
          <h3 className="font-medium mb-2">Size</h3>
          <RadioGroup defaultValue="L" className="flex gap-2 sm:gap-4 justify-center lg:justify-start">
            {["L", "XL", "XS"].map((size) => (
              <div key={size}>
                <RadioGroupItem value={size} id={size} className="peer sr-only" />
                <Label htmlFor={size} className="px-3 py-1 sm:px-4 sm:py-2 border rounded-md hover:bg-yellow-500 cursor-pointer">
                  {size}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
  
        {/* Color Selection */}
        <div>
          <h3 className="font-medium mb-2">Color</h3>
          <div className="flex gap-4 justify-center lg:justify-start">
            {["#816dfa", "black", "#b88e2f"].map((color) => (
              <div key={color} className="w-[30px] h-[30px] rounded-full" style={{ backgroundColor: color }}></div>
            ))}
          </div>
        </div>
  
        {/* Quantity and Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-3 items-center justify-center lg:justify-start">
          <div className="flex items-center border rounded-md w-[100px] sm:w-[123px] h-[48px] sm:h-[64px]">
            <Button variant="ghost" size="icon" className="rounded-none">
              <MinusIcon className="w-4 h-4" />
            </Button>
            <span className="w-8 sm:w-12 text-center">1</span>
            <Button variant="ghost" size="icon" className="rounded-none">
              <PlusIcon className="w-4 h-4" />
            </Button>
          </div>
  
          <Link href="/cart">
            <Button variant={"outline"} className="w-full sm:w-[215px] h-[48px] sm:h-[64px] rounded-md sm:rounded-[15px]">Add To Cart</Button>
          </Link>
  
          
          <Link href={`/productComparison?id=${data.id}`}>
            <Button variant="outline" className="w-full sm:w-[215px] h-[48px] sm:h-[64px] rounded-md sm:rounded-[15px]">+ Compare</Button>
          </Link>



        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Spmain;