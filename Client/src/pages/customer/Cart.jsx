import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto bg-black text-white min-h-screen">
      {/* Header */}
      <div className="mb-8 text-center md:text-left">
        <h1 className="text-3xl font-bold text-orange-400">Your Shopping Cart</h1>
        <p className="text-md mt-2 text-gray-400">
          {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-16 bg-gray-900 rounded-xl shadow-lg p-8 max-w-md mx-auto border border-gray-700">
          <div className="text-6xl mb-6 text-gray-700">🛒</div>
          <h3 className="text-xl font-semibold mb-3 text-white">Your cart feels lonely</h3>
          <p className="mb-6 text-gray-400">Let's find something special for you</p>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 rounded-lg font-medium bg-orange-500 text-white hover:bg-orange-600 transition-all shadow"
          >
            Explore Products
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-xl shadow overflow-hidden border border-gray-700">
              <div className="hidden md:grid grid-cols-12 bg-gray-800 p-4 text-sm uppercase tracking-wider text-gray-400 font-medium">
                <div className="col-span-5">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-2 text-right">Subtotal</div>
              </div>
              <ul className="divide-y divide-gray-800">
                {cartItems.map((item) => (
                  <li key={item.id} className="p-4 hover:bg-gray-800 transition-colors">
                    <div className="grid grid-cols-12 items-center gap-4">
                      {/* Product Info */}
                      <div className="col-span-5 flex items-center space-x-4">
                        <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-800 border border-gray-700">
                          <img 
                            src={item.image || '/placeholder-product.jpg'} 
                            alt={item.title} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium text-white">{item.title}</h3>
                          <p className="text-sm text-gray-400">{item.category}</p>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="col-span-2 text-center text-orange-400 font-medium">
                        ${item.price.toFixed(2)}
                      </div>

                      {/* Quantity */}
                      <div className="col-span-3 flex justify-center">
                        <div className="flex items-center border border-gray-700 rounded-lg overflow-hidden">
                          <button 
                            className="px-3 py-1 text-lg hover:bg-gray-800 text-orange-400"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            −
                          </button>
                          <span className="px-3 py-1 text-white bg-black min-w-[40px] text-center">
                            {item.quantity}
                          </span>
                          <button 
                            className="px-3 py-1 text-lg hover:bg-gray-800 text-orange-400"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Subtotal & Remove */}
                      <div className="col-span-2 flex items-center justify-end space-x-4">
                        <span className="font-medium text-orange-400">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-400 transition-colors p-1 rounded-full"
                          title="Remove item"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cart Actions */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
              <button 
                onClick={() => navigate('/')}
                className="px-6 py-3 rounded-lg font-medium bg-black text-orange-400 hover:bg-gray-800 transition-all border border-gray-700 shadow-sm"
              >
                ← Continue Shopping
              </button>
              <button 
                className="px-6 py-3 rounded-lg font-medium bg-black text-red-400 hover:bg-red-600 transition-all border border-red-500 shadow-sm"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-gray-900 rounded-xl shadow p-6 sticky top-6 border border-gray-700">
              <h2 className="text-xl font-bold mb-6 text-orange-400 border-b border-gray-700 pb-4">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-white font-medium">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Shipping</span>
                  <span className="text-white font-medium">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tax</span>
                  <span className="text-white font-medium">$0.00</span>
                </div>
                <div className="border-t border-gray-700 pt-4 flex justify-between font-bold text-lg mt-4">
                  <span className="text-white">Total</span>
                  <span className="text-orange-400">${total.toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={() => navigate('/cart')}
                className="w-full py-3.5 rounded-lg font-medium bg-orange-500 text-white hover:bg-orange-600 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Proceed to Checkout
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Free shipping on all orders over $50
              </div>

              {/* Payment Methods */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h3 className="text-sm font-medium text-white mb-3">We accept</h3>
                <div className="flex gap-3">
                  {['visa', 'mastercard', 'amex', 'paypal'].map((method) => (
                    <div key={method} className="h-8 w-12 bg-black border border-gray-700 rounded-md flex items-center justify-center p-1">
                      <img src={`https://cdn.jsdelivr.net/gh/devdevout/visa-icons@main/icons/${method}.svg`} alt={method} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
