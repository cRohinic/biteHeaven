import React, { useState } from 'react';
import { data } from '../../src/restApi.json';
import { X, ShoppingBag, Check } from 'lucide-react';

const Menu = () => {
  const [selectedDish, setSelectedDish] = useState(null);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderData, setOrderData] = useState({
    name: '',
    phone: '',
    address: '',
    quantity: 1
  });

  // Handle view details click
  const handleViewDetails = (dish) => {
    setSelectedDish(dish);
  };

  // Close dish details popup
  const closeDishDetails = () => {
    setSelectedDish(null);
  };

  // Handle order now button
  const handleOrderNow = () => {
    setShowOrderForm(true);
  };

  // Close order form
  const closeOrderForm = () => {
    setShowOrderForm(false);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData({
      ...orderData,
      [name]: value
    });
  };

  // Submit order
  const submitOrder = (e) => {
    e.preventDefault();
    // Process order (in a real app this would connect to a backend)
    console.log("Order submitted:", { dish: selectedDish, ...orderData });
    
    // Show success notification
    setOrderSuccess(true);
    setShowOrderForm(false);
    
    // Reset form
    setOrderData({
      name: '',
      phone: '',
      address: '',
      quantity: 1
    });
    
    // Hide success notification after 3 seconds
    setTimeout(() => {
      setOrderSuccess(false);
      setSelectedDish(null);
    }, 3000);
  };

  return (
    <section className="menu bg-gray-50 py-16" id="menu">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="heading_section text-center max-w-3xl mx-auto mb-12">
        <h1 className="heading text-4xl font-bold mb-6 text-yellow-600 relative">
  <span className="text-yellow-500"> OUR SIGNATURE DISHES</span>
  <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-4"></span>
</h1>

          <p className="text-gray-600 leading-relaxed mx-auto max-w-2xl">
            Experience culinary excellence with our carefully curated selection of dishes. 
            Each creation combines premium ingredients with expert preparation, 
            resulting in flavors that will transport you to gastronomic bliss.
          </p>
        </div>
       
        {/* Dishes Container */}
        <div className="dishes_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data[0].dishes.map(dish => (
            <div
              key={dish.id}
              className="card bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    {dish.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{dish.title}</h3>
                <p className="text-gray-600 text-sm mb-2">₹{(dish.price * 83).toFixed(0)}</p>
                <div 
                  className="flex items-center justify-between mt-4 cursor-pointer group"
                  onClick={() => handleViewDetails(dish)}
                >
                  <span className="text-amber-500 font-semibold group-hover:underline">View Details</span>
                  <div className="w-5 h-5 text-amber-500 transform transition-transform group-hover:translate-x-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dish Details Popup */}
      {selectedDish && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="bg-gray-900 rounded-lg w-full max-w-2xl overflow-hidden shadow-2xl animate-fade-in border border-amber-500">
            <div className="relative">
              <button 
                onClick={closeDishDetails}
                className="absolute top-4 right-4 bg-amber-500 rounded-full p-1 shadow-md hover:bg-amber-600 text-white"
              >
                <X size={24} />
              </button>
              <div className="overflow-hidden h-64">
                <img 
                  src={selectedDish.image} 
                  alt={selectedDish.title} 
                  className="w-full h-full object-cover animate-zoom-in"
                />
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-amber-500">{selectedDish.title}</h2>
                  <span className="inline-block bg-gray-800 text-amber-400 text-sm px-3 py-1 rounded-full mt-2 border border-amber-500">
                    {selectedDish.category}
                  </span>
                </div>
                <div className="text-2xl font-bold text-amber-500">₹{selectedDish.price * 83}</div>
              </div>
              
              <p className="text-gray-300 mb-6">
                {selectedDish.description || "A delicious dish prepared with the finest ingredients, carefully crafted by our expert chefs to provide an unforgettable dining experience."}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-800 text-amber-400 text-sm px-3 py-1 rounded-full border border-amber-500">Freshly Prepared</span>
                <span className="bg-gray-800 text-amber-400 text-sm px-3 py-1 rounded-full border border-amber-500">Premium Ingredients</span>
                <span className="bg-gray-800 text-amber-400 text-sm px-3 py-1 rounded-full border border-amber-500">Chef's Special</span>
              </div>
              
              <button 
                onClick={handleOrderNow}
                className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <ShoppingBag size={20} />
                Order Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Order Form Popup */}
      {showOrderForm && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="bg-gray-900 rounded-lg w-full max-w-md overflow-hidden shadow-2xl animate-slide-up border border-amber-500">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-amber-500">Complete Your Order</h2>
                <button 
                  onClick={closeOrderForm}
                  className="text-amber-500 hover:text-amber-400"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div>
                <div className="mb-4">
                  <label className="block text-amber-400 text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={orderData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-amber-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-amber-400 text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={orderData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-amber-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-amber-400 text-sm font-medium mb-2">
                    Delivery Address
                  </label>
                  <textarea
                    name="address"
                    value={orderData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-amber-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                    rows="3"
                    required
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label className="block text-amber-400 text-sm font-medium mb-2">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={orderData.quantity}
                    onChange={handleInputChange}
                    min="1"
                    className="w-full px-3 py-2 bg-gray-800 border border-amber-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                    required
                  />
                </div>
                
                <div className="flex items-center justify-between mb-4 bg-gray-800 p-3 rounded-lg border border-amber-500">
                  <div>
                    <h3 className="font-medium text-amber-400">{selectedDish?.title}</h3>
                    <p className="text-gray-400 text-sm">
                      ₹{selectedDish?.price * 83} x {orderData.quantity}
                    </p>
                  </div>
                  <div className="text-xl font-bold text-amber-500">
                    ₹{(selectedDish?.price * orderData.quantity * 83).toFixed(0)}
                  </div>
                </div>
                
                <button
                  onClick={submitOrder}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 py-3 rounded-lg font-bold transition-colors"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Notification */}
      {orderSuccess && (
        <div className="fixed bottom-8 right-8 bg-gray-1000 text-amber-400 p-4 rounded-lg shadow-lg flex items-center gap-3 animate-slide-in-right border border-amber-500">
          <div className="bg-amber-500 rounded-full p-1 text-gray-900">
            <Check size={24} />
          </div>
          <div>
            <h3 className="font-bold text-amber-500">Order Successful!</h3>
            <p className="text-sm">Your order has been placed successfully and will be delivered soon.</p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes zoom-in {
          from { transform: scale(1.2); }
          to { transform: scale(1); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-zoom-in {
          animation: zoom-in 0.5s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Menu;