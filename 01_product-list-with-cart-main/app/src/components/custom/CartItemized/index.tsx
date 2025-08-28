import { cn }                        from "@/lib/utils"
import { CircleX, TreeDeciduous } from 'lucide-react'
import { useCartStore } from '@/stores'

function CartItem({ product }) {
  return (<div className="font-bold border-b-1 border-b-neutral-300 py-4">
    <div className="flex justify-between items-center">
      <div>
        <h4 className="text-base text-neutral-700 mb-2">{product.name}</h4>
        <p className="text-sm text-orange-700">
          {product.amount}x
          <span className="ml-[20px] font-light text-neutral-400">@ ${product.price.toFixed(2)}</span>
          <span className="ml-[10px] text-neutral-500">${(product.price * product.amount).toFixed(2)}</span>
        </p>
      </div>
      <CircleX size={16} className="stroke-neutral-500 cursor-pointer" />
    </div>
  </div>)
}

function CartSubtotal() {
  const totalProductPricing = useCartStore(s => s.totalProductPricing)

  return (<>
    <div className="mt-6 w-full flex items-center justify-between">
      <p className="text-neutral-500">Order Total</p>
      <p className="text-2xl font-bold text-neutral-700">
        ${totalProductPricing().toFixed(2)}
      </p>
    </div>

    <div className="flex justify-center bg-amber-50 my-6 py-4">
      <TreeDeciduous className="stroke-green-500" />
      <p className="ml-4">
        This is a <span className="font-bold">carbon-neutral</span> delivery
      </p>
    </div>

    <button
      className={cn(
        "cursor-pointer flex justify-center rounded-full py-4 w-full",
        "bg-orange-700 text-white hover:bg-white hover:text-orange-700",
        "hover:border hover:border-orange-700"
      )}
    >
      Confirm Order
    </button>
  </>)
}

export function CartItemized() {
  // Deconstructing subscribes your component to the entire store. 
  const products = useCartStore(s => s.products)
  const totalProductCount = useCartStore(s => s.totalProductCount)

  return (<div className="w-full rounded-xl bg-white p-4">
    <h1 className="font-bold text-2xl text-orange-700 mb-6">
      Your Cart {totalProductCount() ? `(${totalProductCount()})` : ''}
    </h1>

    {Object.entries(products).map(([key, product]) => 
      <CartItem key={key} product={product} />)}

    {totalProductCount() > 0 && <CartSubtotal />}
  </div>)
}