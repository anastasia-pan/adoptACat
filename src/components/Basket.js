
import { useState } from "react";


const Basket = (props) => {

    const [total, setTotal] = useState(0)
    const [catsBought, setCatsBought] = useState(false)
    let catBasket = props.catBasket
    let setcatBasket = props.setCatBasket

    const changeTotal = () => {
        let sum = total
        for (let i in catBasket) {
            sum += i.price 
        }
        setTotal(sum)
    }

    const notification = async () => {
    alert("Cats purchased!")
    setcatBasket([])
    setTimeout(setCatsBought(true), 2000)
        
    }
    

    return (

    <div>
    {catsBought ? 
    <h2>Thank you for your custom, your felines will arrive soon! </h2>
    :  
    catBasket.map((product, index) => {
        return ( <BasketItem key={index} product={product} image={product.url} price={product.price}/>   
            ) 
  
    })}
    <h3>Your total is: {total}</h3>
    <button>Purchase here</button>
    </div>
    )

} 

const BasketItem = (props) => {
    return(
        <div>
            <img src={props.image} alt="a cat" />
            <h3>name: {props.product.name}</h3>
            <h3>price: {props.product.price}</h3>
        </div>
    )
    
}

export default Basket;
