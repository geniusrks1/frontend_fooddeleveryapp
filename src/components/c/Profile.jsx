// src/pages/Profile.jsx
import React, { useEffect, useState } from "react";
import api from "../utils/api";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const [userResponse, ordersResponse] = await Promise.all([
          api.get("/user/profile"),
          api.get("/user/orders"),
        ]);
        setUserData(userResponse.data);
        setOrders(ordersResponse.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="profile">
      <h2>My Profile</h2>
      <p>Email: {userData.email}</p>
      <p>Name: {userData.name}</p>
      <h3>Order History</h3>
      {orders.map((order) => (
        <div key={order.id}>
          <p>Order ID: {order.id}</p>
          <p>Status: {order.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Profile;
