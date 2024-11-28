import React from 'react';
import * as Icons from 'lucide-react';

const services = [
  {
    title: 'Pet Sitting',
    icon: Icons.Home,
    description: 'Cuidados em casa enquanto está ausente',
    includes: [
      'Alimentação e água fresca',
      'Administração de medicamentos',
      'Tempo de brincadeira e exercício',
      'Atualizações e fotos regulares',
      'Recolha de correio e rega de plantas'
    ]
  },
  {
    title: 'Dog Walking',
    icon: Icons.PawPrint,
    description: 'Serviços profissionais de Dog Walking',
    includes: [
      'Passeios de 30 ou 60 minutos',
      'Passeios individuais ou em grupo',
      'Horários flexíveis',
      'Relatório pós-passeio e fotos'
    ]
  },
  {
    title: 'Day Care',
    icon: Icons.Dog,
    description: 'Cuidados diários para o seu amigo',
    includes: [
      'Tempo de brincadeira supervisionado',
      'Interação social',
      'Pausas regulares',
      'Manutenção do horário de alimentação',
      'Instalações climatizadas'
    ]
  },
  {
    title: 'Alojamento Familiar',
    icon: Icons.Home,
    description: 'Transporte seguro para consultas',
    includes: [
      'Visitas ao veterinário',
      'Marcações de grooming',
      'Veículo seguro e confortável',
      'Serviço porta a porta',
      'Transporte de emergência disponível'
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Os Nossos Serviços
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Serviços completos de cuidados para animais adaptados às suas necessidades
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="inline-flex p-3 bg-[#CEBDB6] rounded-lg">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Inclui:</h4>
                  <ul className="space-y-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-center text-gray-600">
                        <Icons.PawPrint className="h-4 w-4 text-[#CEBDB6] mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}