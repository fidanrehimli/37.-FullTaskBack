import React from 'react'
import {Helmet} from "react-helmet";
import ImageSec from './Image/ImageSec';
import Shop from './Shop/Shop';
import Products from './Products/Products';
import New from './News/New';
import Footer from '../../layout/Footer';
import Foot from '../../layout/Foot';
import End from '../../layout/End';
const Home = () => {
  return (
    <div>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <ImageSec/>
            <Shop/>
            <Products/>
            <New/>
            <Footer/>
            <Foot/>
            <End/>
    </div>
  )
}

export default Home