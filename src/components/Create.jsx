import React from "react";

const Create = () => {
  const createPost = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="wrapper create">
      <form>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Author" />
        <textarea placeholder="Description" />
        <button type="submit" onClick={createPost}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
