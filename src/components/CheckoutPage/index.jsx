
import { useState } from 'react'
import './styles.scss'





const SummaryCheck = () => {
    
    return (
        <div className="summaryContainer col-lg-4 ">

            <h2>
                SUMMARY
            </h2>

            <div className="d-flex justify-content-between">
                <p>TOTAL</p>

                <p>$ 5,396</p>

            </div>

            <div className="d-flex justify-content-between">
                <p>SHIPPING</p>

                <p>$ 50</p>

            </div>

            <div className="d-flex justify-content-between">
                <p>GRAND TOTAL</p>

                <p>$ 5,396</p>

            </div>

        </div>
    )
}

const CheckoutPage = () => {

    return(
        <div className="container">
            <div className="row g-3">
            <div className="checkoutDetails col-lg-8">
                <h1>CHECKOUT</h1>


                <p>BILLING DETAILS</p>


                <label>
                    Name
                </label>
                <input placeholder="Alexel Ward"/>

                <label>
                    Email Address
                </label>
                <input placeholder="alexel@mail.com"/>

                <label>
                    Phone Number
                </label>
                <input placeholder="+1 202 555-0136"/>


                <p>SHIPPING INFO</p>

                <label>
                    Your Address
                </label>
                <input placeholder="1137 Willams Avenue"/>

                <label>
                    ZIP Code
                </label>
                <input placeholder="10011"/>

                <label>
                    City
                </label>
                <input placeholder="New York"/>

                <label>
                    Country
                </label>
                <input placeholder="United States"/>






            </div>


            <SummaryCheck/>
            </div>

        </div>
    )
}


export default CheckoutPage