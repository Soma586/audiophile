import './styles.scss'
//import '../../scss/typography.scss'
import Cart from '../../assets/shared/desktop/icon-cart.svg'




const Nav = () => {



    return(
        <div className="container navContainer d-flex justify-content-between">
            <span className="type__H6">Audiophile</span>
            
            <div className="d-flex justify-content-between type__H6 navList">
                <p>HOME</p>
                <p>HEADPHONES</p>
                <p>SPEAKERS</p>
                <p>EARPHONES</p>
            </div>
            <img className="cart" src={Cart}/>
        </div>
    )
}




export default Nav