import classNames from "classnames"


const CategoryDetail = (props) => {


    
    const {col1, col2, imgLink, isNew, title, desc } = props

    //console.log(imgLink)
    return (
        <div className="container">
            <div className="row">
                <div className={classNames(`col-lg-6 order-${col1}`)}>
                    <img  className="w-100" src={imgLink}/>
                </div>
                <div className={classNames(`col-lg-6 order-${col2}`)}>
                        <div>

                            {isNew && <p>NEW PRODUCT</p>}
                        <h2>{title}</h2>

                        <p>{desc}</p>
                        </div>
                </div>
            </div>

        </div>
    )
}


export default CategoryDetail