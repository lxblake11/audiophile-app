
import { navItems } from "../constants"
import imgLogo from "../srcassets/shared/desktop/logo.svg"
import { FooterTxt } from "../constants"
import { FooterIcons } from "../constants"

const Footer = () => {
    return (
        <footer className="bg-black text-white py-[2rem] grid grid-cols-2  grid-rows-footer h-50vh px-standard-dtsm">
            <div className="flex items-center ">
                <img src={imgLogo} alt="" />
            </div>
            <div className="flex items-center justify-end ">
            <nav>
                <ul className="flex gap-4">
                    {navItems.map((item) => (
                        <li className="text-sm tracking-wide uppercase">{item}</li>
                    ))}
                </ul>
            </nav>
            </div>
            <div className="flex items-center ">
               <p>{FooterTxt.description}</p>   
            </div>
            <div className="flex flex-col items-end justify-center col-start-2 row-start-2 row-end-4 ">
                <ul className="flex gap-4">
                    {FooterIcons.map((item)=> (
                        <li><img src={item} alt="" /></li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center ">
                        <p>{FooterTxt.copyright}</p>
            </div>
            
        </footer>
    )
}

export default Footer
