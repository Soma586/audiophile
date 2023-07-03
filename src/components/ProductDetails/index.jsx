import { useState } from 'react';
import _ from 'lodash'
import './styles.scss'
import myr from '../../assets/product-xx59-headphones/desktop/image-product.jpg'
import Data from '../../data.json'
import '../CheckoutPage/styles.scss'
import { Route ,Link } from 'react-router-dom';
import ConfirmationIcon from  '../../assets/checkout/icon-order-confirmation.svg'






const ConfirmationBox = () => {


    return (
        <div>
            <img src={ConfirmationIcon}/>

                <h1>THANK YOU FOR YOUR ORDER</h1>

                <p>You will recieve an email confirmation shortly</p>

                
                <Link to="/">
                <button className="addToCard w-100" >BACK TO HOME</button>
                </Link>

        </div>
    )

}


const ItemCheck = (props) => {

    const { imgLink, price, itemName, quantity } = props

    return (
        <div className="itemCheckContainer d-flex justify-content-between">
            <div className="d-flex">
                 <img  className="itemThumbNail" src={imgLink}/>
                 <div className="ms-3">
                     <p className="bufferTitle">{itemName}</p>
                     <p className="bufferPrice">{price}</p>
                 </div>
            </div>

            <p>x{quantity}</p>
            
        </div>
    )

}


const whatsIntheCart = () => {

    let cart = []

    _.forEach(Data, (item) => {

        if(sessionStorage.getItem(item.id)){
            cart.push(item)
        }

        
    })

    //console.log(cart)
    return cart

}

const PopupCheckOutBox = (props) => {


    const {trigger, handleClick, cart, handleRemove} = props

    

    //const Total = useSta

    const DisplayCart = _.map(cart, (item) => {
        return (
            <ItemCheck 
            imgLink={item.image.mobile}
            itemName={item.name}
            price={item.price}
            quantity={sessionStorage.getItem(item.id)}

            />
        )
    })


    const removeItems = () => {

        sessionStorage.clear()
        //setCartItems([])
    }

    return  trigger ? (
        <div className="popup" >
            <div className="innerpopUp">
                <div className="d-flex justify-content-between">
                    <h4>CART ({cart.length}) </h4>
                    <button onClick={handleRemove}>Remove all </button>
                </div>



                {DisplayCart}


                <div>
                    <p>TOTAL</p>

                </div>

            
                <button className="addToCard w-100 mb-3" onClick={handleClick}> CONTINUE SHOPPING</button>
                <Link to="/checkout">
                <button className="addToCard w-100" >CHECKOUT</button>
                </Link>
            </div>
        </div>
    ) : null





}

const ProductDetails = (props) => {


    const {name, description, price, image, id, features, includes } = props;

    const [quantity, setQuantity] = useState(1)

    const [trigger, setTrigger] = useState(false)
    const [cartItems, setCartItems] = useState(whatsIntheCart())

    console.log(props)
    //const test = require(image.desktop)
    //console.log(test)
    //const x = '../.' + image.desktop
    //const test = require('../../assets/product-xx59-headphones/desktop/image-product.jpg')
    
    //const lol = require(x).default;
    const tt = '/assets/product-xx59-headphones/desktop/image-product.jpg'
    console.log(myr)
    console.log(id)

    const removeAllItems = () => {

        sessionStorage.clear()
        setCartItems([])

    }
    //console.log(x)

    const addItemToCard = () => {


        // if(sessionStorage.getItem){

        // }
        sessionStorage.setItem(id, quantity)
        setCartItems(whatsIntheCart())

        setTrigger(true)
    }

    const handlePopup = () => {
        setTrigger(false)
    }


    const increaseQuantity = () => {

        if(quantity !== 9){
            setQuantity(quantity + 1)
        }
    }

    const decreaseQuantity = () => {

        if(quantity !== 1) {
         setQuantity(quantity - 1)
        }
    }


    const including = _.map(includes, (item) => {

        return (
            <div>
            <span className="me-3">{item.quantity}x </span>
            <span>{item.item}</span>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img className="w-100" src={image.desktop} alt="image"/>


                    
                </div>

                <div className="col-lg-6">
                    <p>NEW PRODUCT</p>

                    <h1>{name}</h1>
                        {/* <p>{title}</p> */}
                    <p>
                    {description}
                    </p>

                        <p>$ {price}</p>

                        <div className="d-flex">
                        <div className="bg-grey quantityContainer d-flex justify-content-between me-3">
                            <button className="quantityButton" onClick={decreaseQuantity}>-</button>
                            <span className="type__body">{quantity}</span>
                            <button className="quantityButton"  onClick={increaseQuantity}>+</button>
                        </div>
                        <button onClick={addItemToCard}>
                            ADD TO CART
                        </button>
                        <PopupCheckOutBox 
                        trigger={trigger} 
                        handleClick={handlePopup} 
                        cart={cartItems}
                        handleRemove={removeAllItems}
                        />

                        </div>
                    
                    
                    </div>

            </div>

            <div className="row">
                <div className="col-lg-8">
                    <h2>FEATURES</h2>

                    <p>
                    {features}
                    </p>
                </div>

                <div className="col-lg-4">
                    <h2>IN THE BOX</h2>

                    <div>
                        {including}
                    </div>

                </div>

            </div>


        </div>
    )
}



export default ProductDetails