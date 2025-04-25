import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Signup from './Pages/Signup';
import ProductDetails from './Pages/ProductDetails';
import { ToastContainer, toast } from 'react-toastify';
import Login from './Pages/Login';
import VideoLoader from './VideoLoader'; // use this instead

const App = () => {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find(item => item._id === product._id);
      const updatedCart = exists
        ? prevCart.map(item =>
            item._id === product._id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        : [...prevCart, { ...product, qty: 1 }];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      toast.success("Product added to cart");
      return updatedCart;
    });
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // adjust to match video duration
    return () => clearTimeout(timer);
  }, []);

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
  
  if (loading) return <VideoLoader />;

  return (
    <Router>
      <ToastContainer />
      <Navbar cartCount={cart.reduce((acc, item) => acc + item.qty, 0)} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetails products={products} addToCart={addToCart} />} />
      </Routes>
    </Router>
  );
};

export default App;