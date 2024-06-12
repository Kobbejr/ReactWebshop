import React, { useEffect, useState } from "react";
import fetchData from "../fetch/fetchData";

import ProductList from "../components/ShoppingFlow/ProductList.jsx";


const Products = () => {
  const [fishProducts, setFishProducts] = useState([]);
  const [filter, setFilter] = useState('All'); // State for selected filter

  useEffect(() => {
    fetchData()
      .then((combinedProducts) => {
        // Filter products with category "Fish"
        const filteredProducts = combinedProducts.filter(
          (product) => product.category === "Fish"
        );
        // Set fishProducts state
        setFishProducts(filteredProducts);
        // Console log filtered products
        //console.log("Fish Products:", filteredProducts);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Function to filter products based on subcategory
  const filteredProducts = filter === 'All' ? fishProducts : fishProducts.filter((product) => product.subcategory === filter);

  return (
    <div className="bg-sky-100">
      <div className="filter-buttons mx-auto py-16 flex justify-between px-4">
        <div className="filter-card bg-gradient-to-t p-4 rounded-md w-50 from-teal-600 to-transparent"  onClick={() => setFilter('Ocean')}>
            <img
              src={"https://lh3.googleusercontent.com/pw/AP1GczNEjf4Ix4ezZ1TTFzbN8OrtxXBLrEzK8pdS2IeON80uxHgwG6eNG46ffqPeTrukcF5sfco-CXYc2FWazSrXiM2X6osQz2GV64iz2zpcPsfGDE83og=w2400"}
              alt="Ocean fish"
              className="w-44 mb-4 mx-auto hover:scale-110 transition-transform"
            />
            <h2 className="font-poppins text-white text-center text-2xl font-bold">
              Ocean fish
            </h2>
          </div>
        <div className="filter-card bg-gradient-to-t p-4 rounded-md w-50 from-teal-600 to-transparent" onClick={() => setFilter('River')}>
            <img
              src={"https://lh3.googleusercontent.com/pw/AP1GczOjW1Li4BYx6SHKISylC0FKYVl5CHbC0Y6vSZs13A7AVhCvvw1H6kaDXYnb8Lmv6u-_1fzqcTIVPVyXIPKMJRi0CofGL12VrvDTzNeYKhw0YYIlQA=w2400"}
              alt="River fish"
              className="w-44 mb-4 mx-auto hover:scale-110 transition-transform"
            />
            <h2 className="font-poppins text-white text-center text-2xl font-bold">
              River fish
            </h2>
        </div>
        <div className="filter-card bg-gradient-to-t p-4 rounded-md w-50 from-teal-600 to-transparent"  onClick={() => setFilter('Pond')}>
            <img
              src={"https://lh3.googleusercontent.com/pw/AP1GczNL0JGQmfXiOYW4QqUSIYAP02BeY6euNbJ---9m7ih5K3MlKpY36hvbNHmV_bIOeZKii9z9SQjL37i3k3wnL_97lfKgNUz7I1wXHm6OqBtOE2N78g=s256-p-k"}
              alt="Pond fish"
              className="w-44 mb-4 mx-auto hover:scale-110 transition-transform"
            />
            <h2 className="font-poppins text-white text-center text-2xl font-bold">
              Pond fish
            </h2>
        </div>
      </div>
      {/* Pass filteredProducts as props to ProductList component */}
      <ProductList products={filteredProducts} />

    </div>
  );
  
  
};

export default Products;
