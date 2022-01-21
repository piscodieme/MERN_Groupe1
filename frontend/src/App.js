import logo from './logo.svg';
import Home from './containers/home/Home';
import reactDom from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './containers/header/Header';
import Footer from './components/contains/Footer';
import Login from './containers/loginAndRegister/Login';
import About from './containers/header/About';
import PageNotFound from './containers/error/PageNotFound';
import Contact from './containers/header/Contact';
import MyCart from './containers/header/Mycart';
import SingleCategory from './containers/category/SingleCategory';
import AllProduct from './containers/product/AllProduct';
import './App.css';
import SingleProduct from './containers/product/SingleProduct';
import Thanks from './components/utilities/Thanks';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
      </div>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/cart' element={<MyCart/>}></Route>
        <Route path="/category/:categoryName" element={<SingleCategory/>}></Route>
        <Route path='/produits' element={<AllProduct/>}></Route>
        <Route path="/produit/:productNumber" element={<SingleProduct/>}></Route>
        <Route path='/thanks' element={<Thanks/>}></Route>
        <Route path='*' exact={true} element={<PageNotFound/>}></Route>
      </Routes>
      <div className="App">
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
