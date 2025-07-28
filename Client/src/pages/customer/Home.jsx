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
      gradient: "from-amber-400 to-orange-500"
    },
    {
      icon: <Award className="text-4xl" />,
      title: "Premium Curated",
      description: "Hand-picked pieces from global designers",
      gradient: "from-orange-400 to-red-500"
    },
    {
      icon: <RefreshCw className="text-4xl" />,
      title: "Easy Exchanges",
      description: "Hassle-free 60-day return policy",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      icon: <Shield className="text-4xl" />,
      title: "Safe & Secure",
      description: "Encrypted payments with buyer protection",
      gradient: "from-orange-500 to-red-600"
    },
  ]

  // How It Works data
  const howItWorksSteps = [
    {
      icon: <Eye className="text-4xl" />,
      title: "Discover",
      description: "Browse our AI-curated fashion collections tailored to your style preferences.",
      color: "bg-gradient-to-br from-amber-500 to-orange-600"
    },
    {
      icon: <Heart className="text-4xl" />,
      title: "Connect",
      description: "Save favorites and get personalized recommendations from our style experts.",
      color: "bg-gradient-to-br from-orange-500 to-red-600"
    },
    {
      icon: <ShoppingCart className="text-4xl" />,
      title: "Purchase",
      description: "One-click checkout with multiple payment options and instant confirmation.",
      color: "bg-gradient-to-br from-amber-500 to-orange-600"
    },
    {
      icon: <Sparkles className="text-4xl" />,
      title: "Style",
      description: "Receive your perfectly packaged items and step out in confidence!",
      color: "bg-gradient-to-br from-orange-500 to-red-600"
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
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-red-900/20"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-orange-500/5 via-red-500/5 to-orange-500/5 rounded-full blur-2xl animate-spin-slow"></div>
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
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30"
              >
                <TrendingUp className="w-4 h-4 mr-2 text-orange-400" />
                <span className="text-sm font-medium text-orange-300">Trending Fashion 2024</span>
              </motion.div>
              
              <h1 className="text-6xl lg:text-8xl font-black leading-none">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-600">
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
                className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300"
              >
                Explore Collection
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-orange-500 rounded-full font-bold text-lg hover:bg-orange-500/10 transition-all duration-300"
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
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl border border-orange-500/20"
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
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-xl rounded-2xl p-4 border border-orange-500/30"
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
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
                <div className="h-full p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-500/30 transition-all duration-500">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {React.cloneElement(feature.icon, { className: "text-white" })}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-400 transition-all duration-300">
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
      <section className="py-24 px-6 relative bg-gradient-to-br from-orange-900/20 to-red-900/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
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
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transform -translate-x-4"></div>
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
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
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
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
                    className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 hover:bg-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
                  >
                    <Heart className="w-5 h-5 text-white hover:text-orange-400" />
                  </motion.button>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-6 left-6 flex items-center space-x-1 bg-black/50 backdrop-blur-xl rounded-full px-3 py-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-medium">{item.rating}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-orange-600/30 backdrop-blur-xl rounded-full text-orange-300 text-sm border border-orange-500/30">
                        {item.deliveryTime}
                      </span>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                        ${item.price}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-bold text-white hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300"
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
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 to-red-900/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
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
                  <div className="h-full p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-500/30 transition-all duration-500 group">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-500/30 mr-4">
                        <img
                          src={testimonial.avatar || "https://images.unsplash.com/photo-1494790108755-2616b612b786"}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors duration-300">
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
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 hover:bg-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 hover:bg-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-black to-red-900 z-0"></div>

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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                Ready to Elevate
              </span>
              <br />
              Your Wardrobe?
            </h2>
            <p className="text-lg text-gray-300 max-w-xl">
              Join thousands of fashion-forward individuals who trust us to keep their style sharp.
              It's more than clothing — it's expression.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300"
              >
                Join the Movement
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-orange-500 rounded-full font-bold text-lg hover:bg-orange-500/10 transition-all duration-300"
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-orange-500/20">
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
                className="absolute bottom-4 right-4 bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-xl rounded-2xl px-4 py-2 border border-orange-500/30"
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