import React from "react";
import Main from "../component/Main";
import requests from "../Requests";
import Row from "../component/Row";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title="UpComing" fetchURL={requests.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="5" title="Horror" fetchURL={requests.requestUpcoming} />
    </>
  );
};

export default Home;
