import './styles.scss'
import BestGear from '../../assets/shared/desktop/image-best-gear.jpg'
import tabletGear from '../../assets/shared/tablet/image-best-gear.jpg'
import mobileGear from '../../assets/shared/mobile/image-best-gear.jpg'

const Bestgear = () => {


    return (
        <div className="container d-flex gearContainer">

            <div className="d-none d-lg-block d-lg-flex">
            <div className="w-50 leftGearSide">
                <h3 className="type__H2 mb-4" > BRINGING YOU THE <span className="text-orange">BEST</span> AUDIO GEAR</h3>
                <p className="type__body">
                Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </div>

            <div className="w-50">
                <img src={BestGear}/>
            </div>
            </div>

            {/** tablet */}
            <div className=" d-lg-none gearTabletView">

                <div className="d-none d-sm-block d-lg-none mb-5">
                <img  className="gearImage" src={tabletGear}/> 
                </div>

                <div className="d-sm-none mb-5">
                <img  className="gearImage" src={mobileGear}/> 
                </div>

                <h3 className="type__H2 mb-4" > BRINGING YOU THE <span className="text-orange">BEST</span> AUDIO GEAR</h3>
                <p className="type__body">
                Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>

            </div>
            

        </div>
    )
}


export default Bestgear