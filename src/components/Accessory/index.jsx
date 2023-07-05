import HeadPhones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import Speakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarPhones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import "./styles.scss";
import _ from "lodash";
import { Route ,Link } from 'react-router-dom';

const AccessoryCard = (props) => {
  const { title, link, img, handleMenu } = props;

  return (
    <div className="accessCard">
      <div className="imgContainer">
        <img className="accImage" src={img} />
     
        <div className="accBottom">
        <p className="type__H5 text-black">{title}</p>
        
        <Link to={link} onClick={handleMenu} >
        <button  className="subTitle accButton ">SHOP</button>
        </Link>
        </div>
        </div>
      
    </div>
  );
};

const Accessory = (props) => {


    const {cancelMenu} = props
    
  const data = [
    {
      title: "HEADPHONES",
      img: HeadPhones,
      link: '/category/headphones'
    },
    {
      title: "SPEAKERS",
      img: Speakers,
      link: '/category/speakers'
    },
    {
      title: "EARPHONES",
      img: EarPhones,
      link: '/category/earphones'
    },
  ];

  const acc = _.map(data, (x) => {
    return <AccessoryCard title={x.title} img={x.img}  link={x.link} handleMenu={cancelMenu}/>;
  });

  return (
    <div>
      <div className="d-md-flex justify-content-between">{acc}</div>
    </div>
  );
};

export default Accessory;
