import React, { Component } from 'react';
import Navbar from './homepagecomponents/MyNavbar';
import './Homepage.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import iphoneImage from '../images/iphone15.jpg'; // Import the image
import Category from '../models/Category';  
import Product from '../models/Product'; 

export class Homepage extends Component {

  render() {
    // Categories and Products with images
    const electronics = new Category(1, 'Electronics');
    const clothing = new Category(2, 'Clothing');

    const product1 = new Product(1, 'iPhone 15', 'The latest iPhone', 999, electronics, iphoneImage);
    const product2 = new Product(2, 'MacBook Air', 'Powerful laptop', 1299, electronics, 'https://via.placeholder.com/100x100');
    const product3 = new Product(3, 'T-Shirt', 'Comfortable cotton t-shirt', 25, clothing, 'https://via.placeholder.com/100x100');

    electronics.addProduct(product1);
    electronics.addProduct(product2);
    clothing.addProduct(product3);

    // Slider settings
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: '0px',
      centerMode: true,
    };

    return (
      <div className="homepage">
        <Navbar />
        <div className="carousel-container">
          <div className="wrapper">
            <Slider {...settings}>
              <div>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  <img src={iphoneImage} alt="iPhone 15" />
                  <h3>iPhone 15</h3>
                  <p>The iPhone 15 features a 6.1-inch (155 mm) display with Super Retina XDR OLED technology at a resolution of 2556×1179 pixels and a pixel<br></br>density of about 460 PPI with a refresh rate of 60 Hz.</p>
                </a>
              </div>
              <div>
                <img src="https://via.placeholder.com/1000x500" alt="Placeholder Image" />
                <h3>Slide 2</h3>
                <p>Description of product 2.</p>
              </div>
              <div>
                <img src="https://via.placeholder.com/1000x500" alt="Placeholder Image" />
                <h3>Slide 3</h3>
                <p>Description of product 3.</p>
              </div>
              <div>
                <img src="https://via.placeholder.com/1000x500" alt="Placeholder Image" />
                <h3>Slide 4</h3>
                <p>Description of product 4.</p>
              </div>
            </Slider>
          </div>
        </div>

  <div className="categories">
  {[electronics, clothing].map(category => (
    <div key={category.id}>
      <h2>{category.name}</h2>
      <div className="row">
        {category.products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>Price: ${product.price}</strong></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

      </div>
    );
  }
}

export default Homepage;
