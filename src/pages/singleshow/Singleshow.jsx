import "./Singleshow.css";
import React, { useEffect, useState } from "react";
import Showcard from "../../components/showCard/Showcard";
import Summarycard from "../../components/summarycard/Summarycard";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const Singleshow = () => {
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
    <div className="singleShow">
      <div className="singleShow__container">
        <Showcard data={data} state="2" />
        <Summarycard data={data} />
      </div>
    </div>
  );
};

export default Singleshow;
