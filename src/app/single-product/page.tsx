import React from 'react'
import Productdetails from '@/components/productdetails/Productdetails'
import Relatedproducts from '@/components/relatedProduct/Relatedproducts'
import Spmain from '@/components/spmain/Spmain'
import { ChevronRight } from 'lucide-react'

function Singleproduct() {
  return (
    <>
      {/* Breadcrumb Navigation Section */}
      <div className="flex items-center w-full h-[100px] mt-3 bg-[#f9f1e7] px-4 md:px-10">
        
        {/* Breadcrumb Links */}
        <div className="flex items-center text-lg md:text-[20px] leading-[30px] w-full">
          
          {/* Home Link */}
          <p className="text-[#7c7474]">
            Home
            <ChevronRight className="inline ml-2 w-5 h-5 md:pl-[14px] md:w-[40px] md:h-[40px]" />
          </p>
          
          {/* Shop Link */}
          <p className="text-[#7c7474] ml-4 md:ml-6">
            Shop
            <ChevronRight className="inline ml-2 w-5 h-5 md:pl-[14px] md:w-[40px] md:h-[40px]" />
          </p>
          
          {/* Product Name with Left Border */}
          <div className="ml-4 md:ml-6 pl-4 md:pl-6 border-l-2 border-black">
            <p className="font-medium">Asgaard Sofa</p>
          </div>
        </div>
      </div>

      {/* Main Product Section */}
      <Spmain />
      {/* Product Details Section */}
      <Productdetails />
      {/* Related Products Section */}
      <Relatedproducts />
    </>
  )
}

export default Singleproduct
