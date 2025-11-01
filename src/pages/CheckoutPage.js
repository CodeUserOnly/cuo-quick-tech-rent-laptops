import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CheckoutPage = ({ cart, user, createOrder, clearCart }) => {
  const [deliveryAddress, setDeliveryAddress] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.rentalDuration), 0);
  const tax = totalPrice * 0.1;
  const finalTotal = totalPrice + tax;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryAddress(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!user) {
        alert('Please log in to complete your order');
        navigate('/login');
        return;
      }

      const orderData = {
        user_id: user.id,
        total: finalTotal,
        delivery_address: deliveryAddress,
        delivery_date: new Date().toISOString().split('T')[0],
        return_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        items: cart.map(item => ({
          device_id: item.id,
          rental_duration: item.rentalDuration,
          price: item.price * item.rentalDuration
        }))
      };

      await createOrder(orderData);
      alert('Order placed successfully!');
      clearCart(); // Clear the cart after successful order
      navigate('/dashboard');
    } catch (error) {
      console.error('Order error:', error);
      alert('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="container mt-4">
        <div className="text-center py-5">
          <h2>Your Cart is Empty</h2>
          <p className="lead mb-4">Add some laptops to your cart to checkout.</p>
          <Link to="/browse" className="btn btn-primary btn-lg">Browse Laptops</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h1>Checkout</h1>
      <p className="lead">Complete your rental order</p>

      <div className="row">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="card mb-4">
              <div className="card-header">
                <h4>Delivery Information</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="fullName"
                      value={deliveryAddress.fullName}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      name="phone"
                      value={deliveryAddress.phone}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="address"
                    value={deliveryAddress.address}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label className="form-label">City</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="city"
                      value={deliveryAddress.city}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">State</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="state"
                      value={deliveryAddress.state}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">ZIP Code</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="zipCode"
                      value={deliveryAddress.zipCode}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header">
                <h4>Rental Period</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Delivery Date</label>
                    <input 
                      type="date" 
                      className="form-control" 
                      defaultValue={new Date().toISOString().split('T')[0]}
                      required 
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Return Date</label>
                    <input 
                      type="date" 
                      className="form-control" 
                      defaultValue={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                      required 
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header">
                <h4>Payment Method</h4>
              </div>
              <div className="card-body">
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="paymentMethod" 
                    defaultChecked 
                  />
                  <label className="form-check-label">
                    Cash on Delivery
                  </label>
                </div>
                <small className="text-muted">
                  Payment will be collected when your laptop is delivered.
                </small>
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-lg w-100"
              disabled={loading}
            >
              {loading ? 'Placing Order...' : `Place Order - ₹${finalTotal.toFixed(2)}`}
            </button>
          </form>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h4>Order Summary</h4>
            </div>
            <div className="card-body">
              {cart.map(item => (
                <div key={item.id} className="d-flex justify-content-between align-items-center mb-2">
                  <div>
                    <h6>{item.name}</h6>
                    <small>{item.rentalDuration} days × ₹{item.price}/day</small>
                  </div>
                  <div>₹{(item.price * item.rentalDuration).toFixed(2)}</div>
                </div>
              ))}
              
              <hr />
              
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Tax:</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Delivery:</span>
                <span>₹0.00</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <strong>Total:</strong>
                <strong>₹{finalTotal.toFixed(2)}</strong>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <Link to="/cart" className="btn btn-outline-secondary w-100">
              Back to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;