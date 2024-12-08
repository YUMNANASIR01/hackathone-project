export interface Product {
    id: string
    src: string
    name: string
    description: string
    price: number
    originalPrice?: number
    image: string
    tag?: 'new' | 'sale'
    salePercentage?: number
  }
  
  export const products: Product[] = [
    {
      id: '1',
      name: 'Syltherine',
      src: '/Syltherine.png',
      description: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/Syltheriner.png',
      tag: 'sale',
      salePercentage: 30,
    },
    {
      id: '2',
      name: 'Leviosa',
      src: '/Leviosa.png', 
      description: 'Stylish table chair',
      price: 2500000,
      image: '/Leviosa.png',
    },
    {
      id: '3',
      name: 'Lolito',
      src: '/Lolito.png',
      description: 'Luxury big sofa',
      price: 7000000,
      originalPrice: 14000000,
      image: '/Lolito.png',
      tag: 'sale',
      salePercentage: 50,
    },
    {
      id: '4',
      name: 'Respira',
      src: '/Respira.png',
      description: 'Outdoor bar table and stool',
      price: 500000,
      image: '/Respira.png',
      tag: 'new',
    },
    {
      id: '5',
      name: 'Grifo',
      src: '/1.png',
      description: 'Night lamp',
      price: 1500000,
      image: '/1.png',
    },
    {
      id: '6',
      name: 'Muggo',
      src: '/2.png',
      description: 'Small mug',
      price: 150000,
      image: '/2.png',
      tag: 'new',
    },
    {
      id: '7',
      name: 'Pingky',
      src: '/3.png',
      description: 'Cute bed set',
      price: 7000000,
      originalPrice: 14000000,
      image: '/3.png',
      tag: 'sale',
      salePercentage: 50,
    },
    {
      id: '8',
      name: 'Potty',
      src: '/4.png',
      description: 'Minimalist flower pot',
      price: 500000,
      image: '/4.png',
      tag: 'new',
    },
  ]