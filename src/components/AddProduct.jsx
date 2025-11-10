import { useState } from 'react';
import { supabase } from '../services/supabase';
import { generateProductSuggestions } from '../services/firebase';

export default function AddProduct({ storeId, onProductAdded }) {
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    tags: []
  });
  const [aiSuggestions, setAiSuggestions] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageUpload = async (file) => {
    if (!file) return;
    
    setAiLoading(true);
    try {
      // Upload to Supabase Storage
      const fileName = `${Date.now()}-${file.name}`;
      const { data, error } = await supabase.storage
        .from('products')
        .upload(fileName, file);

      if (error) throw error;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('products')
        .getPublicUrl(fileName);

      setImageUrl(publicUrl);

      // Generate AI suggestions
      const suggestions = await generateProductSuggestions(publicUrl);
      setAiSuggestions(suggestions);
      
    } catch (error) {
      console.error('Upload error:', error);
    } finally {
      setAiLoading(false);
    }
  };

  const applySuggestions = () => {
    if (!aiSuggestions?.suggestions) return;
    
    const { suggestions } = aiSuggestions;
    setProduct(prev => ({
      ...prev,
      name: suggestions.name,
      description: suggestions.description,
      category: suggestions.category,
      tags: suggestions.tags,
      price: suggestions.priceRange.min.toString()
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('products')
        .insert([{
          store_id: storeId,
          name: product.name,
          description: product.description,
          price: parseFloat(product.price),
          category: product.category,
          tags: product.tags,
          images: imageUrl ? [imageUrl] : [],
          ai_suggestions: aiSuggestions,
          status: 'active'
        }]);

      if (error) throw error;
      
      onProductAdded?.();
      // Reset form
      setProduct({ name: '', description: '', price: '', category: '', tags: [] });
      setAiSuggestions(null);
      setImageUrl('');
      
    } catch (error) {
      console.error('Save error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Add New Product</h2>
      
      {/* Image Upload */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          Product Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            setImageFile(file);
            handleImageUpload(file);
          }}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {aiLoading && (
          <p className="text-sm text-blue-600 mt-2">🤖 AI analyzing image...</p>
        )}
      </div>

      {/* AI Suggestions */}
      {aiSuggestions && (
        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100">✨ AI Suggestions</h3>
            <button
              onClick={applySuggestions}
              className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
            >
              Apply All
            </button>
          </div>
          <div className="space-y-2 text-sm">
            <p><strong>Name:</strong> {aiSuggestions.suggestions?.name}</p>
            <p><strong>Category:</strong> {aiSuggestions.suggestions?.category}</p>
            <p><strong>Price Range:</strong> ${aiSuggestions.suggestions?.priceRange?.min} - ${aiSuggestions.suggestions?.priceRange?.max}</p>
          </div>
        </div>
      )}

      {/* Product Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
            Product Name
          </label>
          <input
            type="text"
            value={product.name}
            onChange={(e) => setProduct(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
            Description
          </label>
          <textarea
            value={product.description}
            onChange={(e) => setProduct(prev => ({ ...prev, description: e.target.value }))}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Price ($)
            </label>
            <input
              type="number"
              step="0.01"
              value={product.price}
              onChange={(e) => setProduct(prev => ({ ...prev, price: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Category
            </label>
            <select
              value={product.category}
              onChange={(e) => setProduct(prev => ({ ...prev, category: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="">Select Category</option>
              <option value="Clothing">Clothing</option>
              <option value="Electronics">Electronics</option>
              <option value="Home & Garden">Home & Garden</option>
              <option value="Sports">Sports</option>
              <option value="Beauty">Beauty</option>
              <option value="General">General</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Saving...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
}