import "./Allshow.css";
import React from "react";
import Showcard from "../../components/showCard/Showcard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Loader from "../../components/Loader/Loader";

const Allshow = () => {
  const [datas, setData] = useState();
  const [loading, setLoading] = useState(true);

  const getAllData = async () => {
    try {
      const { data } = await axios.get(
        "https://api.tvmaze.com/search/shows?q=all"
      );
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllData();
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <div className="allShow">
      <div className="allShow__container">
        {datas?.map((data) => (
          <Showcard key={data.show.id} data={data.show} state="1" />
        ))}
      </div>
    </div>
  );
};

export default Allshow;
