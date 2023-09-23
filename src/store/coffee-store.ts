import { create } from 'zustand'

import { coffees } from '@src/data/coffees'
import { orderData } from '@src/lib/validations/confirm-order-form-validation'

interface Coffee {
  id: string
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CartItem extends Coffee{
  quantity: number
}

interface CoffeeStore {
  coffees: Coffee[]
  cartCoffee: CartItem[]
  orderCoffeeInfo: orderData
  addCoffeeToCart: (coffee: CartItem) => void
  removeCoffeeToCart: (coffeeId: string) => void
  incriseCoffeeQuantity: (coffeeId: string, type: 'increase' | 'decrease') => void
  submitOrderCoffeeInfo: (data: orderData) => void
  loadCartCoffees: () => void
  clearCartCoffee: () => void
}

const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems"

export const useCoffeeStore = create<CoffeeStore>((set) => {
  return {
    coffees,
    cartCoffee: [],
    orderCoffeeInfo: { cep: '', city: '', complement: '', district: '',  number: '', paymentMethod: 'debit', street: '', uf: '' },

    loadCartCoffees () {
      const cartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)

      if (cartItems) {
        set({ cartCoffee: JSON.parse(cartItems) })
      }
    },

    addCoffeeToCart(coffee: CartItem) {
      set((state) => {
        const coffeeAlreadyExistsInCart = state.cartCoffee.findIndex(
          (item) => item.id === coffee.id
        )

        if (coffeeAlreadyExistsInCart < 0) {
          state.cartCoffee.push(coffee)
        } else {
          state.cartCoffee[coffeeAlreadyExistsInCart].quantity += coffee.quantity
        }

        localStorage.setItem(
          COFFEE_ITEMS_STORAGE_KEY,
          JSON.stringify(state.cartCoffee)
        )

        return { cartCoffee: [...state.cartCoffee] }
      })
    },

    removeCoffeeToCart(coffeeId) {
      set((state) => {
        const coffeeExists = state.cartCoffee.findIndex(coffee => coffee.id === coffeeId)

        if (coffeeExists >= 0) {
          state.cartCoffee.splice(coffeeExists, 1)
        }

        return {cartCoffee: [...state.cartCoffee]}
      })
    },

    incriseCoffeeQuantity(coffeeId, type) {
      set((state) => {
        const coffeeExists = state.cartCoffee.findIndex(coffee => coffee.id === coffeeId)

        if (coffeeExists >= 0) {
          type === 'increase'
            ? state.cartCoffee[coffeeExists].quantity += 1 
            : state.cartCoffee[coffeeExists].quantity -= 1     
        }

        localStorage.setItem(
          COFFEE_ITEMS_STORAGE_KEY,
          JSON.stringify(state.cartCoffee)
        )

        return {cartCoffee: [...state.cartCoffee]}
      })
    },

    submitOrderCoffeeInfo(data) {
      set({ orderCoffeeInfo: data })
    },

    clearCartCoffee() {
      set({ cartCoffee: [] })
    }

  }
})