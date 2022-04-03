import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../../firebase.config";

const Home = () => {
  const [value, setValue] = useState([]);
  const postCollection = collection(db, "posts");

  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(postCollection);
    };
  }, []);

  return (
    <div className="home-wrapper">
      <h1>Home</h1>
    </div>
  );
};

export default Home;
