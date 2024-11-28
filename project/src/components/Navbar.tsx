import React, { useState } from 'react';
import * as Icons from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Início', href: 'home' },
    { label: 'Serviços', href: 'services' },
    { label: 'Galeria', href: 'gallery' },
    { label: 'Testemunhos', href: 'testimonials' },
    { label: 'FAQ', href: 'faq' },
    { label: 'Orçamento', href: 'quote' }
  ];

  return (
    <nav className="bg-[#CEBDB6] fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#home" className="flex items-center">
                <img src="/logo.svg" alt="4PET Logo" className="h-12 w-12" />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.href}`}
                  className="text-white hover:bg-[#BBA89E] px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-[#BBA89E] p-2 rounded-md"
            >
              {isOpen ? <Icons.X className="h-6 w-6" /> : <Icons.Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.href}`}
                className="text-white hover:bg-[#BBA89E] block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}