import imgLogo from "../srcassets/shared/desktop/logo.svg"
import { FaShoppingCart } from 'react-icons/fa';

import { navItems } from "../constants"

const Header = () => {
    return (
        <div className="absolute flex items-center justify-between w-full py-8 text-white bg-transparent px-standard-dtsm">
            <img src={imgLogo} alt="" />
            <nav>
                <ul className="flex gap-4">
                    {navItems.map((item) => (
                        <li className="text-sm tracking-wide uppercase">{item}</li>
                    ))}
                </ul>
            </nav>
            <FaShoppingCart />
        </div>
    )
}

export default Header
