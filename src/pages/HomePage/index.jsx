import './styles.scss'
import HeroHome from "../../components/Hero";
import Accessory from "../../components/Accessory";
import ShowCase from '../../components/ShowCase';




const HomePage = () => {

    return (
        <div>
            <HeroHome/>
            <div className="bufferAccessory">
            <Accessory/>
            </div>
            <div className="bufferShowCase ">

            {/* <ShowCase/> */}
            </div>
            

        </div>
    )

}

export default HomePage