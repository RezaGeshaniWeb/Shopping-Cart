import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb"
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom"
import { productsQuantity, shortenText } from "../helper/helper"
import { getCart } from "../hooks/useCart"

export default function ProductsCard({ data }) {
    const { id, title, image, price } = data

    const [state, dispatch] = getCart()

    const quantity = productsQuantity(state, id)

    const clickHandler = (type) => {
        dispatch({ type, payload: data })
    }

    return (
        <div className="w-[270px] p-5 flex flex-col justify-end bg-white border-2 border-dashed border-[#e2e2e2] rounded-[20px]">
            <img src={image} alt={title} className="w-[230px] h-[230px] p-5 mb-5 bg-white" />
            <h3 className="text-[#fe5d42] font-semibold text-lg">{shortenText(title)}</h3>
            <p className="text-[#666] font-semibold mt-2.5 mb-7">{price} $</p>
            <div className="w-full flex justify-between items-center *:text-2xl *:h-6 *:text-[#fe5d42] *:cursor-pointer">
                <Link to={`/products/${id}`}>
                    <TbListDetails />
                </Link>
                <div className="flex items-center justify-center gap-3">
                    {
                        quantity === 1
                        &&
                        (<button onClick={() => clickHandler('REMOVE_ITEM')} className="bg-[#fe5d42] text-white border-none h-8 w-8 flex justify-center items-center rounded-[8px] cursor-pointer">
                            <MdDelete />
                        </button>)
                    }
                    {
                        quantity > 1
                        &&
                        (<button onClick={() => clickHandler('DECREASE')} className="bg-[#fe5d42] text-white border-none h-8 w-8 pb-2 flex justify-center items-center rounded-[8px] cursor-pointer">
                            -
                        </button>)
                    }
                    {
                        !!quantity && <span className="text-lg font-semibold">{quantity}</span>
                    }
                    {
                        quantity === 0
                            ?
                            (<button onClick={() => clickHandler('ADD_ITEM')} className="bg-[#fe5d42] text-white border-none h-8 w-8 flex justify-center items-center rounded-[8px] cursor-pointer">
                                <TbShoppingBagCheck />
                            </button>)
                            :
                            (<button onClick={() => clickHandler('INCREASE')} className="bg-[#fe5d42] text-white border-none h-8 w-8 pb-2 flex justify-center items-center rounded-[8px] cursor-pointer">
                                +
                            </button>)
                    }
                </div>
            </div>
        </div>
    )
}