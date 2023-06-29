import './styles.scss'
//import '../../scss/typography.scss'
import Cart from '../../assets/shared/desktop/icon-cart.svg'
import {ReactComponent as HamburgerIcon} from '../../assets/shared/tablet/icon-hamburger.svg'
import { useState } from 'react'
import Accessory from '../Accessory'
import { Route ,Link } from 'react-router-dom'



const Nav = () => {


    const [displayMenu, setDisplayMenu] = useState(false)

    return(
        <div className=" w-100 navContainer ">

            {/* desktop view*/}
            <div className="d-none d-lg-block d-lg-flex justify-content-between ">
            <span className="type__H6">Audiophile</span>
            
            <div className="d-flex justify-content-between type__H6 navList">
                <Link to="/">
                <p>HOME</p>
                </Link>
                <Link to="/category/headphones">
                <p>HEADPHONES</p>
                </Link>
                <Link to="/category/speakers">
                <p>SPEAKERS</p>
                </Link>
                <Link to="/category/earphones">
                <p>EARPHONES</p>
                </Link>
            </div>
            
            <Link to={"checkout"}>
                <img className="cart" src={Cart}/>
            </Link>
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