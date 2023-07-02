import { useState } from 'react';
import './styles.scss'
import myr from '../../assets/product-xx59-headphones/desktop/image-product.jpg'

const ProductDetails = (props) => {


    const {name, description, price, image, id } = props;

    const [quantity, setQuantity] = useState(1)

    console.log(props)
    //const test = require(image.desktop)
    //console.log(test)
    //const x = '../.' + image.desktop
    //const test = require('../../assets/product-xx59-headphones/desktop/image-product.jpg')
    
    //const lol = require(x).default;
    const tt = '/assets/product-xx59-headphones/desktop/image-product.jpg'
    console.log(myr)
    console.log(id)
    //console.log(x)

    const addItemToCard = () => {


        // if(sessionStorage.getItem){

        // }
        sessionStorage.setItem(id, quantity)
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

                        </div>
                    
                    
                    </div>

            </div>


        </div>
    )
}



export default ProductDetails