// Types for our products
interface Product {
    id: string
    name: string
    category: string
    image: string
    price: number
    originalPrice?: number
    discount?: number
    isNew?: boolean
  }
  
  // Sample product data
  export const products: Product[] = [
    {
      id: "1",
      name: "Syltherine",
      category: "Stylish cafe chair",
      image: "/Syltherine.png",
      price: 2500000,
      originalPrice: 3500000,
      discount: 30,
    },
    {
      id: "2",
      name: "Leviosa",
      category: "Stylish cafe chair",
      image: "/Leviosa.png",
      price: 2500000,
    },
    {
      id: "3",
      name: "Lolito",
      category: "Luxury big sofa",
      image: "/Lolito.png",
      price: 7000000,
      originalPrice: 14000000,
      discount: 50,
    },
    {
      id: "4",
      name: "Respira",
      category: "Outdoor bar table and stool",
      image: "/Respira.png",
      price: 500000,
      isNew: true,
    },
    {
      id: "5",
      name: "Syltherine",
      category: "Stylish cafe chair",
      image: "/Syltherine.png",
      price: 2500000,
      originalPrice: 3500000,
      discount: 30,
    },
    {
      id: "6",
      name: "Leviosa",
      category: "Stylish cafe chair",
      image: "/Leviosa.png",
      price: 2500000,
    },
    {
      id: "7",
      name: "Lolito",
      category: "Luxury big sofa",
      image: "/Lolito.png",
      price: 7000000,
      originalPrice: 14000000,
      discount: 50,
    },
    {
      id: "8",
      name: "Respira",
      category: "Outdoor bar table and stool",
      image: "/Respira.png",
      price: 500000,
      isNew: true,
    },
    {
      id: "9",
      name: "Syltherine",
      category: "Stylish cafe chair",
      image: "/Syltherine.png",
      price: 2500000,
      originalPrice: 3500000,
      discount: 30,
    },
    {
      id: "10",
      name: "Leviosa",
      category: "Stylish cafe chair",
      image: "/Leviosa.png",
      price: 2500000,
    },
    {
      id: "11",
      name: "Lolito",
      category: "Luxury big sofa",
      image: "/Lolito.png",
      price: 7000000,
      originalPrice: 14000000,
      discount: 50,
    },
    {
      id: "12",
      name: "Respira",
      category: "Outdoor bar table and stool",
      image: "/Respira.png",
      price: 500000,
      isNew: true,
    },
    {
      id: "13",
      name: "Syltherine",
      category: "Stylish cafe chair",
      image: "/Syltherine.png",
      price: 2500000,
      originalPrice: 3500000,
      discount: 30,
    },
    {
      id: "14",
      name: "Leviosa",
      category: "Stylish cafe chair",
      image: "/Leviosa.png",
      price: 2500000,
    },
    {
      id: "15",
      name: "Lolito",
      category: "Luxury big sofa",
      image: "/Lolito.png",
      price: 7000000,
      originalPrice: 14000000,
      discount: 50,
    },
    {
      id: "16",
      name: "Respira",
      category: "Outdoor bar table and stool",
      image: "/Respira.png",
      price: 500000,
      isNew: true,
    },
  ]