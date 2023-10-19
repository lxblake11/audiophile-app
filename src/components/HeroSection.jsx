

import imgHero from "../srcassets/home/desktop/image-hero.jpg";
import { heroTxt } from "../constants"
import CustomButton from "./CustomButton"

// Helper function to apply background image styles
const setBackgroundImageStyles = (imageUrl) => {
    return {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };
};

const HeroSection = () => {
    return (
        <div className="flex items-center px-standard-dtsm h-90vh" style={setBackgroundImageStyles(imgHero)}>
             <div className="flex flex-col justify-center w-1/2 gap-8 ">
                 <h3 className="font-light tracking-widest text-white uppercase">{heroTxt.subheading}</h3>
                 <h2 className="text-6xl font-bold text-white uppercase">{heroTxt.heading}</h2>
                 <p className="text-white text-md w-[70%]">{heroTxt.description}</p>
                 <CustomButton btnClass="p-4 uppercase text-xs font-bold text-white tracking-widest bg-customOrange self-start" text="see product" />
            </div>
        </div>
    )
}

export default HeroSection;

