import { MdDelete } from "react-icons/md";
import { shortenText } from "../helper/helper";

export default function BasketCard({ data, clickHandler }) {
    const { image, title, quantity } = data

    return (
        <div className="w-full px-5 h-[140px] flex items-center justify-between bg-white rounded-2xl border-2 border-dashed border-slate-400">
            <img src={image} alt={title} className="w-[80px] h-[70%]" />
            <h3>{shortenText(title)}</h3>
            <div className="flex items-center gap-3">
                {
                    quantity === 1
                    &&
                    (<button onClick={() => clickHandler('REMOVE_ITEM', data)} className="bg-[#fe5d42] text-white text-lg border-none h-8 w-8 flex justify-center items-center rounded-[8px] cursor-pointer">
                        <MdDelete />
                    </button>)
                }
                {
                    quantity > 1
                    &&
                    (<button onClick={() => clickHandler('DECREASE', data)} className="bg-[#fe5d42] text-white text-[22px] border-none h-8 w-8 pb-2 flex justify-center items-center rounded-[8px] cursor-pointer">
                        -
                    </button>)
                }
                <span>{quantity}</span>
                <button onClick={() => clickHandler('INCREASE', data)} className="bg-[#fe5d42] text-white text-[22px] border-none h-8 w-8 pb-2 flex justify-center items-center rounded-[8px] cursor-pointer">
                    +
                </button>
            </div>
        </div>
    )
}
