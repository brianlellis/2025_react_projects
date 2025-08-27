import { useEffect, useState } from 'react'


function ProductAmountSelector() {
  return (<div className="w-full">
  </div>)
}

function ProductAddToCart() {
  return (<div className="w-full">
  </div>)
}


function ProductCard({ product }) {
  return (<div className="w-full">
    <img 
      src={`/images/${product.image.desktop}`} 
      alt={product.name}
      className="w-full h-48 object-cover rounded-lg"
    />
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


  return (<div className={`grid ${cssColumn}`}>
    {products.map((prod, i) => {
      return (<div key={`prod-grid-${i}`}>
        <ProductCard product={prod} />
        {prod.id ? <ProductAmountSelector /> : <ProductAddToCart />}
      </div>) 
    })}
  </div>)
}