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
      <form>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
