import React from 'react';
import { PlusCircle } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100" style={{ width:'80%', alignItems:'center', padding:'20px 0px', borderRadius:'20px'}}>
        <img src={product.image} style={{ height:'40vh', borderRadius:'10px', width:'90%' }} className="card-img-top" alt={product.name} />
        <div className="card-body" style={{ width:'100%' }}>
          <h5 className="card-title d-flex justify-content-between">
            {product.name}
            <PlusCircle
              role="button"
              size={20}
              onClick={() => addToCart(product)}
              className="text-dark"
            />
          </h5>
          <p className="card-text">{product.description.slice(0, 60)}...</p>
        </div>
        <div className="card-footer d-flex justify-content-between" style={{ width:'100%' }}>
          <span>${product.price}</span>
          <Link to={`/product/${product._id}`} className="btn btn-outline-dark btn-sm">View</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
