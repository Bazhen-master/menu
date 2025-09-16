import React from 'react';
import { MenuItem, MenuItemData } from './MenuItem';

interface MenuGridProps {
  items: MenuItemData[];
  selectedCategory: string;
}

export function MenuGrid({ items, selectedCategory }: MenuGridProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">Ничего не найдено</p>
        <p className="text-gray-500 text-sm mt-2">Попробуйте изменить критерии поиска</p>
      </div>
    );
  }

  // Group items by subcategory if we're viewing cocktails
  if (selectedCategory === 'Коктейли') {
    const groupedItems = items.reduce((acc, item) => {
      const subcategory = item.subcategory || 'Другие';
      if (!acc[subcategory]) {
        acc[subcategory] = [];
      }
      acc[subcategory].push(item);
      return acc;
    }, {} as Record<string, MenuItemData[]>);

    const subcategoryOrder = ['Авторские', 'Популярные', 'Спецпредложения', 'Спритц коктейли', 'Шоты', 'Лимонады', 'АКЦИИ', 'Сеты для компаний', 'Другие'];
    
    return (
      <div className="space-y-12">
        {subcategoryOrder.map((subcategory) => {
          const subcategoryItems = groupedItems[subcategory];
          if (!subcategoryItems || subcategoryItems.length === 0) return null;
          
          return (
            <div key={subcategory}>
              <div className="flex items-center mb-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
                <h3 className="px-6 text-xl font-semibold text-amber-400 bg-black">
                  {subcategory}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {subcategoryItems.map((item) => (
                  <MenuItem key={item.id} item={item} showPopularBadge={subcategory === 'Популярные'} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  // Group items by subcategory if we're viewing wine
  if (selectedCategory === 'Вино') {
    const groupedItems = items.reduce((acc, item) => {
      const subcategory = item.subcategory || 'Тихие вина';
      if (!acc[subcategory]) {
        acc[subcategory] = [];
      }
      acc[subcategory].push(item);
      return acc;
    }, {} as Record<string, MenuItemData[]>);

    const subcategoryOrder = ['Игристое вино', 'Тихие вина'];
    
    return (
      <div className="space-y-12">
        {subcategoryOrder.map((subcategory) => {
          const subcategoryItems = groupedItems[subcategory];
          if (!subcategoryItems || subcategoryItems.length === 0) return null;
          
          return (
            <div key={subcategory}>
              <div className="flex items-center mb-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
                <h3 className="px-6 text-xl font-semibold text-amber-400 bg-black">
                  {subcategory}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {subcategoryItems.map((item) => (
                  <MenuItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
}