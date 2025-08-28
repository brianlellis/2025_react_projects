import { useEffect, useState } from 'react'
import { cn }                        from "@/lib/utils"
import { ProductCatalogGrid } from '@/layout'
import { MockProductCatalog } from '@/data/mockProductCatalog'
import { CartItemized } from '@/components/custom/CartItemized'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectSeparator
} from "@/components/ui/select"


function DropdownCategory({ categories, onValueChange }) {
  const [selectNull, setSelectNull] = useState(true)

  return (<Select onValueChange={(v) => {
      onValueChange(v)
      setSelectNull(v === undefined)
    }}
    >
    <SelectTrigger 
      className={cn(
        "bg-white text-orange-700 hover:bg-orange-700 hover:text-white",
        "data-[placeholder]:text-orange-700 hover:data-[placeholder]:text-white",
        "stroke-orange-700 hover:stroke-white",
        "cursor-pointer"
      )}
    >
      <SelectValue placeholder="Filter By Category" />
    </SelectTrigger>
    <SelectContent>
      {!selectNull && <>
        <SelectItem value={undefined}>Clear All</SelectItem>
        <SelectSeparator />
      </>}
      
      {categories.map(cat => <SelectItem value={cat}>{cat}</SelectItem>)}
    </SelectContent>
  </Select>)
}


function DropdownColumns({ onValueChange, className }) {
  const [selectNull, setSelectNull] = useState(true)

  return (<Select defaultValue={3} onValueChange={(v) => {
      onValueChange(v)
      setSelectNull(v === undefined)
    }}
    >
      <SelectTrigger 
        className={cn(
          "bg-white text-orange-700 hover:bg-orange-700 hover:text-white",
          "data-[placeholder]:text-orange-700 hover:data-[placeholder]:text-white",
          "stroke-orange-700 hover:stroke-white",
          "cursor-pointer",
          className
        )}
      >
        <SelectValue placeholder="Column Amount" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={3}>3</SelectItem>
        <SelectItem value={4}>4</SelectItem>
        <SelectItem value={5}>5</SelectItem>
      </SelectContent>
    </Select>)
}


export function PageHome() {
  const [filterCategory, setFilterCategory] = useState()
  const [catalog, setCatalog]               = useState([])
  const [columnCount, setColumnCount]       = useState(3)

  const categories = [...new Set(MockProductCatalog.map(v => v.category))]

  useEffect(() => {
    setCatalog(filterCategory ?
      MockProductCatalog.filter(v => v.category === filterCategory)
      : MockProductCatalog)
  }, [filterCategory])

  return (
    <div className="px-20 pt-[100px] pb-[20px] bg-amber-50 min-h-screen">
      <div className="mb-[30px] flex justify-between w-2/3">
        <h1 className="text-4xl font-bold">Desserts</h1>
        <div className="flex">
          <DropdownColumns onValueChange={setColumnCount} className="mr-2" />
          <DropdownCategory 
            categories={categories} 
            onValueChange={setFilterCategory} />
        </div>
      </div>

      <div className="flex gap-6">
        <ProductCatalogGrid className="w-2/3" products={catalog} columns={columnCount} />
        <div className="grow">
          <CartItemized />
        </div>
      </div>
    </div>
  )
}
