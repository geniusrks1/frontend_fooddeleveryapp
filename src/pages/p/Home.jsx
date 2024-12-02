// src/pages/p/Home.jsx
import React, { useEffect, useState } from "react";
import api from "../../utils/api";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="home">
      <h1>Explore Food</h1>
      <input
        type="text"
        placeholder="Search for food..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="categories">
        {categories.map((category) => (
          <div key={category.id} className="category">
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
