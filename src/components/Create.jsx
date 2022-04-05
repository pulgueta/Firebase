import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { collection, addDoc } from "firebase/firestore";

import { db } from "../../firebase.config";

const Create = () => {
  const [data, setData] = useState({
    title: "",
    author: "",
    body: "",
  });

  const titleChange = (ev) => {
    setData({ ...data, title: ev.target.value });
  };

  const authorChange = (ev) => {
    setData({ ...data, author: ev.target.value });
  };

  const bodyChange = (ev) => {
    setData({ ...data, body: ev.target.value });
  };

  const collectionRef = collection(db, "posts");

  const createPost = (e) => {
    e.preventDefault();
    addDoc(collectionRef, {
      title: data.title,
      author: data.author,
      descBody: data.body,
      createdAt: new Date(),
    })
      .then(() => {
        toast.success("Post created!");
      })
      .catch(() => {
        toast.error("Whoops! Something went wrong!");
      });

    setData({
      title: "",
      author: "",
      body: "",
    });
  };

  return (
    <div className="wrapper create">
      <Toaster />
      <form>
        <input
          type="text"
          placeholder="Title"
          onChange={titleChange}
          value={data.title}
        />
        <input
          type="text"
          placeholder="Author"
          onChange={authorChange}
          value={data.author}
        />
        <textarea
          placeholder="Description"
          onChange={bodyChange}
          value={data.body}
        />
        <button type="submit" onClick={createPost}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
