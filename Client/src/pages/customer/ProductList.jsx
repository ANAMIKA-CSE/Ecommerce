import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductGrid from "../../components/ProductGrid";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState("");
  const [activeFilter, setActiveFilter] = useState("");

  const clothingCategories = [
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-dresses",
    "womens-shoes",
    "womens-watches",
    "tops",
    "womens-bags",
    "womens-jewellery",
  ];

  const categoryMapping = {
    mens: ["mens-shirts", "mens-shoes", "mens-watches"],
    womens: ["womens-dresses", "womens-shoes", "womens-watches", "womens-bags", "womens-jewellery", "tops"],
    footwear: ["mens-shoes", "womens-shoes"],
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/products?limit=100");
        const data = await response.json();

        const clothingOnly = data.products.filter((product) =>
          clothingCategories.includes(product.category)
        );

        setProducts(clothingOnly);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());

    const categoryMatch = activeFilter
      ? categoryMapping[activeFilter]?.includes(product.category)
      : true;

    return matchesSearch && categoryMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-low-high") return a.price - b.price;
    if (sortOption === "price-high-low") return b.price - a.price;
    if (sortOption === "rating-high-low") return b.rating - a.rating;
    return 0;
  });

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error: {error}</p>;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar Filters */}
      <aside className="w-1/5 bg-black p-6">
        <h2 className="text-xl font-bold mb-6">Filters</h2>
        <div className="space-y-3">
          {["mens", "womens", "footwear"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(activeFilter === filter ? "" : filter)}
              className={`block w-full text-left py-2 px-3 rounded-md ${
                activeFilter === filter
                  ? "bg-orange-600 text-white"
                  : "bg-white hover:bg-gray-200"
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-black">
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md w-1/3"
          />
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md"
          >
            <option value="">Sort By</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="rating-high-low">Rating: High to Low</option>
          </select>
        </div>

        {sortedProducts.length === 0 ? (
          <p className="text-center text-white mt-10">No matching products found.</p>
        ) : (
          <ProductGrid products={sortedProducts} />
        )}
      </main>
    </div>
  );
};

export default ProductList;
