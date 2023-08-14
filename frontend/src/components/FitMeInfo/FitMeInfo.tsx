import React, { useState, useEffect } from "react";
import fetchData from "../../../../backend/index";
import classes from './fitmeinfo.module.css'

interface FitMeData {
  objectId: string;
  name: string;
  rating: number;
  deliveryTime: string;
  isExpensive: boolean;
  location: string;
  image: string;
  topDishes: string[];
}

const FitMeInfo: React.FC = () => {
  const [datas, setDatas] = useState<FitMeData[]>([]);

  const getInfo = async () => {
    try {
      const response = await fetchData.get("classes/FitMe");
      const responseData = response.data.results; // Access the 'results' field
      console.log("Response:", response);
      console.log("Response Data:", responseData);
      if (Array.isArray(responseData)) {
        setDatas(responseData);
      } else {
        setDatas([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div>
      <h1>Datas from Backend API</h1>
      <ul>
        {datas.length === 0 ? (<li>Loading...</li>) : (datas.map((data) => (
            
            <li className={classes.dish} key={data.objectId}>
              <img src={data.image} alt="" />
              <h2>{data.name}</h2>
              <p>Rating: {data.rating}</p>
              <p>Delivery Time: {data.deliveryTime}</p>
              <p>Top Dishes: {data.topDishes.join(", ")}</p>
              <p>Location: {data.location}</p>
              <p>Is Expensive: {data.isExpensive ? 'Yes' : 'No'}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default FitMeInfo;
