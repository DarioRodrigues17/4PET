import React, { useState } from 'react';
import { Send, Dog, Cat, Clock, MapPin } from 'lucide-react';
import toast from 'react-hot-toast';

export default function QuickQuoteForm() {
  const [formData, setFormData] = useState({
    petType: '',
    service: '',
    location: '',
    schedule: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Obrigado! Entraremos em contacto em breve.');
    setFormData({
      petType: '',
      service: '',
      location: '',
      schedule: ''
    });
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
      <h3 className="text-2xl font-bold text-white mb-6">
        Orçamento Rápido
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Pet Type Selection */}
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, petType: 'dog' })}
            className={`p-4 rounded-xl border border-white/20 flex flex-col items-center transition-all ${
              formData.petType === 'dog' ? 'bg-[#8B7B74] text-white' : 'bg-white/5 text-white/80 hover:bg-white/10'
            }`}
          >
            <Dog className="h-8 w-8 mb-2" />
            <span>Cão</span>
          </button>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, petType: 'cat' })}
            className={`p-4 rounded-xl border border-white/20 flex flex-col items-center transition-all ${
              formData.petType === 'cat' ? 'bg-[#8B7B74] text-white' : 'bg-white/5 text-white/80 hover:bg-white/10'
            }`}
          >
            <Cat className="h-8 w-8 mb-2" />
            <span>Gato</span>
          </button>
        </div>

        {/* Service Selection */}
        <select
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full p-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-[#CEBDB6]"
          required
        >
          <option value="" className="text-gray-900">Selecione o Serviço</option>
          <option value="sitting" className="text-gray-900">Pet Sitting</option>
          <option value="walking" className="text-gray-900">Passeios</option>
          <option value="daycare" className="text-gray-900">Creche</option>
          <option value="transport" className="text-gray-900">Transporte</option>
        </select>

        {/* Location Input */}
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
          <input
            type="text"
            placeholder="Sua Localização"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full p-3 pl-12 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-[#CEBDB6]"
            required
          />
        </div>

        {/* Schedule Input */}
        <div className="relative">
          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
          <input
            type="text"
            placeholder="Quando Precisa?"
            value={formData.schedule}
            onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
            className="w-full p-3 pl-12 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-[#CEBDB6]"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 rounded-xl bg-[#8B7B74] text-white font-medium hover:bg-[#7A6B64] transition-colors flex items-center justify-center gap-2 group"
        >
          <Send className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          Pedir Orçamento
        </button>
      </form>
    </div>
  );
}