import logo from './logo.svg';
import _ from 'lodash';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Nav from '../src/components/Nav'
import HeroHome from './components/Hero';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CheckoutPage from './components/CheckoutPage';
//import ProductDetails from './components/ProductDetails';
import ProductPage from './pages/ProductPage';
import Data from './data.json'





const Test = () => {

  return (
    <div>
      hello
    </div>
  )
}

// const ProductDetails = (props) => {


//   const {name, description, price, image, features, includes } = props;

//   console.log(props)
//   //const test = require(image.desktop)
//   //console.log(test)
//   //const x = '../.' + image.desktop
//   //const test = require('../../assets/product-xx59-headphones/desktop/image-product.jpg')
//   //const lol = require(x).default;
//   //console.log(myr)
//   //console.log(x)


//   const including = _.map(includes, (item) => {
//     return (
//       <div className="">
//         <span className="me-4">{item.quantity}x</span>
//         <span>{item.item} </span>
//       </div>
//     )
//   })

//   function test () {

//     sessionStorage.setItem("pimp", 'Vem')
//     console.log('add pimp')
//   }

//   return (
//       <div className="container">
//           <div className="row">
//               <div className="col-lg-6">
//                   <img className="w-100" src={image.desktop} alt="image"/>


                  
//               </div>

//               <div className="col-lg-6">
//                   <p>NEW PRODUCT</p>

//                   <h1>{name}</h1>
//                       {/* <p>{title}</p> */}
//                   <p>
//                   {description}
//                   </p>

//                       <p>$ {price}</p>

//                       <button onClick={test}>
//                           ADD TO CART
//                       </button>
                  
//                   </div>

//           </div>

//           <div className="row">

//             <div className="col-lg-9">

//               <h2 className="mb-4">FEATUREs</h2>

//               {features}

//             </div>

//             <div className="col-lg-3">

//               <h2 className="mb-4">IN THE BOX</h2>

//               <div className="inTheBox">
//                 {including}
//               </div>



//             </div>

//           </div>


//       </div>
//   )
// }

function App() {


  const obj = [
    {
    route : "naruto"
  },
  {
    route : "onepiece"
  },
  {
    route : "bleach"
  },
]


const x = _.map(Data, (x) => {
  return (
    <Route path={x.slug} 
    element={<ProductPage 
      // title={x.name}
      // description= {x.}
      {...x}
      />}/>
  )
})

const z = _.map(Data, (x) => {
  return (
    <img src={x.image.mobile}/>
  )
})
  return (
    <div className="">
        
       
        <Nav/>

          <Routes >
            <Route path="/" element={<HomePage/>}/>
            {x}
          
            <Route path="/checkout" element={<CheckoutPage/>}/>
             
          </Routes>
         
        <Footer/>

    </div>
  );
}

export default App;
