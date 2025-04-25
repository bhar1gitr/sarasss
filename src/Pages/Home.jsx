import React from 'react';
import ProductCard from '../Components/ProductCard';

const products = [
  {
    _id: '1',
    name: 'Black Hoodie',
    image: 'https://res.cloudinary.com/dfkkdv8et/image/upload/v1745522404/WhatsApp_Image_2025-04-24_at_15.47.26_74bff288_nsavhg.jpg',
    description: 'Comfortable black hoodie made with premium cotton. Perfect for casual wear.',
    brand: 'SARASSS',
    category: 'Hoodies',
    price: 29.99,
    countInStock: 15,
    rating: 4.5,
    numReviews: 12,
    sizes: ['S', 'M', 'L', 'XL']  // Added sizes
  },
  {
    _id: '2',
    name: 'White T-Shirt',
    image: 'https://res.cloudinary.com/dfkkdv8et/image/upload/v1745522404/WhatsApp_Image_2025-04-24_at_15.47.26_817a9dfa_nu8t9k.jpg',
    description: 'sdfs',
    brand: 'SARASSS',
    category: 'T-Shirts',
    price: 19.99,
    countInStock: 30,
    rating: 4.0,
    numReviews: 8,
    sizes: ['S', 'M', 'L', 'XL']  // Added sizes
  },
  {
    _id: '3',
    name: 'Black Joggers',
    image: 'https://res.cloudinary.com/dpackji5g/image/upload/v1745492091/WhatsApp_Image_2025-04-24_at_15.47.27_84d115a2_qtlbb8.jpg',
    description: 'Slim-fit black joggers for everyday comfort and style.',
    brand: 'SARASSS',
    category: 'Bottoms',
    price: 34.99,
    countInStock: 10,
    rating: 4.3,
    numReviews: 5,
    sizes: ['M', 'L', 'XL']  // Added sizes
  },
  {
    _id: '4',
    name: 'White Sneakers',
    image: 'https://res.cloudinary.com/dfkkdv8et/image/upload/v1745522404/WhatsApp_Image_2025-04-24_at_16.23.15_43badcb9_gqgutr.jpg',
    description: 'Classic white sneakers with black sole. Premium build for long walks.',
    brand: 'SARASSS',
    category: 'Footwear',
    price: 59.99,
    countInStock: 20,
    rating: 4.8,
    numReviews: 20,
    sizes: ['7', '8', '9', '10', '11']  // Added sizes for footwear
  },
  {
    _id: '5',
    name: 'Monochrome Cap',
    image: 'https://res.cloudinary.com/dfkkdv8et/image/upload/v1745522404/WhatsApp_Image_2025-04-24_at_15.47.27_f8f09e05_dliadf.jpg',
    description: 'Adjustable black & white cap with embroidered logo.',
    brand: 'SARASSS',
    category: 'Accessories',
    price: 14.99,
    countInStock: 40,
    rating: 4.2,
    numReviews: 6,
    sizes: ['One Size']  // Cap typically has one size
  },
  {
    _id: '6',
    name: 'Oversized Black Tee',
    image: 'https://res.cloudinary.com/dpackji5g/image/upload/v1745492091/WhatsApp_Image_2025-04-24_at_15.47.27_84d115a2_qtlbb8.jpg',
    description: 'Trendy oversized tee for streetwear lovers.',
    brand: 'SARASSS',
    category: 'T-Shirts',
    price: 24.99,
    countInStock: 25,
    rating: 4.7,
    numReviews: 14,
    sizes: ['S', 'M', 'L', 'XL']  // Added sizes
  }
];

const Home = ({ addToCart }) => {
  return (
    <div className="">
      <div id="carouselExample" class="carousel slide mt-4">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://res.cloudinary.com/dpackji5g/image/upload/v1744034816/WhatsApp_Image_2025-04-07_at_18.37.12_3c1040de_svd6uv.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://res.cloudinary.com/dpackji5g/image/upload/v1744034816/WhatsApp_Image_2025-04-07_at_18.37.12_3c1040de_svd6uv.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://res.cloudinary.com/dpackji5g/image/upload/v1744034816/WhatsApp_Image_2025-04-07_at_18.37.12_3c1040de_svd6uv.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* Product Section */}
      <h2 className="mb-4 text-center text-white mt-4">Latest Products</h2>
      <div className="row p-4">
        {products.map(product => (
          <ProductCard key={product._id} product={product} addToCart={addToCart} />
        ))}
      </div>

      <footer class="bg-dark text-light pt-5 pb-4">
        <div class="container text-md-left">
          <div class="row text-md-left">

            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">SARASSS</h5>
              <p>Sarasss isn’t just fashion, it’s your statement. Triple S. Triple Impact.</p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Quick Links</h5>
              <p><a href="/" class="text-light text-decoration-none">Home</a></p>
              <p><a href="/shop" class="text-light text-decoration-none">Shop</a></p>
              <p><a href="/cart" class="text-light text-decoration-none">Cart</a></p>
              <p><a href="/account" class="text-light text-decoration-none">My Account</a></p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Support</h5>
              {/* <p><a href="/faq" class="text-light text-decoration-none">FAQ</a></p> */}
              {/* <p><a href="/shipping" class="text-light text-decoration-none">Shipping</a></p> */}
              <p><a href="#" data-bs-toggle="modal" data-bs-target="#returnsModal" class="text-light text-decoration-none">Returns</a></p>
              <p><a href="https://wa.me/918879958523" class="text-light text-decoration-none">Contact Us</a></p>

            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Follow Us</h5>
              {/* <a href="#" class="text-light me-3"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="text-light me-3"><i class="fab fa-twitter"></i></a> */}
              <a href="https://www.instagram.com/sarasss.co?igsh=MWxtZDk4YmV4czA0aQ==" class="text-light me-3"><i class="bi bi-instagram"></i></a>
              {/* <a href="#" class="text-light"><i class="fab fa-linkedin-in"></i></a> */}
            </div>
          </div>

          <hr class="mb-4" />

          <div class="row align-items-center">
            <div class="col-md-7 col-lg-8">
              <p class="text-center text-md-start">© 2025 SARASSS. All Rights Reserved.</p>
            </div>
            <div class="col-md-5 col-lg-4">
              <p class="text-center text-md-end">
                <a href="#" data-bs-toggle="modal" data-bs-target="#privacyModal" class="text-light text-decoration-none me-3">Privacy</a>
                <a href="#" data-bs-toggle="modal" data-bs-target="#termsModal" class="text-light text-decoration-none">Terms</a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Returns Modal */}
      <div class="modal fade" id="returnsModal" tabIndex="-1" aria-labelledby="returnsModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content bg-dark text-light">
            <div class="modal-header">
              <h5 class="modal-title" id="returnsModalLabel">Return Policy</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              We accept returns within 30 days of purchase. Products must be unused and in original packaging.
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Modal */}
      <div class="modal fade" id="privacyModal" tabIndex="-1" aria-labelledby="privacyModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content bg-dark text-light">
            <div class="modal-header">
              <h5 class="modal-title" id="privacyModalLabel">Privacy Policy</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              We value your privacy and ensure that your data is protected and not shared with third parties without consent.
            </div>
          </div>
        </div>
      </div>

      {/* Terms Modal */}
      <div class="modal fade" id="termsModal" tabIndex="-1" aria-labelledby="termsModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content bg-dark text-light">
            <div class="modal-header">
              <h5 class="modal-title" id="termsModalLabel">Terms & Conditions</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              By using this site, you agree to our terms which include purchase rules, returns, and acceptable use policies.
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
