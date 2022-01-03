import catBed from "./cat-bed.svg"
import { Link } from "react-router-dom"


const Header = (props) =>{

    return(
      <div className="header">
    <Link to="/">
    <h2>A cat shop</h2>
    </Link>
    <div className="basketIcon">
    <img src={catBed} alt="a shopping cart" />
    <Link className="checkOutButton" to="/basket">Basket {props.catBasket.length ? props.catBasket.length : ""} </ Link>
    </div>
  
    </div>)
  }

  export default Header;