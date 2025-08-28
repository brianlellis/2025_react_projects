import { cn }                        from "@/lib/utils"
import { useEffect, useState }       from 'react'
import { ShoppingCart, Minus, Plus } from 'lucide-react'
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
          
          <Minus onClick={() => decrementProduct(product.id)} />
          <span className="ml-2 text-sm">{product.amount}</span>
          <Plus onClick={() => incrementProduct(product.id)} />
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
        className="w-full h-48 rounded-lg mb-[40px] object-fill"
      />
      {productsInCart[product.id] ? 
        <ProductAmountSelector product={productsInCart[product.id]} /> 
        : <ProductAddToCart product={product} />}
    </div>

    <div className="text-left">
      <h3>{product.category}</h3>
      <h4 className="">{product.name}</h4>
      <p>${product.price.toFixed(2)}</p>
    </div>
  </div>)
}

export function ProductCatalogGrid({
  products = [],
  columns = 3,
  className
}) {
  const [cssColumn, setCssColumn] = useState("grid-cols-3 gap-4")


  useEffect(() => {
    if (columns === 3)
      setCssColumn("grid-cols-3 gap-4")
    else if (columns === 4)
      setCssColumn("grid-cols-4 gap-3")
    else if (columns === 5)
      setCssColumn("grid-cols-5 gap-2")
  }, [columns])


  return (<div className={`grid ${cssColumn} ${className}`}>
    {products.map((prod, i) => {
      return (<ProductCard key={`prod-grid-${i}`} product={prod} />) 
    })}
  </div>)
}