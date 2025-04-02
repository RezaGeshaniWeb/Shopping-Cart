import { Link, useParams } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import { productDetails } from "../hooks/useProductDetails";
import { ClockLoader } from "react-spinners";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

export default function DetailsPage() {
  const { id } = useParams()
  const product = productDetails(+id)
  console.log(product)

  return (
    <main className="mx-auto max-w-[1200px] min-h-screen p-2.5">
      <Layouts>
        {!product && <ClockLoader color="#fe5d42" size={120} className="mx-auto mb-[450px]" />}
        <section className="w-full lg:h-[70vh] 2xl:h-1/2 flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start">
          <img src={product.image} alt={product.title} className="p-6 bg-white w-[60%] mb-10 lg:mb-0 lg:w-[35%] h-[70%] rounded-3xl border-2 border-dashed border-[#fe5d42]" />
          <div className="w-[60%] h-[95%] p-8 rounded-3xl bg-white border-2 border-dashed border-slate-400">
            <h3 className="text-[#fe5d42] text-2xl mb-14 font-bold">{product.title}</h3>
            <p className="text-lg text-slate-700 mb-16">{product.description}</p>
            <p className="flex items-center mb-10 gap-3 font-semibold text-lg">
              <SiOpenproject className="text-[#fe5d42]" />
              {product.category}
            </p>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-3 font-semibold text-lg">
                <IoMdPricetag className="text-[#fe5d42]" /> 
                {product.price} $
              </span>
              <Link to='/products' className="bg-[#fe5d42] flex items-center gap-3 p-2 text-white font-semibold rounded-lg">
                <FaArrowLeft />
                <span>Back to Shop</span>
              </Link>
            </div>
          </div>
        </section>
      </Layouts>
    </main>
  )
}
