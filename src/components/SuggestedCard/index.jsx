import './styles.scss'
import CallToAction from '../Cta'
import Mark from '../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg'
import { Route ,Link } from 'react-router-dom';



const SuggestCard = (props) => {


    const {title, imgLink, link} = props


    return (
        <div className="suggestCard">

            {/* ///<img */}
            <img className="cardImage" src={imgLink}/>

            <h3 className="type__H5 mt-4 mb-4">{title}</h3>

            <Link to={`/${link}`}>
            <CallToAction/>
            </Link>

        </div>
    )
}


export default SuggestCard