import React from 'react';
import * as Icons from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <img src="/logo.svg" alt="4PET Logo" className="h-10 w-10" />
              <span className="ml-2 text-2xl font-bold text-white">4PET</span>
            </div>
            <p className="mt-4 text-gray-300">
              Serviços profissionais de cuidados para animais em que pode confiar. Os seus animais são família, e nós tratamos deles como se fossem nossos.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {['Início', 'Serviços', 'Galeria', 'Testemunhos', 'FAQ'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {[
                'Pet Sitting',
                'Passeios',
                'Creche',
                'Transporte'
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contactos</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <Icons.Phone className="h-5 w-5 mr-2 text-[#CEBDB6]" />
                (+351) 939-388-625 
                (+351) 934-263-509
              </li>
              <li className="flex items-center text-gray-300">
                <Icons.Mail className="h-5 w-5 mr-2 text-[#CEBDB6]" />
                info@4pet.com
              </li>
              <li className="flex items-center text-gray-300">
                <Icons.MapPin className="h-5 w-5 mr-2 text-[#CEBDB6]" />
                Porto, Portugal             
              </li>
             
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} 4PET. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}