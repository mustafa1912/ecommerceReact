import { Link, NavLink } from "react-router-dom";
import user from '../assets/images/user.svg'
import cart from '../assets/images/cart.svg'

const Header = () => {
    return (
        <nav
            className="custom-navbar navbar navbar-expand-md navbar-dark"
            aria-label="Furni navigation bar"
        >
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Furni<span>.</span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarsFurni"
                    aria-controls="navbarsFurni"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsFurni">
                    <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <Link className="nav-link" to="/products">
                                Shop
                            </Link>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/contact">
                                Contact us
                            </NavLink>
                        </li>
                    </ul>

                    <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                        <li>
                            <NavLink className="nav-link" to="#">
                                <img src={user} alt="user" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/cart">
                                <img src={cart} alt="cart" />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;