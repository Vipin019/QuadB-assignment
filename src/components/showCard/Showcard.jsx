import "./ShowCard.css";
import React from "react";
import { Link } from "react-router-dom";
const defaultImage =
  "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";

const Showcard = ({ data, state }) => {
  return (
    <div className="showCard">
      <img
        alt="Error"
        src={
          data?.image?.medium
            ? data?.image?.medium
            : data?.image?.original
            ? data?.image?.original
            : defaultImage
        }
      />
      <h1>
        <b>Name: </b>
        {data?.name}
      </h1>
      <div>
        <p>
          <b>Language</b>: {data?.language}
        </p>
        <p>
          <b>Runtime</b>: {data?.runtime ? data?.runtime : "--"} min.
        </p>
      </div>
      <div>
        <p>
          <b>Premiered</b>: {data?.premiered ? data?.premiered : "-----"}
        </p>
        <p>
          <b>Average rating</b>:{" "}
          {data?.rating?.average ? data?.rating?.average : 0}
        </p>
      </div>
      {state === "1" ? (
        <Link to={"/singleShow/" + data?.id}>
          <input type="button" value="View Summary" className="btn btn-l" />
        </Link>
      ) : state === "2" ? (
        <Link to={"/bookShow/" + data?.id}>
          <input type="button" value="Book Movie" className="btn btn-l" />
        </Link>
      ) : (
        <Link to={"/"}>
          <input
            type="button"
            value="Back to home page"
            className="btn btn-l"
          />
        </Link>
      )}
    </div>
  );
};

export default Showcard;
