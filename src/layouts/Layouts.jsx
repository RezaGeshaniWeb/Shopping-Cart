import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { getCart } from "../hooks/useCart";
import Info from "../components/Info";

export default function Layouts({ children }) {
    const [state] = getCart()

    return (
        <>
            <header className="w-full py-4 px-5 rounded-[10px] flex items-center justify-between bg-[#fe5d42] *:font-semibold mb-[80px] text-white">
                <Link to='/products' className="text-2xl">Shopping Cart</Link>
                <Link to='/checkout' className="relative">
                    <PiShoppingCartSimpleBold className="bg-white text-[#fe5d42] p-1 text-4xl rounded-md" />
                    {!!state.itemsCounter && <span className="bg-black px-1.5 rounded-full absolute -top-3 -right-3">{state.itemsCounter}</span>}
                </Link>
            </header>
            {children}
            <Info />
            <footer className="text-xl w-full py-4 px-5 rounded-[10px] text-center text-white bg-[#fe5d42] mt-[80px]">
                Developed By <em className="underline underline-offset-8">Reza Geshani</em> with <span className="text-red-600">&hearts;</span>
            </footer>
        </>
    )
}
