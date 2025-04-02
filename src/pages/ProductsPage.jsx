import { ClockLoader } from "react-spinners"
import ProductsCard from "../components/ProductsCard"
import getProducts from "../hooks/useProducts"
import Layouts from "../layouts/Layouts"
import ProductsSearch from "../components/ProductsSearch"
import { useEffect, useState } from "react"
import { filterProducts, getInitialQuery, searchProducts } from "../helper/helper"
import { useSearchParams } from "react-router-dom"
import ProductsSideBar from "../components/ProductsSideBar"

export default function ProductsPage() {
    const products = getProducts()

    const [displayed, setDisplayed] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState({})

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        setDisplayed(products)
        setQuery(getInitialQuery(searchParams))
    }, [products])

    useEffect(() => {
        setSearchParams(query)
        setSearch(query.search || '')
        let finalProducts = searchProducts(products, query.search)
        finalProducts = filterProducts(finalProducts, query.category)
        setDisplayed(finalProducts)

        if (finalProducts.length === 0) {
            setDisplayed(products)
        }
    }, [query, products])

    return (
        <main className="mx-auto max-w-[1200px] min-h-screen p-2.5">
            <Layouts>
                <ProductsSearch search={search} setSearch={setSearch} setQuery={setQuery} />

                <section className="w-full flex flex-col lg:flex-row my-16 lg:gap-7">
                    <div className="order-2 md:order-1 w-full flex flex-col justify-center items-center lg:justify-between lg:w-[80%] lg:flex-row lg:flex-wrap lg:gap-8">
                        {displayed.length === 0 ? <ClockLoader color="#fe5d42" size={120} className="mx-auto" /> : displayed.map(p => <ProductsCard key={p.id} data={p} />)}
                    </div>

                    <ProductsSideBar query={query} setQuery={setQuery} />
                </section>
            </Layouts>
        </main>
    )
}