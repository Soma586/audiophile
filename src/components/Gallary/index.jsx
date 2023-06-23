import "./styles.scss";
import Person from "../../assets/shared/mobile/image-best-gear.jpg";
import imageGal from "../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import imageGal3 from "../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";

const Gallary = () => {
  return (
    <div className="container triStage">
      <div className="row">
        <div className="col-lg-6">
          <img className="firstImgStage mb-3" src={Person} />

          <img className="firstImgStage" src={imageGal} />
        </div>

        <div className="col-lg-6">
          <img className="w-100 h-100" src={imageGal3} />
        </div>
      </div>
    </div>
  );
};

export default Gallary;
