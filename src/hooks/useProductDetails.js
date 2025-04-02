import getProducts from "./useProducts";

function productDetails(id) {
    const products = getProducts()
    const product = products.find(p => p.id === id)
    return product
}

export { productDetails }