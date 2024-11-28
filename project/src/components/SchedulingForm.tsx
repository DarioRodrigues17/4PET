import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import { Dog, Cat, Rabbit, Scale, Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import toast from 'react-hot-toast';
import 'react-day-picker/dist/style.css';

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00'
];

const cities = [
  'Porto', 'Vila Nova de Gaia', 'Matosinhos', 'Maia',
  'Gondomar', 'Valongo', 'Vila do Conde', 'Póvoa de Varzim'
];

interface FormData {
  date: Date | undefined;
  time: string;
  animalType: string;
  size?: string;
  weight: string;
  age: string;
  location: string;
}

export default function SchedulingForm() {
  const [formData, setFormData] = useState<FormData>({
    date: undefined,
    time: '',
    animalType: '',
    weight: '',
    age: '',
    location: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.date || !formData.time) {
      toast.error('Por favor, selecione uma data e hora.');
      return;
    }
    
    toast.success('Agendamento recebido! Entraremos em contacto em breve.');
    console.log('Dados do agendamento:', formData);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
      <h3 className="text-2xl font-bold text-white mb-6">
        Agendar Serviço
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Animal Type Selection */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white">
            Tipo de Animal
          </label>
          <div className="grid grid-cols-3 gap-4">
            {[
              { type: 'dog', icon: Dog, label: 'Cão' },
              { type: 'cat', icon: Cat, label: 'Gato' },
              { type: 'other', icon: Rabbit, label: 'Outro' }
            ].map(({ type, icon: Icon, label }) => (
              <button
                key={type}
                type="button"
                onClick={() => setFormData({ ...formData, animalType: type })}
                className={`p-4 rounded-xl border border-white/20 flex flex-col items-center transition-all ${
                  formData.animalType === type
                    ? 'bg-[#8B7B74] text-white'
                    : 'bg-white/5 text-white/80 hover:bg-white/10'
                }`}
              >
                <Icon className="h-8 w-8 mb-2" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dog Size (Conditional) */}
        {formData.animalType === 'dog' && (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">
              Porte do Cão
            </label>
            <select
              value={formData.size}
              onChange={(e) => setFormData({ ...formData, size: e.target.value })}
              className="w-full p-3 rounded-xl bg-white/5 border border-white/20 text-white focus:ring-2 focus:ring-[#CEBDB6]"
              required
            >
              <option value="">Selecione o porte</option>
              <option value="small">Pequeno (0-5kg)</option>
              <option value="medium">Médio (5-15kg)</option>
              <option value="large">Grande (15-25kg)</option>
              <option value="large">Gigante (+25kg)</option>
            </select>
          </div>
        )}

        {/* Weight and Age */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">
              Peso (kg)
            </label>
            <div className="relative">
              <Scale className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
              <input
                type="number"
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                className="w-full p-3 pl-12 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-[#CEBDB6]"
                placeholder="Peso"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">
              Idade (anos)
            </label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              className="w-full p-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-[#CEBDB6]"
              placeholder="Idade"
              required
            />
          </div>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white">
            Localização
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
            <select
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full p-3 pl-12 rounded-xl bg-white/5 border border-white/20 text-white focus:ring-2 focus:ring-[#CEBDB6]"
              required
            >
              <option value="">Selecione a cidade</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Calendar */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white">
            Data e Hora
          </label>
          <div className="bg-white/5 rounded-xl p-4">
            <DayPicker
              mode="single"
              selected={formData.date}
              onSelect={(date) => setFormData({ ...formData, date })}
              locale={pt}
              className="!bg-transparent text-white"
              modifiers={{
                disabled: [
                  { before: new Date() },
                  { dayOfWeek: [0] } // Sundays disabled
                ]
              }}
              modifiersStyles={{
                selected: {
                  backgroundColor: '#8B7B74'
                }
              }}
              styles={{
                caption: { color: 'white' },
                head_cell: { color: 'white' },
                day: { color: 'white' }
              }}
            />
          </div>
        </div>

        {/* Time Selection */}
        {formData.date && (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">
              Horário Disponível
            </label>
            <div className="grid grid-cols-4 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setFormData({ ...formData, time })}
                  className={`p-2 rounded-lg border border-white/20 text-sm transition-all ${
                    formData.time === time
                      ? 'bg-[#8B7B74] text-white'
                      : 'bg-white/5 text-white/80 hover:bg-white/10'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full py-3 px-6 rounded-xl bg-[#8B7B74] text-white font-medium hover:bg-[#7A6B64] transition-colors flex items-center justify-center gap-2"
        >
          <CalendarIcon className="h-5 w-5" />
          Confirmar Agendamento
        </button>
      </form>
    </div>
  );
}