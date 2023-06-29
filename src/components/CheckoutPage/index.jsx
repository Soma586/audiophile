import { useState } from "react";
import "./styles.scss";

const SummaryCheck = () => {
  return (
    <div className="summaryContainer">
      <h2 className="type__H6">SUMMARY</h2>

      <div className="d-flex justify-content-between type__body">
        <p>TOTAL</p>

        <p className="boldP">$ 5,396</p>
      </div>

      <div className="d-flex justify-content-between type__body">
        <p>SHIPPING</p>

        <p className="boldP">$ 50</p>
      </div>

      <div className="d-flex justify-content-between type__body">
        <p>GRAND TOTAL</p>

        <p className="boldP">$ 5,396</p>
      </div>

      <button className="checkoutButton bg-orange text-white">
        CONTINUE & PAY
      </button>
    </div>
  );
};

const CheckoutPage = () => {


    const [emailValue,  setEmail] = useState('')
    const [isValidEmail, setValidEmail] = useState(true)
    const [num, setnum] = useState('')

    console.log("checking session")
    console.log(sessionStorage.getItem('pimp'))


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

        console.log(event.target.value)
        setnum(event.target.value)
    }


    const test = () => {
        

        if(emailValue !== ''){

            // if(!valideEmail(emailValue)){
            //     console.log("not a valid email")
            // }
            setValidEmail(valideEmail(emailValue))
        }
    }


  return (
     
    <div className="container">
      
      <div className="row gx-3">
        <div className="col-lg-8">
          <div className="checkoutDetails ">
            <h2 className="type__H3">CHECKOUT</h2>

            <p className="subTitle text-orange">BILLING DETAILS</p>

            <div className="d-md-flex  flex-wrap justify-content-between">
              <div className="inputfield mb-3">
                <label className="type__body">Name</label>
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
                <input className="type__body" type="number" placeholder="10011" />
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
          <SummaryCheck />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
