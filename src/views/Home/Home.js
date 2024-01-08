import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Row from "../../components/Rows/Row";
import { fetchURL } from "../../Helpers/fetchURL";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        {fetchURL?.map((url) => {
          return <Row title={url.title} fetchURL={url.url} />;
        })}
      </div>
    </>
  );
};

export default Home;
