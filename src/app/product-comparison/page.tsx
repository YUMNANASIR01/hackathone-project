import AddAProduct from '@/components/AddAProduct'
import List from '@/components/List'
import ProductComparison from '@/components/ProductComparisonHeader'
import { ChevronRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function ProductComparisonHeader() {
  return (


    <>
    <ProductComparison/>
    <AddAProduct/>
    <List/>
    </>
  )
}

