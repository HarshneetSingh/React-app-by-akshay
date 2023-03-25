import Logo from "./headerComp/Logo";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="w-full h-20 bg-white shadow-[0_15px_40px_-20px_rgba(40,44,63,.15)]">
            <div className="w-4/5 h-full m-auto flex justify-between items-center">
                <Logo />
                <div className="w-2/4">
                    <ul className="flex justify-between text-xl">
                        <Link className="" to="/search" ><li ><i className="fa-solid fa-magnifying-glass " /> Search</li></Link>
                        <Link className="" to="/offers"><li>Offers</li></Link>
                        <Link className="" to="/help"><li>Help</li></Link>
                        <Link className="" to="/signin"><li><i className="fa-regular fa-user text-2xl" /> Sign in</li></Link>
                        <Link className="" to="/cart"><li>Cart</li></Link>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Header;