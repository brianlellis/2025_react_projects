import { useCartStore } from '@/stores'

export function CartItemized() {
  // Deconstructing subscribes your component to the entire store. 
  const totalProductCount = useCartStore(s => s.totalProductCount)
  const productsModified = useCartStore(s => s.productsModified)

  return (<div className="w-full rounded-xl bg-white p-4">
    <h1 className="font-bold text-2xl text-orange-700">
      Your Cart {totalProductCount() ? `(${totalProductCount()})` : ''}
    </h1>
  </div>)
}