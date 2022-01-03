import catBed from "./cat-bed.svg"
import { Link } from "react-router-dom"


const Header = () =>{

    return(
      <div className="header">
    <h2>A cat shop</h2>
    <div className="basketIcon">
    <img src={catBed} alt="a shopping cart" />
    <button className="checkOutButton">Check out</button>
    <Link to="/basket">Basket</ Link>
    </div>
  
    </div>)
  }

  export default Header;