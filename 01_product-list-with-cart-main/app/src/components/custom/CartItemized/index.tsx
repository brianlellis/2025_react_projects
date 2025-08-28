import { useCartStore } from '@/stores'

export function CartItemized() {
  // Deconstructing subscribes your component to the entire store. 
  const products = useCartStore(s => s.products)

  return (<div className="w-full rounded-xl bg-white p-4">
    <h1 className="font-bold text-2xl text-orange-700">
      Your Cart {products.length ? `(${products.length})` : ''}
    </h1>
  </div>)
}