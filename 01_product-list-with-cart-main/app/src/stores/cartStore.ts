import { create } from 'zustand'


interface CartProduct {
  id     : number,
  price  : number,
  amount : number
}

interface CartState {
  products          : Record<number, CartProduct>
  totalProductCount : () => number,
  updateProduct     : (product: CartProduct) => void,
  removeProduct     : (id: number) => void,
  incrementProduct  : (id: number) => void,
  decrementProduct  : (id: number) => void,
}

/** 
 * This type, Record<string, Record<number, CartProduct>>, is incorrect because it 
 * implies that the outer object's keys are strings, and its values are themselves 
 * a Record<number, CartProduct>. While that's technically true for the products 
 * key, it doesn't align with the expected input for the set function, 
 * which is Partial<CartState>.
 */
const externRemoveProduct = (products: Record<number, CartProduct>, id: number): 
  Partial<CartState> => 
{
  const newProducts = { ...products }
  delete newProducts[id]
  return ({ products: newProducts })
}

const externUpdateProduct = (products: Record<number, CartProduct>, product: CartProduct):
  Partial<CartState> =>
{
  return ({
    products: {
      ...products,
      [product.id]: {
        ...product,
        amount: isNaN(product.amount) ? 1 : product.amount
      }
    }
  })
}


export const useCartStore = create<CartState>((set, get) => ({
  // Initial state
  products: {},
  totalProductCount: () => {
    const { products } = get()
    return Object.values(products).reduce((total, product) => total + product.amount, 0)
  },
  totalProductPricing: () => {
    const { products } = get()
    return Object.values(products).reduce((total, product) => 
      total + (product.amount * product.price), 0)
  },
  updateProduct: (product: CartProduct) => 
    set((s) => externUpdateProduct(s.products, product)),
  removeProduct: (id: number) => 
    set((s) => externRemoveProduct(s.products, id)),
  incrementProduct: (id: number) => set((s) => {
    if (!s.products[id])
      return null // null prevents state update

    return externUpdateProduct(s.products, {
      ...s.products[id],
      amount: s.products[id].amount + 1
    })
  }),
  decrementProduct: (id: number) => set((s) => {
    if (!s.products[id])
      return null // null prevents state update

    if (s.products[id].amount <= 1)
      return externRemoveProduct(s.products, id)

    return externUpdateProduct(s.products, {
      ...s.products[id],
      amount: s.products[id].amount - 1
    })
  })
}))