import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p._id === id);

  const [selectedSize, setSelectedSize] = useState('');

  if (!product) {
    return <div className="text-center text-light mt-5">Product not found.</div>;
  }

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size!');
    } else {
      addToCart({ ...product, selectedSize });
    }
  };

  return (
    <div className="mt-5 text-light">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center p-4">
          <img src={product.image} alt={product.name} className="img-fluid rounded" style={{ maxHeight: '500px' }} />
        </div>
        <div className="col-md-6 p-4">
          <h2>{product.name}</h2>
          {/* <p className="text-muted">{product.brand}</p> */}
          <p>{product.description}</p>
          <h4 className="text-warning">${product.price}</h4>
          <p><strong>In Stock:</strong> {product.countInStock}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Rating:</strong> {product.rating} ({product.numReviews} reviews)</p>

          {/* Size Selection */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-3">
              <strong>Size:</strong>
              <div className="d-flex gap-2 mt-2">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`btn btn-outline-light ${selectedSize === size ? 'btn-warning' : ''}`}
                    onClick={() => handleSizeChange(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            className="btn btn-dark mt-3"
            disabled={product.countInStock === 0}
            onClick={handleAddToCart}
          >
            {product.countInStock > 0 ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
      <footer className="bg-dark text-light pt-5 pb-4 mt-4">
        <div className="container text-md-left">
          <div className="row text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">SARASSS</h5>
              <p>Sarasss isn’t just fashion, it’s your statement. Triple S. Triple Impact.</p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Quick Links</h5>
              <p><a href="/" className="text-light text-decoration-none">Home</a></p>
              <p><a href="/shop" className="text-light text-decoration-none">Shop</a></p>
              <p><a href="/cart" className="text-light text-decoration-none">Cart</a></p>
              <p><a href="/account" className="text-light text-decoration-none">My Account</a></p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Support</h5>
              <p><a href="#" data-bs-toggle="modal" data-bs-target="#returnsModal" className="text-light text-decoration-none">Returns</a></p>
              <p><a href="https://wa.me/918879958523" className="text-light text-decoration-none">Contact Us</a></p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Follow Us</h5>
              <a href="https://www.instagram.com/sarasss.co?igsh=MWxtZDk4YmV4czA0aQ==" className="text-light me-3"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
          <hr className="mb-4" />
          <div className="row align-items-center">
            <div className="col-md-7 col-lg-8">
              <p className="text-center text-md-start">© 2025 SARASSS. All Rights Reserved.</p>
            </div>
            <div className="col-md-5 col-lg-4">
              <p className="text-center text-md-end">
                <a href="#" data-bs-toggle="modal" data-bs-target="#privacyModal" className="text-light text-decoration-none me-3">Privacy</a>
                <a href="#" data-bs-toggle="modal" data-bs-target="#termsModal" className="text-light text-decoration-none">Terms</a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Returns Modal */}
      <div className="modal fade" id="returnsModal" tabIndex="-1" aria-labelledby="returnsModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-light">
            <div className="modal-header">
              <h5 className="modal-title" id="returnsModalLabel">Return Policy</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              We accept returns within 30 days of purchase. Products must be unused and in original packaging.
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Modal */}
      <div className="modal fade" id="privacyModal" tabIndex="-1" aria-labelledby="privacyModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-light">
            <div className="modal-header">
              <h5 className="modal-title" id="privacyModalLabel">Privacy Policy</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              We value your privacy and ensure that your data is protected and not shared with third parties without consent.
            </div>
          </div>
        </div>
      </div>

      {/* Terms Modal */}
      <div className="modal fade" id="termsModal" tabIndex="-1" aria-labelledby="termsModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-light">
            <div className="modal-header">
              <h5 className="modal-title" id="termsModalLabel">Terms & Conditions</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              By using this site, you agree to our terms which include purchase rules, returns, and acceptable use policies.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
