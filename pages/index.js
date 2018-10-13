import Link from "next/link";
import React from "react";
const Home = () => {
  return (
    <div>
      <p>Hey</p>
      <Link href="/sell">
        <a>Sell!</a>
      </Link>
    </div>
  );
};

export default Home;
