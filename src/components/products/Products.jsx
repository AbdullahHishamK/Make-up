import React, { useEffect, useState } from "react";
import axios from "axios";
import { DNA } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import img1 from "./../../assets/Make_up_9e537927-0145-4d58-9bec-41a5851189f5.webp";

const Products = () => {
  const [products, setProducts] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const { addToCart } = useCart();

  const truncateName = (name) => {
    if (!name) return "";
    const words = name.trim().split(/\s+/);
    return words.slice(0, 3).join(" ") + (words.length > 3 ? "..." : "");
  };

  async function fetchProducts() {
    const apiUrl =
      "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

    try {
      // Try direct fetch first
      const res = await axios.get(apiUrl);
      setProducts(res.data);
    } catch (err) {
      console.error("Direct fetch failed, trying proxy:", err);
      try {
        // Fallback to proxy if direct fetch fails
        const proxied = `https://api.allorigins.win/raw?url=${encodeURIComponent(
          apiUrl
        )}`;
        const res = await axios.get(proxied);
        setProducts(res.data);
      } catch (proxyErr) {
        console.error("Proxy fetch also failed:", proxyErr);
        // Try alternative proxy
        try {
          const altProxy = `https://cors-anywhere.herokuapp.com/${apiUrl}`;
          const res = await axios.get(altProxy);
          setProducts(res.data);
        } catch (altErr) {
          console.error("All fetch methods failed:", altErr);
          setProducts([]);
        }
      }
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (products === null) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <DNA visible={true} height="80" width="80" ariaLabel="dna-loading" />
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="h-64 flex items-center justify-center">
        No products found.
      </div>
    );
  }

  return (
    <div className="bg-[#151413] py-8 relative">
      <div className="md:w-[90%] mx-auto lg:mt-16">

        <div className="flex justify-center mb-8 relative z-20 -mb-12">
          <div className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer">
            <img
              src={img1}
              alt="hero"
              className="w-full max-w-2xl h-auto object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
          </div>
        </div>

        <div className="pt-24 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {products.map((p) => (
              <div className="p-4" key={p.id ?? p.name}>
                <Link
                  to={`/layout/products/${p.id}`}
                  className="block h-full"
                >
                  <div className="p-3 h-full flex flex-col bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
                    <div className="flex-none w-full h-40 md:h-48 lg:h-56 overflow-hidden rounded-md mb-3">
                      <img
                        src={p.image_link || img1}
                        alt={p.name || "product"}
                        className="block w-full h-full object-cover object-center"
                      />
                    </div>

                    <h3 className="mt-1 font-bold text-sm leading-tight">
                      {truncateName(p.name)}
                    </h3>

                    <h4 className="mt-1 text-xs text-gray-600">{p.brand}</h4>

                    <div className="mt-auto flex justify-between items-center pt-3">
                      <div className="text-base font-semibold">
                        {p.price || "-"}
                      </div>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addToCart(p);
                          setToastMessage(
                            `${truncateName(p.name)} added to cart!`
                          );
                          setShowToast(true);
                          setTimeout(() => setShowToast(false), 3000);
                        }}
                        className="flex items-center gap-2 text-sm text-white bg-[#f34263] p-2 hover:bg-[#cc2140] transition rounded-2xl h-10"
                        aria-label={`Add ${p.name} to cart`}
                      >
                        <i className="fa-solid fa-cart-arrow-down" />
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showToast && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default Products;