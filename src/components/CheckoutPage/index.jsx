import { useState } from "react";
import "./styles.scss";
import _ from 'lodash'
import Data from '../../data.json'
import Test from '../../assets/product-xx59-headphones/mobile/image-product.jpg'
import ConfirmationIcon from  '../../assets/checkout/icon-order-confirmation.svg'
import { Route ,Link } from 'react-router-dom';

const ItemCheck = (props) => {

    const { imgLink, price, itemName, quantity } = props

    return (
        <div className="itemCheckContainer d-flex justify-content-between mb-3">
            <div className="d-flex">
                 <img  className="itemThumbNail" src={imgLink}/>
                 <div className="ms-3">
                     <p className="bufferTitle">{itemName}</p>
                     <p className="bufferPrice">$ {(price * quantity).toLocaleString()}</p>
                 </div>
            </div>

            <p className="mt-3">x{quantity}</p>
            
        </div>
    )
}

const ConfirmationBox = (props) => {


    const { trigger, handleClick } = props
    return trigger ? (
        <div className="confirmationPopup">
            <div className="confirmationInnerPopUp">
            <img className="mb-4" src={ConfirmationIcon}/>

                <h1>THANK YOU FOR YOUR ORDER</h1>

                <p className="mb-5">You will recieve an email confirmation shortly</p>

                
                <Link to="/">
                <button className="addToCard w-100" onClick={handleClick} >BACK TO HOME</button>
                </Link>
                </div>

        </div>
    ) : null

}

const whatsIntheCart = () => {

    let cart = []

    _.forEach(Data, (item) => {

        if(sessionStorage.getItem(item.id)){
            cart.push(item)
        }

        
    })

    return cart

}

const SummaryCheck = (props) => {

    const { isValidEmail } = props


    const [cartItems, setCartItems] = useState(whatsIntheCart())

  
   const [grandTotal, setGrandTotal] = useState(0)

   const [trigger, setTrigger] = useState(false);


   const clearCart = () => {

    
    sessionStorage.clear()

   }

    
    const calculateTotal = () => {

        let sum = 0

        _.forEach(cartItems, (item) => {

            sum += item.price * sessionStorage.getItem(item.id)

        })

        return sum.toLocaleString()
    }

    const [total, setTotal] = useState(calculateTotal())
   


    const DisplayCart = _.map(cartItems, (item) => {
        return (
            <ItemCheck 
            imgLink={item.image.mobile}
            itemName={item.name}
            price={item.price}
            quantity={sessionStorage.getItem(item.id)}

            />
        )
    })




    const triggerPay = () => {

        const check = document.querySelectorAll('input')

        let clearToComplete = true

        for(let i = 0; i < check.length; i++){
        
            if(check[i].value === ""){
                
                check[i].style.borderColor= "red"
                clearToComplete = false
            }
        }
      
        if(clearToComplete && isValidEmail) {
            setTrigger(true)
        }
    }



  return (
    <div className="summaryContainer bg-white mb-4">
      <h2 className="type__H6 mb-4">SUMMARY</h2>

       {DisplayCart}

      <div className="d-flex justify-content-between type__body">
        <p>TOTAL</p>

        <p className="boldP">$ {total}</p>
      </div>

      <div className="d-flex justify-content-between type__body">
        <p>SHIPPING</p>

        <p className="boldP">$ 0</p>
      </div>

      <div className="d-flex justify-content-between type__body">
        <p>GRAND TOTAL</p>

        <p className="boldP">$ {total}</p>
      </div>


        {!_.isEmpty(cartItems) &&
      <button className="checkoutButton bg-orange text-white" onClick={triggerPay}>
        CONTINUE & PAY
      </button> 
      
    }

      <ConfirmationBox trigger={trigger} handleClick={clearCart}/>
    </div>
  );
};

const CheckoutPage = () => {


    const [emailValue,  setEmail] = useState('')
    const [isValidEmail, setValidEmail] = useState(true)
    const [num, setnum] = useState('')


    const handleEmailChange = (event) => {

        setEmail(event.target.value)
    }

    const valideEmail = (email) => {


        if(String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )){
            return true;
        }else{{
            return false
        }}

   

    }

    const phone = (event) => {

        setnum(event.target.value)
    }


    const test = () => {
        

        if(emailValue !== ''){

            setValidEmail(valideEmail(emailValue))
        }
    }


  return (
     

    <div className="container-fluid bg-grey pt-4"> 
    <div className="container  ">
      
      <div className="row gx-3">
        <div className="col-lg-8">
          <div className="checkoutDetails bg-white">
            <h2 className="type__H3">CHECKOUT</h2>

            <p className="subTitle text-orange">BILLING DETAILS</p>

            <div className="d-md-flex  flex-wrap justify-content-between">
              <div className="inputfield mb-3">
                  <div className="d-flex justify-content-between">
                    <label className="type__body">Name</label>
                    {/* <label className="type__body error">Field required</label> */}
                </div>
                <input className="type__body" placeholder="Alexel Ward" />
              </div>

              <div className="inputfield mb-3">
                  <div className="d-flex justify-content-between">
                <label className="type__body">Email Address</label>

                {!isValidEmail && 
                <label className="type__body error">Wrong format</label>
                }
                </div>
                <input className="type__body" 
                placeholder="alexel@mail.com" 
                onBlur={test}
                onChange={handleEmailChange}
                value={emailValue}
                
                />
              </div>

              <div className="inputfield mb-3">
                <label className="type__body">Phone Number</label>
                <input className="type__body" 
                type="number"
                onWheel={(e) => e.target.blur()}
                placeholder="+1 202 555-0136" 
                onChange={phone}
                value={num}
                
                />
              </div>
            </div>

            <p className="subTitle text-orange">SHIPPING INFO</p>

            <label className="type__body">Address</label>
            <input className="type__body mb-3" placeholder="1137 Willams Avenue" />

            <div className="d-md-flex  flex-wrap justify-content-between ">
              <div className="inputfield mb-3">
                <label className="type__body">ZIP Code</label>
                <input className="type__body" 
                type="number" 
                placeholder="10011" 
                onWheel={(e) => e.target.blur()}
                />
              </div>

              <div className="inputfield mb-3">
                <label className="type__body">City</label>
                <input className="type__body" placeholder="New York" />
              </div>

              <div className="inputfield">
                <label className="type__body">Country</label>
                <input className="type__body" placeholder="United States" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <SummaryCheck isValidEmail={isValidEmail}/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CheckoutPage;
