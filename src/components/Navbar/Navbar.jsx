import logo from '../../assets/image/logo.png'
import './Navbar.css'
import PropTypes from "prop-types";

const Navbar = ({cost}) => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar-end hidden lg:flex">

            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal">
                    <li><a>Home</a></li>
                    <li><a>Fixture</a></li>
                    <li><a>Teams</a></li>
                </ul>
                <a className="btn">{cost} Coin</a>
            </div>
        </div>
    );
};

Navbar.propTypes ={
    cost: PropTypes.number
}
export default Navbar;