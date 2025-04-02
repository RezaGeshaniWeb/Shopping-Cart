import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function getCart() {
    const { state, dispatch } = useContext(CartContext)
    return [state, dispatch]
}

export { getCart }