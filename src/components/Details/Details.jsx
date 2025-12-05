import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../../contexts/CartContext";
import imgFallback from "./../../assets/Make_up_9e537927-0145-4d58-9bec-41a5851189f5.webp";

const Details = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    if (!id) return;
    const fetchItem = async () => {
      setLoading(true);
      setError(null);

      const apiUrl = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

      try {
        // Try direct fetch first
        const { data } = await axios.get(apiUrl);
        setItem(data);
      } catch (err) {
        console.error("Direct fetch failed, trying proxy:", err);
        try {
          // Fallback to proxy if direct fetch fails
          const proxied = `https://api.allorigins.win/raw?url=${encodeURIComponent(apiUrl)}`;
          const { data } = await axios.get(proxied);
          setItem(data);
        } catch (proxyErr) {
          console.error("Proxy fetch also failed:", proxyErr);
          // Try alternative proxy
          try {
            const altProxy = `https://cors-anywhere.herokuapp.com/${apiUrl}`;
            const { data } = await axios.get(altProxy);
            setItem(data);
          } catch (altErr) {
            console.error("All fetch methods failed:", altErr);
            setError("Failed to load product details.");
          }
        }
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) return <div className="p-8 text-white">Loading...</div>;
  if (error) return <div className="p-8 text-red-400">{error}</div>;
  if (!item) return <div className="p-8 text-white">Product not found.</div>;

  // show rating exactly from API (formatted) with safe fallback
  const ratingValue =
    item.rating !== undefined && item.rating !== null
      ? Number(item.rating)
      : null;

  const handleAddToCart = () => {
    addToCart(item);
    setAddedToCart(true);
  };

  return (
    <div className="bg-[#151413] min-h-screen text-white">
      <div className="max-w-6xl mx-auto p-6">
        {/* Hero Section */}
        <div className="bg-[#272523] rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="flex flex-col lg:flex-row">
            {/* Product Image */}
            <div className="lg:w-1/2 p-8 flex items-center justify-center bg-[#151413]">
              <img
                src={item.image_link || imgFallback}
                alt={item.name}
                className="w-full max-w-md h-auto object-cover rounded-xl shadow-md"
              />
            </div>

            {/* Product Info */}
            <div className="lg:w-1/2 p-8 flex flex-col justify-center">
              <p className="text-[#f34263] text-sm font-semibold uppercase tracking-wide mb-2">
                {item.brand}
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {item.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-lg mr-2">★</span>
                <span className="text-white font-medium">
                  {ratingValue !== null ? ratingValue.toFixed(1) : "—"} / 5.0
                </span>
              </div>

              {/* Price */}
              <div className="text-3xl font-bold text-[#f34263] mb-6">
                ${item.price || "—"}
              </div>

              {/* Buy Button */}
              <button
                onClick={handleAddToCart}
                className="bg-[#f34263] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#cc2140] transition duration-300 shadow-lg mb-4"
              >
                Add to Cart
              </button>

              {/* Success Message */}
              {addedToCart && (
                <div className="text-green-400 font-semibold mb-4">
                  Item added to cart successfully!
                </div>
              )}

              {/* Product Type */}
              {item.product_type && (
                <div className="text-sm text-gray-300">
                  <span className="font-medium">Category:</span> {item.product_type}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-[#272523] rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {item.description || "No description available."}
          </p>
        </div>

        {/* Additional Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ingredients */}
          <div className="bg-[#272523] rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-white mb-4">Key Ingredients</h3>
            <p className="text-gray-300">
              {item.product_colors && item.product_colors.length > 0
                ? item.product_colors.map(color => color.colour_name).join(", ")
                : "Information not available."}
            </p>
          </div>

          {/* Usage */}
          <div className="bg-[#272523] rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-white mb-4">How to Use</h3>
            <p className="text-gray-300">
              Apply generously for best results. Consult product packaging for detailed instructions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;