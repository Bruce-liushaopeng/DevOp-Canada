import React from "react";

function Home() {
  return (
    <div>
      <div style={{ height: "40vh", overflow: "hidden" }}>
        <img src="./img/banner.jpg" style={{ width: "100%", height: "auto" }} />
      </div>

      <h1 style={{ textAlign: "center" }}>Welcome to DevOps Canada!</h1>
      <p>What is DevOps? Well, you came to the right place to learn!</p>
    </div>
  );
}

export default Home;
