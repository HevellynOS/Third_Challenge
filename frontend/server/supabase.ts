import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://trvqzcgdqrblxpnqaats.supabase.co/rest/v1/'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRydnF6Y2dkcXJibHhwbnFhYXRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEyNTgzMTcsImV4cCI6MjAzNjgzNDMxN30.cIACDDFyZSk1FEch2udv47ROHz1f08X1N2k08NfTOe8'; 

export const supabase = createClient(supabaseUrl, supabaseKey);
