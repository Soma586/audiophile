import './styles.scss';
import ZX9 from '../../assets/home/desktop/image-speaker-zx9.png'
import Circle from '../../assets/home/desktop/pattern-circles.svg'
import CallToAction from '../Cta';



const FirstContainer = () => {

    return (
        <div className="bg-orange firstContainer d-flex justify-content-center justify-content-lg-between">

        <div className="d-none d-lg-block d-lg-flex justify-content-between w-100">
            <div>
            <img src={ZX9} className="firstImage"/>
            <img src={Circle} className="circle"/>
            </div>

            <div className="firstDesc">
                <h2 className="type__H1 text-white">ZX9 SPEAKER</h2>
                <p className="type__body text-white">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <CallToAction bgcolor="black"/>
            </div>
            </div>


            <div className="d-lg-none">

            <div className="">
            <img src={ZX9} className="firstImage"/>
            <img src={Circle} className="circle"/>
            </div>

            <div className="firstDesc">
                <h2 className="type__H1 text-white">ZX9 SPEAKERdd</h2>
                <p className="type__body text-white">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <CallToAction bgcolor="black"/>
            </div>
            </div>
            
        </div>
    )
}


const ShowCase = () => {
    

    return (
        <div className="container">

            <FirstContainer/>

        </div>
    )
}

export default ShowCase