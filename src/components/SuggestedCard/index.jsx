import './styles.scss'
import CallToAction from '../Cta'
import Mark from '../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg'



const SuggestCard = (props) => {


    const {title, imgLink} = props


    return (
        <div className="suggestCard">

            {/* ///<img */}
            <img className="cardImage" src={imgLink}/>

            <h3 className="type__H5 mt-4 mb-4">{title}</h3>

            <CallToAction/>

        </div>
    )
}


export default SuggestCard