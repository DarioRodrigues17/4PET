import React, { useState, useRef, useEffect } from 'react';
import * as Icons from 'lucide-react';

type Message = {
  id: string;
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
};

const FAQ_DATA = {
  'preço': 'Os preços variam conforme o serviço. Para pet sitting, começamos em 15€/hora. Para passeios, 10€/30min. Entre em contato para um orçamento personalizado!',
  'horário': 'Funcionamos todos os dias, das 7h às 21h. Serviços noturnos disponíveis mediante agendamento prévio.',
  'área': 'Atendemos em toda Lisboa e arredores. Para outras regiões, por favor entre em contato.',
  'emergência': 'Sim, temos atendimento de emergência 24/7 para nossos clientes regulares.',
  'agendamento': 'Pode agendar através do nosso site, WhatsApp ou telefone. Recomendamos agendamento com 24h de antecedência.',
  'serviços': 'Oferecemos pet sitting, passeios, creche, transporte e cuidados especiais. Cada serviço é personalizado às necessidades do seu pet.',
};

const GREETING = "Olá! Sou o assistente virtual da 4PET. Como posso ajudar?";
const DEFAULT_RESPONSE = "Desculpe, não entendi sua pergunta. Que tal tentar perguntar sobre nossos preços, horários ou serviços?";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: '1',
          type: 'bot',
          text: GREETING,
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simple keyword matching for responses
    const lowercaseInput = inputValue.toLowerCase();
    let botResponse = DEFAULT_RESPONSE;

    for (const [keyword, response] of Object.entries(FAQ_DATA)) {
      if (lowercaseInput.includes(keyword)) {
        botResponse = response;
        break;
      }
    }

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          text: botResponse,
          timestamp: new Date(),
        },
      ]);
    }, 500);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 p-4 bg-[#CEBDB6] text-white rounded-full shadow-lg hover:bg-[#BBA89E] transition-colors z-50"
      >
        {isOpen ? (
          <Icons.X className="h-6 w-6" />
        ) : (
          <Icons.MessageCircle className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col z-50">
          <div className="p-4 bg-[#CEBDB6] text-white rounded-t-lg flex items-center">
            <Icons.PawPrint className="h-6 w-6 mr-2" />
            <span className="font-semibold">Assistente 4PET</span>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.type === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-[#CEBDB6] text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CEBDB6]"
              />
              <button
                type="submit"
                className="p-2 bg-[#CEBDB6] text-white rounded-lg hover:bg-[#BBA89E] transition-colors"
              >
                <Icons.Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}