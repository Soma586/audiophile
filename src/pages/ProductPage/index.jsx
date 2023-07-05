import ProductDetails from "../../components/ProductDetails"
import Gallary from "../../components/Gallary"
import SuggestCard from "../../components/SuggestedCard"
import _ from 'lodash'



const Suggest = (props) => {

    const { others } = props

    const otherItems = _.map(others, (item) => {
        return (
        <SuggestCard title={item.name} imgLink={item.image.desktop} link={item.slug}/>
        )
    })

    return (
        <div className="container mt-5 mb-5">
            <div className="d-lg-flex justify-content-between">
            {otherItems}
            </div>
        </div>
    )
}

const ProductPage = (props) => {

    return (
        <div>
        
        
            <ProductDetails {...props} isnew={props.new}/>
            <Gallary gallery={props.gallery}/>
            <Suggest {...props}/>

        </div>
    )


}


export default ProductPage