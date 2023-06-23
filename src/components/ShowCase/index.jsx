import "./styles.scss";
import ZX9 from "../../assets/home/desktop/image-speaker-zx9.png";
import ZX7 from "../../assets/home/desktop/image-speaker-zx7.jpg";
import tabletZX7 from "../../assets/home/tablet/image-speaker-zx7.jpg";
import mobileZX7 from "../../assets/home/mobile/image-speaker-zx7.jpg";
import YX1 from "../../assets/home/desktop/image-earphones-yx1.jpg";
import tabletYX1 from "../../assets/home/tablet/image-earphones-yx1.jpg";
import mobileYX1 from "../../assets/home/mobile/image-earphones-yx1.jpg";
import Circle from "../../assets/home/desktop/pattern-circles.svg";
import CallToAction from "../Cta";

const FirstContainer = () => {
  return (
    <div className="bg-orange firstContainer d-flex justify-content-center justify-content-lg-between mb-4">
      <div className="d-none d-lg-block d-lg-flex justify-content-between w-100">
        <div>
          <img src={ZX9} className="firstImage" />
          <img src={Circle} className="circle" />
        </div>

        <div className="firstDesc">
          <h2 className="type__H1 text-white">ZX9 SPEAKER</h2>
          <p className="type__body text-white">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <CallToAction bgcolor="black" />
        </div>
      </div>

      <div className="d-lg-none">
        <div className="">
          <img src={ZX9} className="firstImage" />
          <img src={Circle} className="circle" />
        </div>

        <div className="firstDesc">
          <h2 className="type__H1 text-white">ZX9 SPEAKER</h2>
          <p className="type__body text-white">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <CallToAction bgcolor="black" />
        </div>
      </div>
    </div>
  );
};

const SecondContainer = () => {
  return (
    <div className="secondContainer mb-4">
      <div className="secondContainerDesc">
        <h3 className="mb-4">ZX7 SPEAKER</h3>

        <div className="d-none d-md-block">
          <CallToAction bgcolor="black" />
        </div>
        <div className="d-md-none">
          <CallToAction bgcolor="grey" />
        </div>
      </div>

      <div className="d-none d-lg-block">
        <img className="secondImg" src={ZX7} />
      </div>

      <div className="d-none d-md-block d-lg-none">
        <img className="secondImg" src={tabletZX7} />
      </div>

      <div className="d-md-none">
        <img className="secondImg" src={mobileZX7} />
      </div>
    </div>
  );
};

const ThirdContainer = () => {
  return (
    <div className="row">
        <div className="col-md-6">
      <div className="d-none d-lg-block ">
        <img className="thirdImg" src={YX1} />
      </div>

      <div className="d-none d-md-block d-lg-none">
        <img className="thirdImg" src={tabletYX1} />
      </div>

      <div className="d-md-none">
        <img className="thirdImg" src={mobileYX1} />
      </div>
      </div>

<div className="col-md-6">
      <div className="thirdDesc bg-grey">
        <h3 className="mb-4">YX1 EARPHONES</h3>

        <CallToAction />
      </div>
      </div>
    </div>
  );
};

const ShowCase = () => {
  return (
    <div className="container">
      <FirstContainer />

      <SecondContainer />

      <ThirdContainer />
    </div>
  );
};

export default ShowCase;
