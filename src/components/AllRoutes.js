import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import MovieDetails from "./MovieDetails";
import SearchResults from "./SearchResults";
import Upcoming from "./Upcoming";
import TopRated from "./TopRated";
import Popular from "./Popular";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/movie/:id" element={<MovieDetails/>} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/top-rated" element={<TopRated />} />
      <Route path="/upcoming" element={<Upcoming />} />
      <Route path="/search" element={<SearchResults />} />
    </Routes>
  );
};

export default AllRoutes;