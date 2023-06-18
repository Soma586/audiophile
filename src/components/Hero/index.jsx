import Herobackground from '../../assets/home/desktop/image-hero.jpg'
import './styles.scss';
import CallToAction from '../Cta';

const HeroHome = () => {

    return(
        <div className="container-fluid heroContainer">
            {/* <img  className="imageHeroOverlay" src={Herobackground}/> */}
            <div className=" container">
                <div className="heroDesc">
                <p className="heroText text-lightgrey productText">NEW PRODUCT</p>
                <h1 className="type__H1 text-white">
                    XX99 MARK II HEADPHONES
                </h1>
                <p className="text-white">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>

                <CallToAction/>
                </div>
            </div>
            
        </div>
    )
}


export default HeroHome