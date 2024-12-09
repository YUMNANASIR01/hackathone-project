import { Card, CardContent } from "@/components/ui/card"

export default function PhotoGallery() {
  const images = [
    {
      src: "/pg1.png",
      className: "col-span-1 row-span-2 h-[382px]"
    },
    {
      src: "/pg2.png",
      className: "col-span-4 row-span-1 h-[312px]"
    },
    {
      src: "/pg3.png",
      className: "col-span-3 row-span-2 h-[392px]"
    },
    {
      src: "/pg4.png",
      className: "col-span-3 row-span-2 h-[348px]"
    },
    {
      src: "/pg5.png",
      className: "col-span-2 row-span-2 h-[433px]"
    },
    {
      src: "/pg6.png",
      className: "col-span-2 row-span-1 h-[242px]"
    },
    {
      src: "/pg7.png",
      className: "col-span-4 row-span-1 h-[242px]"
    },
    {
      src: "/pg8.png",
      className: "col-span-2 row-span-1 h-[196px]"
    },
    {
      src: "/pg9.png",
      className: "col-span-2 row-span-1 h-[323px]"
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12 space-y-2">
        <h3 className="text-xl font-semibold text-gray-600">Share your setup with</h3>
        <h2 className="text-4xl font-bold text-gray-900">#FuniroFurniture</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12  gap-4 auto-rows-auto">
        {images.map((image, index) => (
          <Card key={index} className={`overflow-hidden ${image.className}`}>
            <CardContent className="p-0 h-full">
              <img
                src={image.src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}