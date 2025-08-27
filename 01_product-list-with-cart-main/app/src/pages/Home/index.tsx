import { ProductCatalogGrid } from '@/layout'
import { MockProductCatalog } from '@/data/mockProductCatalog'

export function PageHome() {
  return (<div>
    <h1 className="text-4xl text-black">Hello world</h1>
    <ProductCatalogGrid products={MockProductCatalog} />
  </div>)
}
