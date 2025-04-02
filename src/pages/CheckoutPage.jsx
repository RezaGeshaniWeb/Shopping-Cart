import BasketCard from "../components/BasketCard";
import BasketSiderbar from "../components/BasketSiderbar";
import { getCart } from "../hooks/useCart";
import Layouts from "../layouts/Layouts";

export default function CheckoutPage() {
    const [state, dispatch] = getCart()

    const clickHandler = (type, data) => dispatch({ type, payload: data })

    return (
        <main className="mx-auto max-w-[1200px] min-h-screen p-2.5">
            <Layouts>
                <section className="w-full lg:min-h-[70vh] 2xl:h-1/2 flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start">
                    <BasketSiderbar data={state} clickHandler={clickHandler} />

                    <div className="w-[80%] lg:w-[70%] flex flex-col gap-6">
                        {
                            state.selectedItems.map(item => {
                                return (
                                    <BasketCard key={item.id} data={item} clickHandler={clickHandler} />
                                )
                            })
                        }
                    </div>
                </section>
            </Layouts>
        </main>
    )
}
