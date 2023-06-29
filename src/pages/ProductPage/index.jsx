import ProductDetails from "../../components/ProductDetails"
import Gallary from "../../components/Gallary"
import SuggestCard from "../../components/SuggestedCard"
import _ from 'lodash'



const Suggest = (props) => {

    const { others } = props

    console.log(others)

    const otherItems = _.map(others, (item) => {
        return (
        <SuggestCard title={item.name} imgLink={item.image.desktop}/>
        )
    })

    return (
        <div className="container">
            <div className="d-lg-flex justify-content-between">
            {otherItems}
            </div>
          


        </div>
    )
}

const ProductPage = (props) => {

    console.log("i'm on the product page")


    return (
        <div>
        
        
            <ProductDetails {...props}/>
            <Gallary gallery={props.gallery}/>
            <Suggest {...props}/>

        </div>
    )


}


export default ProductPage