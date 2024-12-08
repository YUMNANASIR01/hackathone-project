import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ProductSpec {
  label: string
  values: string[]
}

export default function List() {
  // Product specifications, dimensions, and warranty details
  const specifications: ProductSpec[] = [
    {
      label: "Sales Package",
      values: ["1 sectional sofa", "1 Three Seater, 2 Single Seater"]
    },
    {
      label: "Model Number",
      values: ["TFCBLIGRBL6SRHS", "DTUBLIGRBL568"]
    },
    {
      label: "Secondary Material",
      values: ["Solid Wood", "Solid Wood"]
    },
    {
      label: "Configuration",
      values: ["L-shaped", "L-shaped"]
    },
    {
      label: "Upholstery Material",
      values: ["Fabric + Cotton", "Fabric + Cotton"]
    },
    {
      label: "Upholstery Color",
      values: ["Bright Grey & Lion", "Bright Grey & Lion"]
    },
  ]

  const ProductSpecifications: ProductSpec[] = [
    {
      label: "Filling Material",
      values: ["Foam", "Matte"]
    },
    {
      label: "Finish Type",
      values: ["Bright Grey & Lion", "Bright Grey & Lion"]
    },
    {
      label: "Adjustable Headrest",
      values: ["No", "Yes"]
    },
    {
      label: "Maximum Load Capacity",
      values: ["280 KG", "300 KG"]
    },
    {
      label: "Origin of Manufacture",
      values: ["India", "India"]
    },
  ]

  const dimensions: ProductSpec[] = [
    {
      label: "Width",
      values: ["265.32 cm", "265.32 cm"]
    },
    {
      label: "Height",
      values: ["76 cm", "76 cm"]
    },
    {
      label: "Depth",
      values: ["167.76 cm", "167.76 cm"]
    },
    {
      label: "Weight",
      values: ["45 KG", "65 KG"]
    },
    {
      label: "Seat Height",
      values: ["41.52 cm", "41.52 cm"]
    },
    {
      label: "Leg Height",
      values: ["5.46 cm", "5.46 cm"]
    },
  ]

  const warranty: ProductSpec[] = [
    {
      label: "Warranty Summary",
      values: ["1 Year Manufacturing Warranty", "1.2 Year Manufacturing Warranty"]
    },
    {
      label: "Warranty Service Type",
      values: [
        "For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com",
        "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com"
      ]
    },
    {
      label: "Covered in Warranty",
      values: ["Warranty Against Manufacturing Defect", "Warranty of the product is limited to manufacturing defects only."]
    },
    {
      label: "Not Covered in Warranty",
      values: [
        "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
        "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage."
      ]
    },
    {
      label: "Domestic Warranty",
      values: ["1 Year", "3 Months"]
    },
  ]

  return (
    <Card className="w-full max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] gap-6">

        {/* Left Section: Product specifications */}
        <div>
          <section>
            <h2 className="text-2xl font-medium mb-4">General</h2>
            <SpecificationList specs={specifications} />
          </section>
          
          <section className="mt-[96px]">
            <h2 className="text-2xl font-medium mb-4">Product</h2>
            <SpecificationList specs={ProductSpecifications} />
          </section>

          <section className="mt-[96px]">
            <h2 className="text-2xl font-medium mb-4">Dimensions</h2>
            <SpecificationList specs={dimensions} />
          </section>

          <section className="mt-[96px]">
            <h2 className="text-2xl font-medium mb-4">Warranty</h2>
            <SpecificationList specs={warranty} />
          </section>

          {/* Right Section: Add to Cart Buttons */}
          <div className="grid md:grid-cols-[200px_1fr_1fr] gap-4">
            <div className="hidden md:block gap-[300px]" />
            <Button className="bg-[#B88E2F] hover:bg-[#9A7626] text-white">Add To Cart</Button>
            <Button className="bg-[#B88E2F] hover:bg-[#9A7626] text-white">Add To Cart</Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

// Component for rendering a list of specifications
function SpecificationList({ specs }: { specs: ProductSpec[] }) {
  return (
    <div className="space-y-4">
      {specs.map((spec, index) => (
        <div
          key={index}
          className="grid md:grid-cols-[200px_1fr_1fr] gap-4 py-2 border-b last:border-b-0"
        >
          {/* Specification Label */}
          <div className="font-medium">{spec.label}</div>
          
          {/* Specification Values */}
          {spec.values.map((value, i) => (
            <div key={i} className="text-gray-600 w-[300px]">
              {value}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
