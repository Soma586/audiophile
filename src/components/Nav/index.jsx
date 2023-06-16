import './styles.scss'
//import '../../scss/typography.scss'
import Cart from '../../assets/shared/desktop/icon-cart.svg'
import {ReactComponent as HamburgerIcon} from '../../assets/shared/tablet/icon-hamburger.svg'
import { useState } from 'react'
import Accessory from '../Accessory'



const Nav = () => {


    const [displayMenu, setDisplayMenu] = useState(false)

    return(
        <div className="container navContainer ">

            {/* desktop view*/}
            <div className="d-none d-lg-block d-lg-flex justify-content-between ">
            <span className="type__H6">Audiophile</span>
            
            <div className="d-flex justify-content-between type__H6 navList">
                <p>HOME</p>
                <p>HEADPHONES</p>
                <p>SPEAKERS</p>
                <p>EARPHONES</p>
            </div>
            <img className="cart" src={Cart}/>
            </div>

            {/* tablet view */}

            <div className="d-md-block d-lg-none" >
                <div className="d-md-flex justify-content-between d-lg-none">
                <HamburgerIcon className="test" onClick={() => setDisplayMenu(!displayMenu)}/>
                <span className="type__H6">Audiophile</span>

                <img className="cart" src={Cart}/>
                </div>

                {displayMenu && 
                <div className="navDropDown">
                    <div>
                        <Accessory/>
                    </div>
                </div>
            }
            </div>

        </div>
    )
}




export default Nav