import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";
import { categories } from "../constants/sidebarList";

export default function ProductsSideBar({ setQuery, query }) {
    const categoryHandler = e => {
        const { tagName } = e.target
        const category = e.target.innerText.toLowerCase()
        if (tagName !== 'LI') return
        setQuery(query => createQueryObject(query, { category }))
    }

    return (
        <div className="order-1 md:order-2 bg-white w-[270px] mx-auto md:w-[20%] h-[350px] rounded-[20px] border-2 border-dashed border-[#e2e2e2] p-5">
            <div className="w-full flex gap-3 items-center text-lg font-bold text-[#fe5d42] mb-6">
                <FaListUl />
                <p>Categories</p>
            </div>
            <ul onClick={categoryHandler} className="flex flex-col gap-2.5 text-[#333333] *:transition-all *:duration-150 *:hover:text-[#fe5d42] *:p-2 *:cursor-pointer text-lg font-semibold">
                {
                    categories.map(c => {
                        return (
                            <li className={query.category === c.type.toLowerCase() ? 'selected' : null} key={c.id}>{c.type}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}