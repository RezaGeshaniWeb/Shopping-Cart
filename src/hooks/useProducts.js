import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

function getProducts() {
    const products = useContext(ProductsContext)
    return products
}

export default getProducts