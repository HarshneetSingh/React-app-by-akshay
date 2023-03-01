import Logo from "./headerComp/Logo";

const Header = () => {
    return (
        <div className="globalHeader">
            <div className="innerHeader">
                <Logo />
                <div className="links">
                    <ul className="li"><i className="fa-solid fa-magnifying-glass" /> Search</ul>
                    <ul className="li">Offers</ul>
                    <ul className="li">Help</ul>
                    <ul className="li"><i className="fa-regular fa-user" /> Sign in</ul>
                    <ul className="li">Cart</ul>
                </div>

            </div>


        </div>
    )
};

export default Header;