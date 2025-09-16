import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center">
          <h3 className="text-amber-400 font-semibold text-lg mb-4">Наша группа Вконтакте</h3>
          <a 
            href="https://vk.com/m33_club" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:transform hover:scale-105"
          >
            Присоединиться к группе
          </a>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 М33. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
