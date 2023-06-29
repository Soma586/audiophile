import _ from 'lodash';
import CategoryDetail from "../../components/CategoryDetail";
import './styles.scss'
import Bestgear from '../../components/Bestgear';

const CategoryPage = (props) => {


    const { data, pageTitle } = props

    const y = _.map(data, (tt, index) => {

        if(index%2 !== 0){
        return (
          <CategoryDetail col1={2} col2={1} title={tt.name} imgLink={tt.categoryImage.desktop} isNew={tt.new} desc={tt.description}/>
        )}else{
          return (
            <CategoryDetail col1={1} col2={2} title={tt.name} imgLink={tt.categoryImage.desktop} isNew={tt.new} desc={tt.description}/>
          )
        }
      })

    return (
        <div>
            <div className="container-fluid bg-black categoryHeader">
                <h1 className="text-white">
                    {pageTitle}
                </h1>
            </div>

            {y}
            <Bestgear/>
            
            
        </div>
    )
}


export default CategoryPage;