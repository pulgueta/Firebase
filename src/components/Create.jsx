import React from "react";

const Create = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="wrapper create">
      <form>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
