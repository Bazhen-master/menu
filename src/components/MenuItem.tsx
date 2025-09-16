import React from 'react';
import { Star } from 'lucide-react';

export interface MenuItemData {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory?: string;
  isPopular?: boolean;
  alcoholContent?: string;
  image?: string;
}

interface MenuItemProps {
  item: MenuItemData;
  showPopularBadge?: boolean;
}

export function MenuItem({ item, showPopularBadge = true }: MenuItemProps) {
  return (
    <div className="bg-gray-900 rounded-xl p-4 border border-gray-800 hover:border-amber-500/30 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
      {item.isPopular && showPopularBadge && (
        <div className="absolute bottom-4 right-4 bg-amber-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <Star size={12} fill="currentColor" />
          Популярное
        </div>
      )}
      
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-white leading-tight flex-1 mr-2">
          {item.name}
        </h3>
        <span className="text-xl font-bold text-amber-400 whitespace-nowrap">
          {item.price}₽
        </span>
      </div>
      
      <p className="text-gray-400 text-sm mb-3 line-clamp-2">
        {item.description}
      </p>
      
      {item.alcoholContent && (
        <div className="flex items-center justify-between">
          <span className="text-xs text-amber-300 bg-amber-900/30 px-2 py-1 rounded-full">
            {item.alcoholContent}
          </span>
        </div>
      )}
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}