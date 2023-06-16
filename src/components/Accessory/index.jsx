import HeadPhones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import Speakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarPhones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import "./styles.scss";
import _ from "lodash";

const AccessoryCard = (props) => {
  const { title, link, img } = props;

  return (
    <div className="accessCard">
      <div className="imgContainer">
        <img className="accImage" src={img} />
     
        <div className="accBottom">
        <p className="type__H5">{title}</p>
        <p className="subTitle">SHOP</p>
        </div>
        </div>
      
    </div>
  );
};

const Accessory = () => {
  const data = [
    {
      title: "HEADPHONES",
      img: HeadPhones,
    },
    {
      title: "SPEAKERS",
      img: Speakers,
    },
    {
      title: "EARPHONES",
      img: EarPhones,
    },
  ];

  const acc = _.map(data, (x) => {
    return <AccessoryCard title={x.title} img={x.img} />;
  });

  return (
    <div>
      <div className="d-md-flex justify-content-between">{acc}</div>
    </div>
  );
};

export default Accessory;
