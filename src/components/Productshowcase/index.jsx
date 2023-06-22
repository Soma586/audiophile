import './styles.scss'
import Test from '../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'
import CallToAction from '../Cta'




const Productshowcase = () => {



    return (
        <div className ="">

            <div className="d-lg-flex flex-row d-none d-lg-block">

            
            <img className="productImg" src={Test}/>


            <div className="productDesc">
                <p className="overLine text-orange">NEW PRODUCT</p>

                <h2 className="type__H2">
                XX99 Mark II Headphones
                </h2>

                <p className="type__body">
                The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
                </p>

                <CallToAction/>
            </div>
            </div>

            <div className="d-lg-none">
                <img className="productImg" src={Test}/>

                <div className="productDesc mt-5">
                <p className="overLine text-orange">NEW PRODUCT</p>

                <h2 className="type__H2">
                XX99 Mark II Headphones
                </h2>

                <p className="type__body">
                The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
                </p>

                <CallToAction/>
            </div>

            </div>


        </div>
    )
}


export default Productshowcase