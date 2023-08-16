import React, { useState, useEffect } from "react";
import fetchData from "../../../../backend/index";
import classes from './fitmeinfo.module.css';

interface FitMeDishData {
  objectId: string;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  deliveryTime: string;
  isExpensive: boolean;
  location: string;
  topDishes: string[];
}

const FitMeDish: React.FC = () => {
  const [datas, setDatas] = useState<FitMeDishData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getInfo = async () => {
    try {
      const response = await fetchData.get("classes/Fitme");
      const responseData = response.data.results; // Access the 'results' field
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
      {datas.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className={classes.dish}>
          <h2>{datas[currentIndex].name}</h2>
          <p>{datas[currentIndex].location}</p>
          <div>
            <p>Price: {datas[currentIndex].price}</p>
            <p>Rating: {datas[currentIndex].rating}</p>
            <p>Delivery Time: {datas[currentIndex].deliveryTime}</p>
          </div>
          <p>Expensive: {datas[currentIndex].isExpensive ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
};

export default FitMeDish;
