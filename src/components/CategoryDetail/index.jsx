import classNames from "classnames"
import './styles.scss'
import CallToAction from "../Cta"
import { Route ,Link } from 'react-router-dom'

const CategoryDetail = (props) => {


    
    const {col1, col2, imgLink, isNew, title, desc, link } = props

    //console.log(imgLink)
    return (
        <div className="container catergoryContainer ">
            <div className="d-none d-lg-block">
            <div className="row">
                <div className={classNames(`col-lg-6 order-${col1}`)}>
                    <img  className="w-100 h-100 cartgoryImg" src={imgLink}/>
                </div>
                <div className={classNames(`col-lg-6 order-${col2}`)}>
                        <div className="categoryDetails ">

                            {isNew && <p>NEW PRODUCT</p>}
                        <h2>{title}</h2>

                        <p>{desc}</p>

                        <Link to={`/${link}`}>
                        <CallToAction/>
                        </Link>
                        </div>
                </div>
            </div>
            </div>

            <div className="d-lg-none w-100">

                <img className="mobileImgCat" src={imgLink}/>

                <div className='text-center mt-5 mb-4'>
                    {isNew && <p>NEW PRODUCT</p>}
                    <h2> {title}</h2>
                    <p>{desc}</p>

                    <Link to={`/${link}`}>
                    <CallToAction/>
                    </Link>
                </div>

            </div>

        </div>
    )
}


export default CategoryDetail