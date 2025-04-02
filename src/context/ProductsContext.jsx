import { createContext, useEffect, useState } from "react"
import api from "../services/config"

export const ProductsContext = createContext()

export default function ProductsProvider({ children }) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setProducts(await api.get('/products'))                
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts()
    }, [])

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    )
}