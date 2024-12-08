import Image from "next/image"
import { Heart, Share2, BarChart2, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { products } from "@/constant/product"
import Shopmainimage from "@/components/shopMainImage/Shopmainimage"
import Shopbottombar from "@/components/shopBottomBar/Shopbottombar"

export default function ProductGrid() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <>
      <Shopmainimage />

      <div className="container mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} className="group relative overflow-hidden shadow-md">
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                {product.discount && (
                  <Badge className="absolute left-4 top-4 bg-red-500">-{product.discount}%</Badge>
                )}
                {product.isNew && (
                  <Badge className="absolute left-4 top-4 bg-emerald-500">New</Badge>
                )}
                <div className="absolute right-4 top-4 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button size="icon" variant="secondary">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary">
                    <BarChart2 className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.category}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4 p-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                <Button className="w-full md:w-auto">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-2 flex-wrap">
          <Button variant="outline" className="w-12">1</Button>
          <Button variant="outline" className="w-12">2</Button>
          <Button variant="outline" className="w-12">3</Button>
          <Button variant="outline" className="w-20">Next</Button>
        </div>
      </div>

      <Shopbottombar />
    </>
  )
}
