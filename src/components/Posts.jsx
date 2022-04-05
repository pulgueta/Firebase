import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import toast, { Toaster } from "react-hot-toast";
import { doc, collection, getDocs, deleteDoc } from "firebase/firestore";

import { db } from "../../firebase.config";
import "react-loading-skeleton/dist/skeleton.css";

const Posts = () => {
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(false);
  const postCollection = collection(db, "posts");

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      const data = await getDocs(postCollection);
      setValue(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        setLoading(false)
      );
    };

    getUser();
  }, []);

  const deletePost = async (id) => {
    await deleteDoc(doc(db, "posts", id))
      .then(toast.success("Post deleted!"))
      .catch(toast.error("Whoops! Something went wrong!"));
  };
  return (
    <div className="wrapper posts">
      <Toaster />
      {value.map((user) => {
        return (
          <div key={user.id}>
            <div className="post">
              <h1 className="header">{loading ? <Skeleton /> : user.title}</h1>
              <hr />
              <h3 className="author">{loading ? <Skeleton /> : user.author}</h3>
              <p className="desc">{loading ? <Skeleton /> : user.descBody}</p>
              <button className="del-btn" onClick={() => deletePost(user.id)}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
