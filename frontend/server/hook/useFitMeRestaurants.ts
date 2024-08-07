import { useState, useEffect } from 'react';
import { supabase } from '../supabase';


export interface FitMeData {
    id: string;
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
    quantity: number;
  }
  
  export interface UseFitMeDataResult {
    fitMeData: FitMeData[] | null;
    loading: boolean;
    error: string | null;
  }

const useFitMeData = () => {
  const [fitMeData, setFitMeData] = useState<FitMeData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFitMeData = async () => {
      try {
        const { data, error } = await supabase
          .from('restaurants') 
          .select('*');

        if (error) throw error;

        setFitMeData(data as FitMeData[] || []);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError(String(error));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchFitMeData();
  }, []);

  return { fitMeData, loading, error };
};

export default useFitMeData;
