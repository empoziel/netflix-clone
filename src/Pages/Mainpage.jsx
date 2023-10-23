import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero";
import { getGenres, getMovies, setLoading } from "../redux/actions/action";
import ListMovies from "../components/ListMovies";

const Mainpage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.movieReducer);

  useEffect(() => {
    dispatch(setLoading(true));

    dispatch(getMovies());

    dispatch(getGenres());
  }, []);

  return (
    <div>
      <Hero />

      {/* render component for every genres  */}

      {state.genres.map((genre) => (
        <ListMovies key={genre.id} genre={genre} />
      ))}
    </div>
  );
};

export default Mainpage;
