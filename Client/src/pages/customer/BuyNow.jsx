import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import QRCode from "react-qr-code";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const BuyNow = () => {
  const { id } = useParams();
  const { cartItems } = useContext(CartContext);

  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const product = cartItems.find((item) => String(item.id) === id);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size > 2 * 1024 * 1024) {
      toast.error("File size should be less than 2MB");
      return;
    }
    setFile(selectedFile);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.phone || !formData.address || !formData.email) {
      toast.error("Please fill all required fields");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/orders/buy-now", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: formData.name,
          email: formData.email,
          productId: product.id,
          productTitle: product.title,
          price: product.price,
          quantity: product.quantity,
          totalAmount: product.price * product.quantity,
          address: formData.address,
          phone: formData.phone,
          paymentMethod: "qr"
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("🎉 Order placed successfully!");
        navigate('/cart'); 
      } else {
        toast.error(data.error || "❌ Order failed");
      }
    } catch (error) {
      console.error("Order failed", error);
      toast.error("🚨 Something went wrong while placing the order");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-sm max-w-md w-full">
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Product not found</h1>
          <p className="text-gray-600 mb-6">The product is no longer in your cart</p>
          <button 
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900">Complete Your Purchase</h1>
          <p className="mt-2 text-lg text-gray-600">Just a few more steps to get your order</p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Column - Form */}
            <div className="p-8 sm:p-10">
              <div className="flex items-start mb-8">
                <img
                  src={product.images?.[0] || product.thumbnail}
                  alt={product.title}
                  className="w-20 h-20 rounded-lg object-cover border border-gray-200"
                />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-gray-900">{product.title}</h2>
                  <div className="flex items-center mt-1 text-gray-600">
                    <span>${product.price.toFixed(2)} × {product.quantity}</span>
                    <span className="mx-2">•</span>
                    <span className="font-medium text-indigo-600">
                      ${(product.price * product.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                    Shipping Information
                  </h2>
                  
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        required
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Shipping Address*
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        required
                      ></textarea>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Documents (Optional)
                      </label>
                      <div className="mt-1 flex items-center">
                        <label className="flex flex-col items-center justify-center w-full px-4 py-6 bg-white text-blue-500 rounded-lg border-2 border-dashed border-gray-300 cursor-pointer hover:bg-gray-50 transition">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <span className="mt-2 text-sm text-gray-600">Click to upload</span>
                          <input 
                            type="file" 
                            onChange={handleFileChange} 
                            className="hidden" 
                            accept=".pdf,.jpg,.png,.doc" 
                          />
                        </label>
                      </div>
                      <p className="mt-1 text-xs text-gray-500">PDF, JPG, PNG or DOC (Max. 2MB)</p>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Column - Payment */}
            <div className="bg-gray-50 p-8 sm:p-10 border-l border-gray-200">
              <div className="sticky top-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Payment Details
                </h2>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-medium text-gray-900">QR Code Payment</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      Recommended
                    </span>
                  </div>
                  
                  <div className="flex justify-center my-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      {product && (
                        <QRCode
                          value={`payment:${product.id}:${(product.price * product.quantity).toFixed(2)}`}
                          size={180}
                        />
                      )}
                    </div>
                  </div>
                  
                  <p className="text-center text-sm text-gray-500 mb-4">
                    Scan this QR code with your mobile banking app to complete payment
                  </p>
                  
                  <div className="flex items-center justify-center space-x-2">
                    <span className="h-8 w-12 bg-white border rounded-md flex items-center justify-center p-1">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visa/visa-original.svg" alt="Visa" />
                    </span>
                    <span className="h-8 w-12 bg-white border rounded-md flex items-center justify-center p-1">
                      <img src="https://cdn.jsdelivr.net/gh/devdevout/visa-icons@main/icons/mastercard.svg" alt="Mastercard" />
                    </span>
                    <span className="h-8 w-12 bg-white border rounded-md flex items-center justify-center p-1">
                      <img src="https://cdn.jsdelivr.net/gh/devdevout/visa-icons@main/icons/paypal.svg" alt="PayPal" />
                    </span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-4">Order Summary</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="text-gray-900">${product.price.toFixed(2)} × {product.quantity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="text-gray-900">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="text-gray-900">$0.00</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between font-bold">
                      <span className="text-gray-900">Total</span>
                      <span className="text-indigo-600">${(product.price * product.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`mt-6 w-full px-6 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-medium shadow-md transition flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Complete Purchase'
                  )}
                </button>

                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Secure payment processing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;