import './styles.scss'
import classNames from 'classnames';


const CallToAction = (props) => {


    const {
        bgcolor = 'orange',
        textcolor = 'white'
    } = props;
    return (
        <button className={classNames(`bg-${bgcolor} ctaContainer text-${textcolor}`)} >
            SEE PRODUCT
        </button>
    )

}


export default CallToAction