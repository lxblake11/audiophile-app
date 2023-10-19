
import { BrandStorySectionTxt } from "../constants";

function StyledTitle({ titleParts }) {
    return (
        <>
            {titleParts[0]}
            <span className="text-customOrange">{titleParts[1]}</span>
            {titleParts[2]}
        </>
    );
}

const BrandStorySection = () => {
    return (
        <div className="flex py-[5rem]  px-standard-dtsm h-90vh">
            <div className="flex flex-col justify-center flex-[0.55] ">
                <div className="flex flex-col gap-8">
                    <h3 className="w-[75%] leading-[1.25] text-5xl font-bold uppercase ">
                        <StyledTitle titleParts={BrandStorySectionTxt.title} />
                    </h3>
                    <p className="w-[80%] font-light text-md">{BrandStorySectionTxt.description}</p>
                </div>
            </div>
            <div className="flex-[0.45]" style={{ backgroundImage: `url(${BrandStorySectionTxt.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>2</div>

        </div>
    )
}

export default BrandStorySection;
