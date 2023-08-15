
import React, { useState, useEffect } from "react";
import fetchData from "../../../../backend/index";
import classes from './fitmeinfo.module.css'

interface FitMeDishData {
  objectId: string;
  name: string;
  price: number;
  description: string;
  image: string;
}


const FitMeDish: React.FC = () => {
    const [datas, setDatas] = useState<FitMeDishData[]>([]);

    const getInfo = async () => {
      try {
        const response = await fetchData.get("classes/Dish");
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
                <p>{data.description}</p>
                <p>{data.price}</p>
              </li>
            ))
          )}
        </ul>
      </div>
    );
  };
  

export default FitMeDish