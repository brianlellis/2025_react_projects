import { cn }                        from "@/lib/utils"
import { useEffect, useState }       from 'react'
import { ShoppingCart, CircleMinus, CirclePlus } from 'lucide-react'
import { useCartStore }              from '@/stores'


function ProductAmountSelector({ product }) {
  const incrementProduct = useCartStore(s => s.incrementProduct)
  const decrementProduct = useCartStore(s => s.decrementProduct)
  const ICON_SZ = 14

  return (
      <div 
        className={cn(
          "cursor-pointer",
          "w-[150px] p-2 text-white bg-orange-700",
          "border-1 rounded-full border-white",
          `absolute left-0 right-0 mx-auto bottom-[-${ICON_SZ}px]`
        )}
      >
        <div 
          className="flex items-center justify-between m-auto w-[100px]"
        >
          
          <CircleMinus size={16} onClick={() => decrementProduct(product.id)} />
          <span className="ml-2 text-sm">{product.amount}</span>
          <CirclePlus size={16} onClick={() => incrementProduct(product.id)} />
        </div>
      </div>
  )
}

function ProductAddToCart({ product }) {
  const updateProduct = useCartStore(s => s.updateProduct)

  const ICON_SZ = 14

  return (
      <div 
        className={cn(
          "cursor-pointer",
          "w-[150px] p-2 text-orange-700 bg-white",
          "border-1 rounded-full border-orange-700",
          `absolute left-0 right-0 mx-auto bottom-[-${ICON_SZ}px]`
        )}
      >
        <div 
          className="flex items-center m-auto w-[100px]"
          onClick={() => updateProduct(product)}
        >
          <ShoppingCart size={ICON_SZ} />
          <span className="ml-2 text-sm">Add to Cart</span>
        </div>
      </div>
  )
}


function ProductCard({ product }) {
  const productsInCart = useCartStore(s => s.products)

  return (<div className="w-full text-center">
    <div className="relative">
      <img 
        src={`/images/${product.image.desktop}`} 
        alt={product.name}
        className={cn(
          "w-full h-48 rounded-lg mb-[28px] object-fill",
          productsInCart[product.id] ? "border-2 border-orange-700" : ""
        )}
      />
      {productsInCart[product.id] ? 
        <ProductAmountSelector product={productsInCart[product.id]} /> 
        : <ProductAddToCart product={product} />}
    </div>

    <div className="text-left font-bold">
      <h3 className="text-neutral-400 font-light text-sm">{product.category}</h3>
      <h4 className="text-neutral-700">{product.name}</h4>
      <p className="text-orange-700">${product.price.toFixed(2)}</p>
    </div>
  </div>)
}

export function ProductCatalogGrid({
  products = [],
  columns = 3,
  className
}) {
  const getCssColumn = () => {
    switch(columns) {
      case 4:
        return "grid-cols-4 gap-x-3 gap-y-12"
      case 5:
        return "grid-cols-5 gap-x-2 gap-y-12"
      case 3:
      default:
        return "grid-cols-3 gap-x-4 gap-y-12"
    }
  }

  return (<div className={`grid ${getCssColumn()} ${className}`}>
    {products.map((prod, i) => {
      return (<ProductCard key={`prod-grid-${i}`} product={prod} />) 
    })}
  </div>)
}