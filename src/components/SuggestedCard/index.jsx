import './styles.scss'
import CallToAction from '../Cta'
import Mark from '../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg'



const SuggestCard = () => {


    return (
        <div className="suggestCard">

            {/* ///<img */}
            <img className="cardImage" src={Mark}/>

            <h3 className="type__H5 mt-4 mb-4">XX99 MARK I</h3>

            <CallToAction/>

        </div>
    )
}


export default SuggestCard