

import { ProductListTxt } from "../constants"
import CustomButton from "./CustomButton"
import { FaChevronRight } from 'react-icons/fa';
const ProductList = () => {
    return (
        <div className="flex flex-col justify-center h-50vh px-standard-dtsm">
            <div className="flex gap-8">
            {ProductListTxt.map((item)=> (
                <div className="relative flex flex-col items-center flex-1 p-4 bg-customLightGray ">
                <img src={item.image} alt="" className="w-[10rem] mt-[-4rem] h-[10rem]" />
                <div className="flex flex-col items-center gap-2">
                <h3 className="text-sm font-bold uppercase">{item.title}</h3>
                <div className="flex items-center gap-2">
                <CustomButton text="shop" btnClass="uppercase text-sm"/>
                <FaChevronRight className="text-[12px]  text-customOrange"/>
                </div>
                </div>
            </div>    
            ))}
            </div>
        </div>
    )
}

export default ProductList
