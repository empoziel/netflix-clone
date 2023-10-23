import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseImgUrl, options } from "./../constants/constants";

const MovieDetail = () => {
  const { movie_id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    axios.get(`movie/${movie_id}`, options).then((res) => setDetail(res.data));
  }, []);

  const sum = detail?.revenue - detail?.budget;

  if (!detail) return "loading...";
  return (
    <div className="movie-detail row p-4">
      <div className="col-md-4 d-flex align-items-center justify-content-center">
        <div className="position-relative" style={{ maxWidth: "400px" }}>
          <img
            className="img-fluid rounded shadow-lg"
            src={baseImgUrl.concat(detail.poster_path)}
          />
          <span className="position-absolute bg-warning rounded p-1 shadow bottom-0 end-0 mb-3 me-4">
            {detail.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
      <div className="col-md-8 d-flex flex-column justify-content-center ">
        <h1>{detail.title}</h1>
        <p>{detail.overview}</p>
        <div className="row">
          <div className="col-4 col-md-12">
            <p>Budget: {detail.budget} $</p>
            <p>Revenue: {detail.revenue} $</p>
            <p>
              {sum >= 0 ? "Profit" : "Loss"}: {sum}$
            </p>
          </div>
          <div className="col-8 col-md-12">
            <div className="d-flex gap-3">
              Categories:
              {detail.genres.map((genre, i) => (
                <p className="badge bg-primary" key={i}>
                  {genre.name}
                </p>
              ))}
            </div>
            <div className="d-flex gap-3">
              Languages:
              {detail.spoken_languages.map((lang, i) => (
                <p className="badge bg-danger" key={i}>
                  {lang.name}
                </p>
              ))}
            </div>
            <div className="d-flex gap-3">
              Production Companies:
              {detail.production_companies.map((comp, i) => (
                <p className="badge bg-success" key={i}>
                  {comp.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
