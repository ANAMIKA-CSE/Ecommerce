

// import React, { useRef } from "react"
// import { Link } from "react-router-dom"
// import { motion } from "framer-motion"
// import {
//   Clock,
//   Star,
//   ShoppingCart,
//   Truck,
//   Package,
//   Utensils,
//   Smile,
//   Phone,
//   Mail,
//   MapPin,
//   ChevronRight,
//   ArrowLeft,
//   ArrowRight,
// } from "lucide-react"
// import Header from "../../components/Navbar"

// const Home = () => {
//   const scrollRef = useRef(null)

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = scrollRef.current.clientWidth * 0.8
//       if (direction === "left") {
//         scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
//       } else {
//         scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
//       }
//     }
//   }

//   // Food categories data
//   const categories = [
//     {
//       name: "Burgers",
//       image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
//       count: 24,
//     },
//     {
//       name: "Pizza",
//       image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
//       count: 18,
//     },
//     {
//       name: "Sushi",
//       image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a",
//       count: 15,
//     },
//     {
//       name: "Desserts",
//       image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
//       count: 12,
//     },
//   ]

//   // Popular dishes data
//   const popularDishes = [
//     {
//       id: 1,
//       name: "Double Cheese Burger",
//       price: 12.99,
//       rating: 4.8,
//       prepTime: "15-20 min",
//       image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
//     },
//     {
//       id: 2,
//       name: "Margherita Pizza",
//       price: 14.99,
//       rating: 4.6,
//       prepTime: "20-25 min",
//       image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
//     },
//     {
//       id: 3,
//       name: "California Roll",
//       price: 18.99,
//       rating: 4.9,
//       prepTime: "10-15 min",
//       image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a",
//     },
//     {
//       id: 4,
//       name: "Spicy Tuna Roll",
//       price: 17.5,
//       rating: 4.7,
//       prepTime: "12-18 min",
//       image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a",
//     },
//     {
//       id: 5,
//       name: "Chocolate Lava Cake",
//       price: 8.99,
//       rating: 4.9,
//       prepTime: "5-10 min",
//       image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
//     },
//   ]

//   // Features data
//   const features = [
//     {
//       icon: <Clock className="text-3xl text-orange-500" />,
//       title: "Fast Delivery",
//       description: "Get your food delivered in under 30 minutes",
//     },
//     {
//       icon: <Star className="text-3xl text-orange-500" />,
//       title: "Quality Food",
//       description: "Fresh ingredients from trusted suppliers",
//     },
//     {
//       icon: <ShoppingCart className="text-3xl text-orange-500" />,
//       title: "Easy Ordering",
//       description: "Simple ordering process with instant confirmation",
//     },
//     {
//       icon: <Truck className="text-3xl text-orange-500" />,
//       title: "Free Delivery",
//       description: "Free delivery on orders over $25",
//     },
//   ]

//   // How It Works data
//   const howItWorksSteps = [
//     {
//       icon: <Utensils className="text-3xl text-yellow-500" />,
//       title: "Choose Your Meal",
//       description: "Browse our extensive menu and select your desired dishes.",
//     },
//     {
//       icon: <ShoppingCart className="text-3xl text-yellow-500" />,
//       title: "Place Your Order",
//       description: "Add items to your cart and proceed to a secure checkout.",
//     },
//     {
//       icon: <Truck className="text-3xl text-yellow-500" />,
//       title: "Fast Delivery",
//       description: "Relax while we prepare and deliver your food right to your door.",
//     },
//     {
//       icon: <Smile className="text-3xl text-yellow-500" />,
//       title: "Enjoy Your Food",
//       description: "Savor your delicious meal and leave us a review!",
//     },
//   ]

//   // Testimonials data
//   const testimonials = [
//     {
//       name: "Alice Johnson",
//       avatar: "/placeholder.svg",
//       rating: 5,
//       review:
//         "The food arrived hot and fresh, and the delivery was incredibly fast! Highly recommend this service for anyone looking for quality meals delivered to their door.",
//     },
//     {
//       name: "Bob Williams",
//       avatar: "/placeholder.svg",
//       rating: 4,
//       review:
//         "Great selection of restaurants and the ordering process is super smooth. My go-to for quick and tasty dinners. The pizza was amazing!",
//     },
//     {
//       name: "Charlie Brown",
//       avatar: "/placeholder.svg",
//       rating: 5,
//       review:
//         "I'm consistently impressed by the quality and speed. The app is user-friendly, and I love the variety of cuisines available. A true lifesaver on busy nights!",
//     },
//     {
//       name: "Diana Miller",
//       avatar: "/placeholder.svg",
//       rating: 5,
//       review:
//         "Absolutely fantastic service! The sushi was fresh and beautifully presented. Delivery was on time, and the driver was very polite. Will definitely order again!",
//     },
//     {
//       name: "Eve Davis",
//       avatar: "/placeholder.svg",
//       rating: 4,
//       review:
//         "The burgers are incredible, juicy and flavorful. The app is easy to navigate, and I appreciate the real-time tracking. A solid choice for a quick and delicious meal.",
//     },
//   ]

//   const SectionTitle = ({ title, highlight }) => (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//       className="text-center mb-12"
//     >
//       <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 relative inline-block pb-2">
//         {title} <span className="text-yellow-500">{highlight}</span>
//         <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-yellow-500 rounded-full"></span>
//       </h2>
//       <p className="text-gray-600 max-w-2xl mx-auto">
//         {title === "Food Categories"
//           ? "Browse through our diverse selection of delicious food categories"
//           : title === "Our Popular"
//             ? "Customer favorites - dishes that everyone loves"
//             : title === "What Our Customers"
//               ? "Hear from our happy customers about their experience with our service."
//               : "Ordering your favorite food is just a few simple steps away."}
//       </p>
//     </motion.div>
//   )

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* <Header /> */}
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-orange-500 to-red-600 text-white py-20 px-6 overflow-hidden">
//         <div className="absolute inset-0 bg-black opacity-10"></div>
//         <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-500/20 transform -skew-y-6 scale-125 origin-top-left"></div>
//         <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left"
//           >
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
//               Delicious Food Delivered To Your <span className="text-yellow-300">Doorstep</span>
//             </h1>
//             <p className="text-xl mb-8 text-yellow-100 drop-shadow">
//               Order your favorite meals from the best restaurants in town
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//               <Link
              
//   to="/products"
//   className="inline-flex items-center justify-center border-2 border-yellow-100 text-yellow-100 hover:bg-yellow-100 hover:bg-opacity-10 font-bold px-8 py-3 rounded-full transition duration-300 text-center transform hover:scale-105 text-lg bg-transparent"
// >
//   Order Now
// </Link>
//               <Link
//                 to="/about"
//                 className="inline-flex items-center justify-center border-2 border-yellow-100 text-yellow-100 hover:bg-yellow-100 hover:bg-opacity-10 font-bold px-8 py-3 rounded-full transition duration-300 text-center transform hover:scale-105 text-lg bg-transparent"
//               >
//                 Learn More
//               </Link>
//             </div>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="md:w-1/2 flex justify-center"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
//               alt="Delicious food spread"
//               className="rounded-xl shadow-2xl w-full max-w-md object-cover"
//               width={600}
//               height={400}
//             />
//           </motion.div>
//         </div>
//       </section>
//       {/* Features Section */}
//       <section className="py-16 px-6 max-w-6xl mx-auto">
//         <SectionTitle title="Why Choose" highlight="Us?" />
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
//         >
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0 10px 15px -3px rgba(251, 191, 36, 0.3), 0 4px 6px -2px rgba(251, 191, 36, 0.1)",
//               }}
//               transition={{ duration: 0.2 }}
//               className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center flex flex-col items-center justify-center transform hover:-translate-y-2 transition-all duration-300 ease-in-out group"
//             >
//               <div className="mb-5 p-4 rounded-full bg-yellow-100 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
//                 {React.cloneElement(feature.icon, {
//                   className: `${feature.icon.props.className} group-hover:text-white transition-colors duration-300`,
//                 })}
//               </div>
//               <h3 className="text-2xl font-extrabold mb-2 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
//                 {feature.description}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>
//       {/* How It Works Section */}
//       <section className="py-16 px-6 bg-gray-100">
//         <div className="max-w-6xl mx-auto">
//           <SectionTitle title="How It" highlight="Works" />
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={{
//               hidden: { opacity: 0 },
//               visible: {
//                 opacity: 1,
//                 transition: {
//                   staggerChildren: 0.1,
//                 },
//               },
//             }}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//           >
//             {howItWorksSteps.map((step, index) => (
//               <motion.div
//                 key={index}
//                 variants={{
//                   hidden: { opacity: 0, y: 20 },
//                   visible: { opacity: 1, y: 0 },
//                 }}
//                 whileHover={{
//                   scale: 1.03,
//                   boxShadow: "0 10px 15px -3px rgba(251, 191, 36, 0.3), 0 4px 6px -2px rgba(251, 191, 36, 0.1)",
//                 }}
//                 transition={{ duration: 0.2 }}
//                 className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center flex flex-col items-center relative overflow-hidden group"
//               >
//                 <div className="absolute top-0 left-0 w-full h-2 bg-yellow-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
//                 <div className="relative mb-5 p-4 rounded-full bg-yellow-100 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300 z-10">
//                   {React.cloneElement(step.icon, {
//                     className: `${step.icon.props.className} group-hover:text-white transition-colors duration-300`,
//                   })}
//                 </div>
//                 <div className="absolute top-4 right-4 text-4xl font-extrabold text-gray-200 opacity-70 group-hover:text-yellow-300 group-hover:opacity-100 transition-all duration-300 ease-in-out z-0">
//                   {`0${index + 1}`}
//                 </div>
//                 <h3 className="text-2xl font-extrabold mb-2 text-gray-800 group-hover:text-orange-600 transition-colors duration-300 z-10">
//                   {step.title}
//                 </h3>
//                 <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 z-10">
//                   {step.description}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//       {/* Categories Section */}
//       <section className="py-16 px-6">
//         <div className="max-w-6xl mx-auto">
//           <SectionTitle title="Food" highlight="Categories" />
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={{
//               hidden: { opacity: 0 },
//               visible: {
//                 opacity: 1,
//                 transition: {
//                   staggerChildren: 0.1,
//                 },
//               },
//             }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-6"
//           >
//             {categories.map((category, index) => (
//               <motion.div
//                 key={index}
//                 variants={{
//                   hidden: { opacity: 0, y: 20 },
//                   visible: { opacity: 1, y: 0 },
//                 }}
//                 whileHover={{ y: -5 }}
//               >
//                 <Link
//                   to={`/menu?category=${category.name.toLowerCase()}`}
//                   className="group block overflow-hidden rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:shadow-yellow-200 transition duration-300 relative"
//                 >
//                   <img
//                     src={category.image || "/placeholder.svg"}
//                     alt={category.name}
//                     width={400}
//                     height={300}
//                     className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4">
//                     <h3 className="text-yellow-300 text-xl font-bold">{category.name}</h3>
//                     <p className="text-gray-200 text-sm">{category.count} items</p>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//       {/* Popular Dishes */}
//       <section className="py-16 px-6 bg-gray-100">
//         <div className="max-w-6xl mx-auto">
//           <SectionTitle title="Our Popular" highlight="Dishes" />
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {popularDishes.map((dish) => (
//               <motion.div
//                 key={dish.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.03 }}
//                 className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl hover:shadow-yellow-200 transition duration-300"
//               >
//                 <div className="relative">
//                   <img
//                     src={dish.image || "/placeholder.svg"}
//                     alt={dish.name}
//                     width={500}
//                     height={300}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="absolute top-3 right-3 bg-white/90 rounded-full px-3 py-1 text-sm font-bold flex items-center shadow-sm">
//                     <Star className="text-yellow-500 mr-1 w-4 h-4" />
//                     {dish.rating}
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <div className="flex justify-between items-start mb-3">
//                     <h3 className="text-xl font-bold text-yellow-600">{dish.name}</h3>
//                     <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full flex items-center">
//                       <Clock className="inline mr-1 w-3 h-3" />
//                       {dish.prepTime}
//                     </span>
//                   </div>
//                   <div className="flex justify-between items-center mt-4">
//                     <span className="text-2xl font-bold text-yellow-500">${dish.price.toFixed(2)}</span>
//                  <Link
//   to="/products"
//   className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium transition duration-300 transform hover:scale-105"
// >
//   Order Now
// </Link>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* Testimonials Section - Horizontal Slider */}
//       <section className="py-16 px-6 relative">
//         <div className="max-w-6xl mx-auto">
//           <SectionTitle title="What Our Customers" highlight="Say" />
//           <div className="relative">
//             <div
//               ref={scrollRef}
//               className="flex overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide gap-6 md:gap-8 lg:gap-10"
//             >
//               {testimonials.map((testimonial, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   viewport={{ once: true, amount: 0.5 }}
//                   className="flex-none w-[calc(100vw-4rem)] sm:w-[400px] snap-start"
//                 >
//                   <div className="h-full flex flex-col justify-between bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:shadow-yellow-200 transition duration-300 p-6">
//                     <div className="flex flex-row items-center gap-4 mb-4">
//                       <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-yellow-400 flex-shrink-0">
//                         <img
//                           src={testimonial.avatar || "/placeholder.svg"}
//                           alt={testimonial.name}
//                           width={48}
//                           height={48}
//                           className="object-cover w-full h-full"
//                         />
//                       </div>
//                       <div>
//                         <h3 className="text-lg text-yellow-600 font-semibold">{testimonial.name}</h3>
//                         <div className="flex items-center gap-0.5 mt-1">
//                           {[...Array(5)].map((_, i) => (
//                             <Star
//                               key={i}
//                               className={`w-4 h-4 ${i < testimonial.rating ? "fill-yellow-500 text-yellow-500" : "fill-gray-300 text-gray-300"}`}
//                             />
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                     <p className="text-gray-700 leading-relaxed">{testimonial.review}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//             {/* Navigation Arrows */}
//             <button
//               onClick={() => scroll("left")}
//               className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10 hidden md:flex items-center justify-center hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
//               aria-label="Scroll left"
//             >
//               <ArrowLeft className="w-5 h-5" />
//             </button>
//             <button
//               onClick={() => scroll("right")}
//               className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10 hidden md:flex items-center justify-center hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
//               aria-label="Scroll right"
//             >
//               <ArrowRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </section>
//       {/* CTA Section */}
//       <section className="py-20 px-6 bg-orange-600 text-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-md text-yellow-300"
//           >
//             Ready to order your favorite food?
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="text-xl mb-8 text-yellow-100"
//           >
//             Download our app for exclusive offers and faster ordering!
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="flex flex-wrap justify-center gap-4"
//           >
//             <button className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-full font-bold transition duration-300 transform hover:scale-105 shadow-lg text-lg">
//               <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
//               </svg>
//               App Store
//             </button>
//             <button className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-full font-bold transition duration-300 transform hover:scale-105 shadow-lg text-lg">
//               <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
//               </svg>
//               Google Play
//             </button>
//           </motion.div>
//         </div>
//       </section>
//       {/* Join Us Section (for Restaurants) */}
//       <section className="py-16 px-6 bg-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <SectionTitle title="Partner With" highlight="Us" />
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="text-gray-600 max-w-2xl mx-auto mb-8"
//           >
//             Expand your reach and grow your business by joining our platform. We connect you with thousands of hungry
//             customers.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             <Link
//               to="/partner"
//               className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-3 rounded-full font-bold transition duration-300 transform hover:scale-105 shadow-lg text-lg"
//             >
//               <Package className="w-5 h-5 mr-2" />
//               Become a Partner
//             </Link>
//           </motion.div>
//         </div>
//       </section>
//       {/* Footer */}
//     </div>
//   )
// }

// export default Home

import React, { useRef } from "react"
import { motion } from "framer-motion"
import {
  Clock,
  Star,
  ShoppingCart,
  Truck,
  Package,
  Shirt,
  Heart,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Shield,
  RefreshCw,
  Award,
  Sparkles,
  Zap,
  Users,
  Eye,
  TrendingUp
} from "lucide-react"

const Home = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
  }

  // Clothing categories data
  const categories = [
    {
      name: "Dresses",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
      count: 48,
    },
    {
      name: "Casual Wear",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      count: 32,
    },
    {
      name: "Formal Wear",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      count: 28,
    },
    {
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1609587312208-cea54be969e7",
      count: 24,
    },
  ]

  // Popular items data
  const popularItems = [
    {
      id: 1,
      name: "Vintage Denim Jacket",
      price: 89.99,
      rating: 4.8,
      deliveryTime: "2-3 days",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985",
    },
    {
      id: 2,
      name: "Floral Summer Dress",
      price: 124.99,
      rating: 4.6,
      deliveryTime: "1-2 days",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
    },
    {
      id: 3,
      name: "Classic White Shirt",
      price: 68.99,
      rating: 4.9,
      deliveryTime: "2-4 days",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
    },
    {
      id: 4,
      name: "Leather Crossbody Bag",
      price: 159.50,
      rating: 4.7,
      deliveryTime: "3-5 days",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    },
    {
      id: 5,
      name: "Cozy Knit Sweater",
      price: 92.99,
      rating: 4.9,
      deliveryTime: "2-3 days",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
    },
  ]

  // Features data
  const features = [
    {
      icon: <Zap className="text-4xl" />,
      title: "Lightning Fast",
      description: "Express delivery in 24 hours or less",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Award className="text-4xl" />,
      title: "Premium Curated",
      description: "Hand-picked pieces from global designers",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: <RefreshCw className="text-4xl" />,
      title: "Easy Exchanges",
      description: "Hassle-free 60-day return policy",
      gradient: "from-green-400 to-blue-500"
    },
    {
      icon: <Shield className="text-4xl" />,
      title: "Safe & Secure",
      description: "Encrypted payments with buyer protection",
      gradient: "from-red-400 to-pink-500"
    },
  ]

  // How It Works data
  const howItWorksSteps = [
    {
      icon: <Eye className="text-4xl" />,
      title: "Discover",
      description: "Browse our AI-curated fashion collections tailored to your style preferences.",
      color: "bg-gradient-to-br from-indigo-500 to-purple-600"
    },
    {
      icon: <Heart className="text-4xl" />,
      title: "Connect",
      description: "Save favorites and get personalized recommendations from our style experts.",
      color: "bg-gradient-to-br from-pink-500 to-rose-600"
    },
    {
      icon: <ShoppingCart className="text-4xl" />,
      title: "Purchase",
      description: "One-click checkout with multiple payment options and instant confirmation.",
      color: "bg-gradient-to-br from-emerald-500 to-teal-600"
    },
    {
      icon: <Sparkles className="text-4xl" />,
      title: "Style",
      description: "Receive your perfectly packaged items and step out in confidence!",
      color: "bg-gradient-to-br from-amber-500 to-orange-600"
    },
  ]

  // Testimonials data
  const testimonials = [
    {
      name: "Emma Thompson",
      avatar: "/placeholder.svg",
      rating: 5,
      review:
        "Absolutely love the quality and style! The dress I ordered fits perfectly and the fabric feels amazing. Fast shipping and beautiful packaging too!",
    },
    {
      name: "Sarah Wilson",
      avatar: "/placeholder.svg",
      rating: 4,
      review:
        "Great selection of trendy pieces at reasonable prices. The customer service is excellent and returns are super easy. My new go-to fashion destination!",
    },
    {
      name: "Jessica Davis",
      avatar: "/placeholder.svg",
      rating: 5,
      review:
        "I'm obsessed with this boutique! Every piece I've ordered has exceeded my expectations. The styling tips and size guides are so helpful too.",
    },
    {
      name: "Olivia Martinez",
      avatar: "/placeholder.svg",
      rating: 5,
      review:
        "The cutest clothes and accessories! I love how they stay on top of the latest trends. The quality is fantastic and shipping is always fast.",
    },
    {
      name: "Chloe Anderson",
      avatar: "/placeholder.svg",
      rating: 4,
      review:
        "Beautiful, well-made pieces that make me feel confident and stylish. The size chart is accurate and the photos represent the items perfectly.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section - Split Design with Animated Elements */}
      <section className="relative min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-purple-500/5 via-pink-500/5 to-purple-500/5 rounded-full blur-2xl animate-spin-slow"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30"
              >
                <TrendingUp className="w-4 h-4 mr-2 text-pink-400" />
                <span className="text-sm font-medium text-pink-300">Trending Fashion 2024</span>
              </motion.div>
              
              <h1 className="text-6xl lg:text-8xl font-black leading-none">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600">
                  STYLE
                </span>
                <span className="block text-white">REDEFINED</span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
              Discover exclusive fashion pieces that define your unique personality. Curated collections from emerging designers worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                Explore Collection
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-500 rounded-full font-bold text-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                Watch Lookbook
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
                alt="Fashion Model"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl border border-purple-500/20"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">2.5K+ Happy Customers</span>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-2xl p-4 border border-purple-500/30"
              >
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">4.9 Rating</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Card Grid with Glassmorphism */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Why Choose Us?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience fashion retail like never before with our innovative approach
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group relative"
              >
                <div className="h-full p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-all duration-500">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {React.cloneElement(feature.icon, { className: "text-white" })}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Circular Timeline Design */}
      <section className="py-24 px-6 relative bg-gradient-to-br from-purple-900/20 to-pink-900/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Your Style Journey
              </span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className={`relative ${step.color} rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl`}>
                  {React.cloneElement(step.icon, { className: "text-white" })}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Connecting Line */}
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform -translate-x-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories - Hexagonal Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Shop by Category
              </span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-3xl aspect-square">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {category.count} items
                    </p>
                  </div>
                  
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ChevronRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items - Bento Grid Layout */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Trending Now
              </span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`group relative overflow-hidden rounded-3xl ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
              >
                <div className="aspect-square lg:aspect-auto h-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  
                  {/* Floating Heart */}
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 hover:bg-pink-500/20 hover:border-pink-500/40 transition-all duration-300"
                  >
                    <Heart className="w-5 h-5 text-white hover:text-pink-400" />
                  </motion.button>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-6 left-6 flex items-center space-x-1 bg-black/50 backdrop-blur-xl rounded-full px-3 py-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-medium">{item.rating}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-purple-600/30 backdrop-blur-xl rounded-full text-purple-300 text-sm border border-purple-500/30">
                        {item.deliveryTime}
                      </span>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        ${item.price}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-white hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
                      >
                        Add to Cart
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Floating Cards Carousel */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-pink-900/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                What People Say
              </span>
            </h2>
          </motion.div>
          
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-8 pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-none w-80 snap-start"
                >
                  <div className="h-full p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-all duration-500 group">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500/30 mr-4">
                        <img
                          src={testimonial.avatar || "https://images.unsplash.com/photo-1494790108755-2616b612b786"}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white group-hover:text-pink-300 transition-colors duration-300">
                          {testimonial.name}
                        </h4>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-600"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      "{testimonial.review}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Navigation */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-5xl font-black leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Ready to Elevate
              </span>
              <br />
              Your Wardrobe?
            </h2>
            <p className="text-lg text-gray-300 max-w-xl">
              Join thousands of fashion-forward individuals who trust us to keep their style sharp.
              It’s more than clothing — it’s expression.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300"
              >
                Join the Movement
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-pink-500 rounded-full font-bold text-lg hover:bg-pink-500/10 transition-all duration-300"
              >
                Browse More
              </motion.button>
            </div>
          </motion.div>

          {/* Right Image with Floating Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-purple-500/20">
              <img
                src="https://images.unsplash.com/photo-1514996937319-344454492b37"
                alt="Model"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Floating Top Label */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-4 left-4 bg-white/10 backdrop-blur-xl rounded-2xl px-4 py-2 border border-white/20"
              >
                <span className="text-sm font-medium text-white">New Collection</span>
              </motion.div>

              {/* Floating Rating Bottom Right */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-4 right-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-2xl px-4 py-2 border border-purple-500/30"
              >
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-white">Rated 4.9</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
  }

export default Home