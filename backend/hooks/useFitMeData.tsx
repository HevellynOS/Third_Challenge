import { useState, useEffect } from "react";
import axios from "axios";

export interface FitMeData {
  objectId: string;
  name: string;
  rating: number;
  deliveryTime: string;
  isExpensive: boolean;
  location: string;
  topDishes: TopDishData[];
}

export interface TopDishData {
  name: string;
  description: string;
  image: string;
  price: number;
}

export interface UseFitMeDataResult {
  fitMeData: FitMeData[] | null;
  loading: boolean;
  error: string | null;
}

const useFitMeData = (): UseFitMeDataResult => {
  const [fitMeData, setFitMeData] = useState<FitMeData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    const url = "https://parseapi.back4app.com/graphql";
    const headers = {
      "X-Parse-Application-Id": "DSiIkHz2MVbCZutKS7abtgrRVsiLNNGcs0L7VsNL",
      "X-Parse-Master-Key": "0cpnqkSUKVkIDlQrNxameA6OmjxmrA72tsUMqVG9",
      "X-Parse-Client-Key": "zXOqJ2k44R6xQqqlpPuizAr3rs58RhHXfU7Aj20V",
      "Content-Type": "application/json; charset=utf-8",
    };

    const query = `
      query {
        fitMes {
          count
          edges {
            node {
              objectId
              name
              rating
              deliveryTime
              isExpensive
              location
              topDishes {
                ...AllDishes
              }
            }
          }
        }
      }

      fragment AllDishes on Dish {
        name
        description
        image
        price
      }
    `;

    try {
      setLoading(true);
      const response = await axios.post(url, { query }, { headers });
      const responseData = response.data.data.fitMes.edges.map((edge: any) => edge.node);

      console.log("Received data:", responseData);
      setFitMeData(responseData || null);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { fitMeData, loading, error };
};

export default useFitMeData;