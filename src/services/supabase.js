import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper functions for common operations
export const uploadProductImage = async (file, fileName) => {
  const { data, error } = await supabase.storage
    .from('products')
    .upload(fileName, file);
  
  if (error) throw error;
  
  const { data: { publicUrl } } = supabase.storage
    .from('products')
    .getPublicUrl(fileName);
    
  return publicUrl;
};

export const createProduct = async (productData) => {
  const { data, error } = await supabase
    .from('products')
    .insert([productData])
    .select();
    
  if (error) throw error;
  return data[0];
};

export const getUserStores = async (userId) => {
  const { data, error } = await supabase
    .from('stores')
    .select('*')
    .eq('user_id', userId);
    
  if (error) throw error;
  return data;
};