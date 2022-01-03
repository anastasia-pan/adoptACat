
import { useState } from "react";
import { ClipLoader } from "react-spinners"


const Basket = (props) => {


    const [catsBought, setCatsBought] = useState(false)
    const [loading, setLoading] = useState(false)
    let catBasket = props.catBasket
    let setcatBasket = props.setCatBasket

    const getTotal = () => {
        let sum = 0
        for (let i in catBasket) {
            sum += catBasket[i].price 
        }
        return sum
    }

    const notification = async () => {
        setLoading(true)
    setTimeout(() => {
        setcatBasket([])
        setCatsBought(true)
        setLoading(false) 
    
    }, 1000)

        
    }
    

    return (

    <div>
        {loading ? (
        <ClipLoader loading={loading} width={150} height={5} />
        ) 
        : 
        (
        catsBought ? 
            <h2>Thank you for your custom, your felines will arrive soon! </h2>
        :  
            catBasket.map((product, index) => {
                return ( <>
                    <BasketItem key={index} product={product} image={product.url} price={product.price}/>  
                    <h3>Your total is: {getTotal()}</h3>
                    <button onClick={notification}>Purchase here</button> 
                    </>
                ) 
            })
        )
    }

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
