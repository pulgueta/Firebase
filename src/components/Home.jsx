import React from "react";
import { IoLogoReact, IoLogoFirebase } from "react-icons/io5";

const Home = () => {
  return (
    <div className="wrapper home">
      <div className="welcome">
        <div className="title">
          <h1>
            CRUD WebApp with <br /> React <IoLogoReact /> and Firebase{" "}
            <IoLogoFirebase />
          </h1>
          <hr />
        </div>
        <div className="content">
          <h2>Educational purposes only</h2>
          <p>
            This is a simple CRUD application with React and Firebase. It was
            created with the purpose of learning how <IoLogoReact /> and{" "}
            <IoLogoFirebase /> work together and later on, use it on a real
            project (ecommerce).
          </p>
          <br />
          <p>
            Inspired and based on various youtubers and tutorials, such as
            FaztCode and PedroTech. There are many other things that I will
            implement, such as Authentication.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
