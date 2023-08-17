import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
interface DishData {
  name: string;

  rating: number;
  deliveryTime: number;
  isExpensive: boolean;
  location: string;
  topDishes: string[];
}

const headers = {
  'X-Parse-Application-Id': 'lrAPveloMl57TTby5U0S4rFPBrANkAhLUll8jFOh',
  'X-Parse-REST-API-Key': '8aqUBWOjOplfA6lstntyYsYVkt3RzpVtb8qU5x08',
  'X-Parse-Revocable-Session': '1',
  'Content-Type': 'application/json',

};

const url = 'https://parseapi.back4app.com/graphql';

const dishDataQuery = `

  query {
    fitMes {
        name
        rating
        deliveryTime
        isExpensive
        location
        image
        topDishes
    }
  }
`;

const useDishData = () => {
  const [dishData, setDishData] = useState<DishData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response: AxiosResponse = await axios.post(url, { query: dishDataQuery }, { headers });
        setDishData(response.data.data.FitMeData);
        setLoading(false);
      } catch (error) {
        setError('An error occurred while fetching data.');
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return { dishData, loading, error };
};

export default useDishData;