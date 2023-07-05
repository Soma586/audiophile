import logo from './logo.svg';
import _ from 'lodash';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Nav from '../src/components/Nav'
import HeroHome from './components/Hero';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CheckoutPage from './components/CheckoutPage';
import ProductPage from './pages/ProductPage';
import Data from './data.json'
import CategoryDetail from './components/CategoryDetail';
import CategoryPage from './pages/CategoryPage';



function App() {



const x = _.map(Data, (x) => {
  return (
    <Route path={x.slug} 
    element={<ProductPage 
      {...x}
      />}/>
  )
})

const filterdHeadphones = _.filter(Data, (item) => {

  return item.category === 'headphones'
})

const filteredEarphones = _.filter(Data, (item) => {
  return item.category === 'earphones'
})

const filteredSpeakers = _.filter(Data, (item) => {
  return item.category === 'speakers'
})

const na = _.reverse(filterdHeadphones)

const fh = _.reverse(filteredSpeakers)


  return (
    <div >
        
       
        <Nav/>
       
          <Routes >
            <Route path="/" element={<HomePage/>}/>
            <Route path="/category/headphones" element={<CategoryPage data={na} pageTitle={"HEADPHONES"}/>}/>
            <Route path="/category/earphones" element={<CategoryPage data={filteredEarphones} pageTitle={"EARPHONES"}/>}/>
            <Route path="/category/speakers" element={<CategoryPage data={fh} pageTitle={"SPEAKERS"}/>}/>
            {x}
          
            <Route path="/checkout" element={<CheckoutPage/>}/>
             
          </Routes>
         
        <Footer/>

    </div>
  );
}

export default App;
