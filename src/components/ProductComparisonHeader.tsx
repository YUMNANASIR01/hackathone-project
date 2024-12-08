import { ChevronRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function ProductComparison() {
  return (
    <div className="relative h-[316px] w-full overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0">
        <Image
          src="/blogMainImage.png"
          alt="Background"
          width={1440}
          height={316}
          className="h-full w-full object-cover blur-sm"
          priority
        />
      </div>

      {/* Content Overlay: This layer holds the content on top of the background image */}
      <div className="relative flex h-full flex-col items-center justify-center p-4 md:p-8">
        {/* Logo Section */}
        <div className="mb-4">
          <Image
            src="/logo1.png"
            alt="Meubel House Logo"
            width={77}
            height={77}
            className="h-[77px] w-[77px]"
          />
        </div>

        {/* Title */}
        <h1 className="mb-8 text-center font-poppins text-4xl font-medium leading-tight text-black md:text-5xl">
          Product Comparison
        </h1>

        {/* Breadcrumb Navigation */}
        <nav className="absolute bottom-5 flex items-center gap-2 font-poppins text-base">
          <Link href="/" className="font-medium text-black hover:underline">
            Home
          </Link>
          <ChevronRight className="h-5 w-5 rotate-0 text-black" />
          <span className="font-light text-black">Comparison</span>
        </nav>
      </div>
    </div>
  )
}
