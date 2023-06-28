import './styles.scss'
import myr from '../../assets/product-xx59-headphones/desktop/image-product.jpg'

const ProductDetails = (props) => {


    const {name, description, price, image } = props;

    console.log(props)
    //const test = require(image.desktop)
    //console.log(test)
    //const x = '../.' + image.desktop
    //const test = require('../../assets/product-xx59-headphones/desktop/image-product.jpg')
    
    //const lol = require(x).default;
    const tt = '/assets/product-xx59-headphones/desktop/image-product.jpg'
    console.log(myr)
    //console.log(x)

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img className="w-100" src={image.desktop} alt="image"/>


                    
                </div>

                <div className="col-lg-6">
                    <p>NEW PRODUCT</p>

                    <h1>{name}</h1>
                        {/* <p>{title}</p> */}
                    <p>
                    {description}
                    </p>

                        <p>$ {price}</p>

                        <button>
                            ADD TO CART
                        </button>
                    
                    </div>

            </div>


        </div>
    )
}



export default ProductDetails