import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../helper/helper";

export default function ProductsSearch({ search, setSearch, setQuery }) {
    const searchHandler = () => {
        setQuery(query => createQueryObject(query, { search }))
    }

    return (
        <div className="flex items-center">
            <input value={search} onChange={e => setSearch(e.target.value.toLowerCase().trim())} type="text" placeholder="Search..." className="text-lg border-2 rounded-lg border-dashed border-[#fe5d42] p-2.5 pr-10 outline-none" spellCheck='false' />
            <button onClick={searchHandler} className="p-3.5 cursor-pointer ml-3 bg-[#fe5d42] rounded-lg text-white text-lg">
                <ImSearch />
            </button>
        </div>
    )
}