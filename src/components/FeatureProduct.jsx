import { FeatureProductTxt } from "../constants"
import CustomButton from "./CustomButton"

import imgZx7 from "../srcassets/home/desktop/image-speaker-zx7.jpg"
import imgYx1 from "../srcassets/home/desktop/image-earphones-yx1.jpg"

const FeatureProduct = () => {
    return (
        <div className="flex flex-col gap-4  py-[5rem] px-standard-dtsm h-170vh">
            <div className="flex-[0.4]  bg-customOrange flex">
                <div className="flex items-end justify-center flex-1 ">
                    <img src={FeatureProductTxt[0].image} alt="" className="h-[25rem] mb-[-.2rem]" />
                </div>
                <div className="flex flex-col justify-center flex-1 gap-6 text-white">
                    <h3 className="w-[20%] text-5xl font-bold uppercase">{FeatureProductTxt[0].title}</h3>
                    <p className="text-sm w-[60%]">{FeatureProductTxt[0].description}</p>
                   <CustomButton text="see product" btnClass="bg-black text-white self-start p-4 uppercase text-sm font-bold"/> 

                </div>

            </div>
            {/* Here's the modified div with the background image */}
            <div className="flex-[0.3] flex" style={{ backgroundImage: `url(${imgZx7})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="flex flex-col justify-center flex-1 gap-6 pl-16 ">
                    <h3 className="text-4xl font-bold uppercase "> {FeatureProductTxt[1].title}</h3>
                    <CustomButton text="see product" btnClass="bg-transparent border border-solid border-black  text-black self-start p-4 uppercase text-sm font-bold"/> 
                </div>
                <div className="flex-1"></div>
            </div>
            <div className="flex-[0.3] gap-8  flex">
                <div className="flex-1" style={{ backgroundImage: `url(${imgYx1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="flex flex-col justify-center flex-1 pl-24 bg-customLightGray">
                    <div className="flex flex-col gap-8">
                        <h2 className="text-4xl font-bold uppercase ">{FeatureProductTxt[2].title}</h2>
                        <CustomButton text="see product" btnClass="bg-transparent border border-solid border-black  text-black self-start p-4 uppercase text-sm font-bold"/> 
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default FeatureProduct
