import React, { useState } from 'react'; 
import { ChevronDown, ChevronUp, Dot } from 'lucide-react';  // Importando o ícone Dot

const faqs = [
  {
    question: 'Quais são as áreas que realizamos os nossos serviços?',
    answer: `
      Realizamos serviços principalmente na zona do Porto, incluindo:
      . Maia
      . Matosinhos
      . Vila Nova de Gaia
  
      Também atendemos em áreas próximas, como:
      . Póvoa de Varzim
      . Santa Maria da Feira
      . etc...
  
      Se a sua localização não estiver indicada, entre em contacto connosco para verificar a nossa disponibilidade de deslocação.
    `
  },
  {
    question: 'Quais são as vossas condições?',
    answer: 'Em ambos os nossos alojamentos, os animais poderão estar num espaço interior e num amplo espaço exterior. Temos disponibilidade de os alojar dentro de casa, o que torna o processo de adaptação melhor e mais aconchegante.'
  },
  {
    question: 'O que tenho que levar juntamente com o meu patudo?',
    answer: 'Nós exigimos que traga o boletim de vacinas, que o patudo tenha microchip, a sua caminha ou mantinha onde dorme, ração e/ou algum snack preferido. Se tomar alguma medicação, ou outra condição, deve nos informar de imediato.'
  },
  {
    question: 'Que tipos de animais aceitam?',
    answer: 'Aceitamos qualquer tipo de animal doméstico, incluído cão, gato, peixe, ave, coelho, hamster, etc …'
  },
  {
    question: 'Qual é a experiência da equipa 4 Pet?',
    answer: 'Somos 2 jovens, o Dario estuda Informática mas tem desde sempre uma enorme paixão pelos animais e a Margarida, partilha o mesmo gosto por estes e estuda na área de Enfermagem Veterinária. Além disso, o projeto da 4 Pet já tem mais de 1 ano, tendo recebido +50 animais até à data.'
  },
  {
    question: 'O que acontece em caso de emergência?',
    answer: 'Numa emergência, a primeira coisa que fazemos é sempre indicar ao dono a situação, se for uma emergência médica, recorremos logo ao médico veterinário.'
  },
  {
    question: 'Como posso agendar um serviço?',
    answer: 'Através do nosso site, das nossas redes sociais ou dos nossos contactos.'
  }
];

function parseAnswer(answer) {
  // Quebra a string em linhas e mapeia para criar listas ou parágrafos
  const lines = answer.split('\n').filter(line => line.trim() !== '');
  return lines.map((line, index) => {
    if (line.trim().startsWith('.')) {  // Verifica se a linha começa com ponto
      return (
        <div key={index} className="flex items-center ml-6 text-gray-600">
          <Dot className="h-4 w-4 mr-2 text-[#CEBDB6]" />  {/* Usando o ícone Dot */}
          <span>{line.trim().slice(2)}</span>  {/* Remove o ponto e o espaço */}
        </div>
      );
    }
    return <p key={index} className="text-gray-600">{line}</p>;
  });
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Tudo o que precisa de saber sobre os nossos serviços
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full px-6 py-4 text-left bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[#CEBDB6]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#CEBDB6]" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white rounded-b-lg shadow-md mt-1">
                  {parseAnswer(faq.answer)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
