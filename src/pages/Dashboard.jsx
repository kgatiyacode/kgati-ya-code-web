import { useState, useEffect } from 'react';
import { supabase, getUserStores } from '../services/supabase';
import AddProduct from '../components/AddProduct';

export default function Dashboard() {
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (user) {
      loadStores();
    }
  }, [user]);

  const getUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
  };

  const loadStores = async () => {
    try {
      const userStores = await getUserStores(user.id);
      setStores(userStores);
      if (userStores.length > 0) {
        setSelectedStore(userStores[0]);
      }
    } catch (error) {
      console.error('Error loading stores:', error);
    }
  };

  const createStore = async () => {
    const storeName = prompt('Enter store name:');
    if (!storeName) return;

    try {
      const { data, error } = await supabase
        .from('stores')
        .insert([{
          user_id: user.id,
          name: storeName,
          slug: storeName.toLowerCase().replace(/\s+/g, '-'),
          is_published: false
        }])
        .select();

      if (error) throw error;
      
      setStores([...stores, data[0]]);
      setSelectedStore(data[0]);
    } catch (error) {
      console.error('Error creating store:', error);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Please log in to access your dashboard</h2>
          <button
            onClick={() => window.location.href = '/login'}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>
          <div className="flex gap-4">
            <button
              onClick={createStore}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Create Store
            </button>
            <button
              onClick={() => supabase.auth.signOut()}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Sign Out
            </button>
          </div>
        </div>

        {stores.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
              No stores yet
            </h2>
            <button
              onClick={createStore}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Create Your First Store
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Store Sidebar */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Your Stores
              </h3>
              <div className="space-y-2">
                {stores.map(store => (
                  <button
                    key={store.id}
                    onClick={() => setSelectedStore(store)}
                    className={`w-full text-left p-3 rounded-lg border ${
                      selectedStore?.id === store.id
                        ? 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800'
                        : 'bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700'
                    }`}
                  >
                    <div className="font-medium text-gray-900 dark:text-white">
                      {store.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {store.is_published ? 'Published' : 'Draft'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {selectedStore && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedStore.name}
                    </h2>
                    <button
                      onClick={() => setShowAddProduct(!showAddProduct)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                      {showAddProduct ? 'Cancel' : 'Add Product'}
                    </button>
                  </div>

                  {showAddProduct ? (
                    <AddProduct
                      storeId={selectedStore.id}
                      onProductAdded={() => {
                        setShowAddProduct(false);
                        // Refresh products list here
                      }}
                    />
                  ) : (
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                        Products
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        No products yet. Click "Add Product" to get started with AI assistance!
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}