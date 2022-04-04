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

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <div className="home-wrapper">
      <form>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Home;
