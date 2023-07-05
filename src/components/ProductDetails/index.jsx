import { useState } from 'react';
import _ from 'lodash'
import './styles.scss'
import myr from '../../assets/product-xx59-headphones/desktop/image-product.jpg'
import Data from '../../data.json'
import '../CheckoutPage/styles.scss'
import { Route ,Link } from 'react-router-dom';











const ItemCheck = (props) => {

    const { imgLink, price, itemName, quantity } = props

    return (
        <div className="itemCheckContainer d-flex justify-content-between mb-4">
            <div className="d-flex">
                 <img  className="itemThumbNail" src={imgLink}/>
                 <div className="ms-3">
                     <p className="bufferTitle type__body">{itemName}</p>
                     <p className="bufferPrice">$ {(price * quantity).toLocaleString()}</p>
                 </div>
            </div>

            <p className="mt-3">x{quantity}</p>
            
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
            <div className="   innerpopUp">
                <div className="d-flex justify-content-between mb-3">
                    <h4>CART ({cart.length}) </h4>
                    <button onClick={handleRemove}>Remove all </button>
                </div>



                {DisplayCart}


            
                <button className="addToCard w-100 mb-3" onClick={handleClick}> CONTINUE SHOPPING</button>
                <Link to="/checkout">
                <button className="addToCard w-100" >CHECKOUT</button>
                </Link>
            </div>
        </div>
    ) : null





}

const ProductDetails = (props) => {


    const {name, description, price, image, id, features, includes, isnew } = props;

    const [quantity, setQuantity] = useState(1)

    const [trigger, setTrigger] = useState(false)
    const [cartItems, setCartItems] = useState(whatsIntheCart())


    const removeAllItems = () => {

        sessionStorage.clear()
        setCartItems([])

    }
    //console.log(x)

    const addItemToCard = () => {


        if(sessionStorage.getItem(id)){
            sessionStorage.setItem(id,  +sessionStorage.getItem(id) + quantity)
           
        }else{
            sessionStorage.setItem(id, quantity)
        }
        
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
            <div className="mb-2">
            <span className="me-3 text-orange">{item.quantity}x </span>
            <span>{item.item}</span>
            </div>
        )
    })

    return (
        
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-6">
                    <img className="w-100" src={image.desktop} alt="image"/>


                    
                </div>

                <div className="col-lg-6 productDetail">

                    {isnew && 
                    <p className="overLine text-orange">NEW PRODUCT</p>

                    }

                    <h1 className="type__H2">{name}</h1>
                        {/* <p>{title}</p> */}
                    <p className="type__body">
                    {description}
                    </p>

                        <p>$ {price}</p>

                        <div className="d-flex">
                        <div className="bg-grey quantityContainer d-flex justify-content-between me-3">
                            <button className="quantityButton" onClick={decreaseQuantity}>-</button>
                            <span className="type__body quantityBuffer">{quantity}</span>
                            <button className="quantityButton"  onClick={increaseQuantity}>+</button>
                        </div>
                        <button className="addToCard bg-orange text-white" onClick={addItemToCard}>
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

            <div className="row mt-5 mb-5">
                <div className="col-lg-8 pe-5 mb-5">
                    <h2 className="type__H3">FEATURES</h2>

                    <p className="type__body">
                    {features}
                    </p>
                </div>

                <div className="col-lg-4">
                    <h2 className="type__H3">IN THE BOX</h2>

                    <div>
                        {including}
                    </div>

                </div>

            </div>


        </div>
       
    )
}



export default ProductDetails