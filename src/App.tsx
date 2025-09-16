import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { MenuGrid } from './components/MenuGrid';
import { Footer } from './components/Footer';
import { menuItems, categories } from './data/menuItems';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Все' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-block p-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-6">
            <div className="bg-black px-6 py-2 rounded-full">
              <span className="text-amber-400 text-sm font-medium">Премиум напитки и закуски</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {categories.slice(1).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-amber-500 text-black shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-amber-400 border border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">
              {selectedCategory === 'Все' ? 'Все позиции' : selectedCategory}
            </h2>
            <span className="text-amber-400 text-sm">
              {filteredItems.length} {filteredItems.length === 1 ? 'позиция' : 'позиций'}
            </span>
          </div>
          {searchTerm && (
            <p className="text-gray-400 text-sm mt-2">
              Результаты поиска для "{searchTerm}"
            </p>
          )}
        </div>

        {/* Menu Items */}
        <MenuGrid items={filteredItems} selectedCategory={selectedCategory} />
      </main>

      <Footer />
    </div>
  );
}

export default App;