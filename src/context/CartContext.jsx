import { createContext, useReducer, useEffect } from "react"
import { sumProducts } from "../helper/helper"

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false
}

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'ADD_ITEM':
            if (!state.selectedItems.find(item => item.id === payload.id)) {
                state.selectedItems.push({ ...payload, quantity: 1 })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumProducts(state.selectedItems),
                checkout: false
            }
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== payload.id)
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumProducts(newSelectedItems)
            }
        case "INCREASE":
            const indexInc = state.selectedItems.findIndex(item => item.id === payload.id)
            state.selectedItems[indexInc].quantity++
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumProducts(state.selectedItems)
            }
        case "DECREASE":
            const indexDec = state.selectedItems.findIndex(item => item.id === payload.id)
            state.selectedItems[indexDec].quantity--
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumProducts(state.selectedItems)
            }
        case "CHECKOUT":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true
            }
        case "INITIALIZE":
            return payload
        default:
            throw new Error('Invalid Action!')
    }
}

export const CartContext = createContext()

export default function CartProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const storedCart = localStorage.getItem('cart')
        if (storedCart) {
            try {
                const parsedCart = JSON.parse(storedCart)
                dispatch({ type: 'INITIALIZE', payload: parsedCart })
            } catch (error) {
                console.error("Error parsing cart from localStorage:", error)
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state))
    }, [state])

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}