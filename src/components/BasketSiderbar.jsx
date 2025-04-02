import { BsPatchCheck } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { TbChecklist } from "react-icons/tb";

export default function BasketSiderbar({ data: { total, itemsCounter, checkout }, clickHandler }) {
    return (
        <div className="w-[80%] lg:w-[25%] mb-14 lg:mb-0 flex flex-col p-6 h-72 border border-dashed border-[#fe5d42] rounded-2xl">
            <p className="w-full flex items-center gap-2 text-[19px] font-semibold text-[#fe5d42] mb-5">
                <TbChecklist />
                Total: <span className="text-slate-600">{total} $</span>
            </p>
            <p className="w-full flex items-center gap-2 text-[19px] font-semibold text-[#fe5d42] mb-5">
                <FaHashtag />
                Quantity: <span className="text-slate-600">{itemsCounter}</span>
            </p>
            <p className="w-full flex items-center gap-2 text-[19px] font-semibold text-[#fe5d42] mb-16">
                <BsPatchCheck />
                Status: <span className="text-slate-600">{!checkout && "Pending..."}</span>
            </p>
            <button onClick={() => clickHandler('CHECKOUT')} className="bg-[#fe5d42] text-white font-semibold w-full p-2 rounded-lg text-lg cursor-pointer">Checkout</button>
        </div>
    )
}
