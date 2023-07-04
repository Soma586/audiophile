import './styles.scss'
//import '../../scss/typography.scss'
import Cart from '../../assets/shared/desktop/icon-cart.svg'
import {ReactComponent as HamburgerIcon} from '../../assets/shared/tablet/icon-hamburger.svg'
import { useState } from 'react'
import Accessory from '../Accessory'
import { Route ,Link } from 'react-router-dom'



const Nav = () => {


    const [displayMenu, setDisplayMenu] = useState(false)


    const cancelMenu = () => {

        setDisplayMenu(false)
    }

    return(
        <div className=" w-100 navContainer ">

            {/* desktop view*/}
            <div className="container">
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

            <div className="d-md-block d-md-flex justify-content-md-between  w-100 " >
                <div className="d-flex justify-content-between wtf w-100 d-lg-none">
                    <div className="me-4">
                <HamburgerIcon className="test" onClick={() => setDisplayMenu(!displayMenu)}/>
                </div>

                <div>
                    <Link to="/">
                <span className="type__H6">Audiophile</span>
                </Link>
                </div>
                
                <Link to='/checkout'>
                <img className="cart" src={Cart}/>
                </Link>
                </div>

                {displayMenu && 
                <div className="navDropDown">
                    <div>
                        <Accessory cancelMenu={cancelMenu}/>
                    </div>
                </div>
            }
            </div>
            </div>

        </div>
    )
}




export default Nav