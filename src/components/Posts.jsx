import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../../firebase.config";
import "react-loading-skeleton/dist/skeleton.css";

const Posts = () => {
  const [value, setValue] = useState([]);
  const postCollection = collection(db, "posts");

  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(postCollection);
      setValue(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      console.log(setValue);
    };

    getUser();
  }, []);
  return (
    <div className="wrapper posts">
      {value.map((user) => {
        return (
          <div key={user.id}>
            <div className="post">
              <h1 className="header">{user.title || <Skeleton />}</h1>
              <hr />
              <h3 className="author">{user.author || <Skeleton />}</h3>
              <p className="desc">{user.descBody || <Skeleton />}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
