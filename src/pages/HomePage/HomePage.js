import React from "react";
import Banner from "./Banner";
import LichChieuRap from "./LichChieuRap";
// import MovieShowing from "./MovieShowing";
import ListFilm from "./ListFilm";
const HomePage = () => {

  return (
    <div className="bg-slate-950">
      <Banner />
    
      {/* <MovieShowing /> */}
      <div className="container space-y-10 mt-10">
        <ListFilm />
        <LichChieuRap />
      </div>
    </div>
  );
};

export default HomePage;
