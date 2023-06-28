import ProductDetails from "../../components/ProductDetails"
import Gallary from "../../components/Gallary"



const ProductPage = (props) => {


    return (
        <div>
            <ProductDetails {...props}/>
            <Gallary gallery={props.gallery}/>

        </div>
    )


}


export default ProductPage