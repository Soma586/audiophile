import './styles.scss'
import HeroHome from "../../components/Hero";
import Accessory from "../../components/Accessory";
import ShowCase from '../../components/ShowCase';
import Bestgear from '../../components/Bestgear';




const HomePage = () => {

    return (
        <div>
            <HeroHome/>
            <div className="bufferAccessory container">
            <Accessory/>
            </div>
            <div className="bufferShowCase ">

            <ShowCase/>
            </div>
            <Bestgear/>
            

        </div>
    )

}

export default HomePage