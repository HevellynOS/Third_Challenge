import { supabase } from '../supabase';
import { useState } from 'react';
import { User } from '@supabase/supabase-js';

export interface SignIn {
    email: string;
    password: string;
}

const useSignIn = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const signIn = async (email: string, password: string) => {
        setLoading(true);
        setError(null);

        try {
            const { data, error } = await supabase.auth.signInWithPassword({ email, password });

            if (error) throw error;

            setUser(data.user);
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

    return { signIn, user, loading, error };
};

export default useSignIn;
