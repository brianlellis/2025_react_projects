import { ProductCatalogGrid } from '@/layout'
import { MockProductCatalog } from '@/data/mockProductCatalog'

export function PageHome() {
  return (
    <div className="px-20 pt-[100px] pb-[20px] bg-amber-50">
      <h1 className="text-4xl font-bold mb-[30px]">Desserts</h1>

      <div className="flex gap-2">
        <ProductCatalogGrid className="w-2/3" products={MockProductCatalog} />
        <div>
          <h1>Cart information</h1>
        </div>
      </div>
    </div>
  )
}
