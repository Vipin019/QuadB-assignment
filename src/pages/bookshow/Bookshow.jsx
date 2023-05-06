import "./Bookshow.css";
import React, { useEffect, useState } from "react";
import Showcard from "../../components/showCard/Showcard";
import Bookcard from "../../components/bookcard/Bookcard.jsx";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const Bookshow = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      const { data } = await axios.get("https://api.tvmaze.com/shows/" + id);
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="bookShow">
      <div className="bookShow__container">
        <Showcard data={data} state="3" />
        <Bookcard data={data} />
      </div>
    </div>
  );
};

export default Bookshow;
