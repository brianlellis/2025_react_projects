import { CircleX }      from 'lucide-react'
import { useCartStore } from '@/stores'

function CartItem({ product }) {
  return (<div className="font-bold border-b-1 border-b-neutral-300 py-4">
    <h4 className="text-base text-neutral-700 mb-2">{product.name}</h4>

    <div className="flex justify-between items-center">
      <p className="text-sm text-orange-700">
        {product.amount}x
        <span className="ml-[20px] font-light text-neutral-400">@ ${product.price.toFixed(2)}</span>
        <span className="ml-[10px] text-neutral-500">${(product.price * product.amount).toFixed(2)}</span>
      </p>

      <CircleX size={16} className="stroke-neutral-500 cursor-pointer" />
    </div>
  </div>)
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
  </div>)
}