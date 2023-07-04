import './styles.scss'
import classNames from 'classnames';


const CallToAction = (props) => {


    const {
        bgcolor = 'orange',
        textcolor = 'white'
    } = props;
    return (
        <button className={classNames(bgcolor === 'orange' ? 'orangeColor' : 'greyColor', `ctaContainer `)} >
            SEE PRODUCT
        </button>
    )

}


export default CallToAction