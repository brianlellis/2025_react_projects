import { ProductCatalogGrid } from '@/layout'
import { MockProductCatalog } from '@/data/mockProductCatalog'
import { CartItemized } from '@/components/custom/CartItemized'

export function PageHome() {
  return (
    <div className="px-20 pt-[100px] pb-[20px] bg-amber-50">
      <h1 className="text-4xl font-bold mb-[30px]">Desserts</h1>

      <div className="flex gap-2">
        <ProductCatalogGrid className="w-2/3" products={MockProductCatalog} />
        <div className="grow">
          <CartItemized />
        </div>
      </div>
    </div>
  )
}
