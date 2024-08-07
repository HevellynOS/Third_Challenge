import { useState, useEffect } from 'react';
import { supabase } from '../supabase';

interface Dish {
  id: string;
  name: string;
  price: number;
  photo: string;
}
const useFitMeDishs = () => {
  const [fitMeData, setFitMeData] = useState<Dish[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFitMeData = async () => {
      try {
        const { data, error } = await supabase
          .from('dishs') 
          .select('*');

        if (error) throw error;

        setFitMeData(data as Dish[] || []);
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

export default useFitMeDishs;
