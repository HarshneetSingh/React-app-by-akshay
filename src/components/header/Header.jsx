import Logo from "./headerComp/Logo";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="globalHeader">
            <div className="innerHeader">
                <Logo />
                <div className="links">
                    <ul >
                        <Link className="links-li" to="/search" ><li ><i className="fa-solid fa-magnifying-glass " /> Search</li></Link>
                        <Link className="links-li" to="/offers"><li>Offers</li></Link>
                        <Link className="links-li" to="/help"><li>Help</li></Link>
                        <Link className="links-li" to="/signin"><li><i className="fa-regular fa-user" /> Sign in</li></Link>
                        <Link className="links-li" to="/cart"><li>Cart</li></Link>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Header;