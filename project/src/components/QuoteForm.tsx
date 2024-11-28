import React, { useState, useRef } from 'react';
import { Send, Globe2, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

type Language = 'pt' | 'en';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  petType: string;
  message: string;
}

const translations = {
  pt: {
    title: 'Pedir Orçamento',
    subtitle: 'Fale-nos sobre o seu animal e os serviços que necessita',
    name: 'Nome Completo',
    email: 'Email',
    phone: 'Telefone',
    service: 'Serviço Pretendido',
    serviceOptions: {
      default: 'Selecione um serviço',
      petSitting: 'Pet Sitting',
      dogWalking: 'Passeios',
      daycare: 'Creche',
      transport: 'Transporte'
    },
    petType: 'Tipo de Animal',
    petOptions: {
      default: 'Selecione o tipo de animal',
      dog: 'Cão',
      cat: 'Gato',
      both: 'Cão e Gato',
      other: 'Outro'
    },
    message: 'Informações Adicionais',
    submit: 'Pedir Orçamento Gratuito',
    success: 'Pedido enviado com sucesso! Entraremos em contacto em breve.',
    error: 'Ocorreu um erro. Por favor, tente novamente.',
    followUp: 'Irá receber um email de confirmação e um contacto personalizado via WhatsApp.'
  },
  en: {
    title: 'Get a Quote',
    subtitle: 'Tell us about your pet and the services you need',
    name: 'Full Name',
    email: 'Email',
    phone: 'Phone',
    service: 'Service Needed',
    serviceOptions: {
      default: 'Select a service',
      petSitting: 'Pet Sitting',
      dogWalking: 'Dog Walking',
      daycare: 'Pet Daycare',
      transport: 'Pet Transportation'
    },
    petType: 'Pet Type',
    petOptions: {
      default: 'Select pet type',
      dog: 'Dog',
      cat: 'Cat',
      both: 'Both Dog & Cat',
      other: 'Other'
    },
    message: 'Additional Information',
    submit: 'Get Your Free Quote',
    success: 'Request sent successfully! We\'ll be in touch soon.',
    error: 'An error occurred. Please try again.',
    followUp: 'You will receive a confirmation email and personalized WhatsApp follow-up.'
  }
};

export default function QuoteForm() {
  const [language, setLanguage] = useState<Language>('pt');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const t = translations[language];

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    petType: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your EmailJS service ID, template ID, and public key
      await emailjs.sendForm(
        '4pet2024_6',
        'template_he662u7',
        formRef.current!,
        'Eu5WAtEOoeAhmqYF7'
      );

      // Send confirmation email to customer
      await emailjs.send(
        '4pet2024_6',
        'template_he662u7',
        {
          to_email: formData.email,
          to_name: formData.name,
        },
        'Eu5WAtEOoeAhmqYF7'
      );

      toast.success(t.success);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        petType: '',
        message: ''
      });
    } catch (error) {
      toast.error(t.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="quote" className="py-24 bg-[#CEBDB6]">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center relative">
            <button
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
              className="absolute right-0 top-0 text-white hover:text-gray-200 transition-colors"
              aria-label="Toggle language"
            >
              <Globe2 className="h-6 w-6" />
            </button>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              {t.title}
            </h2>
            <p className="mt-4 text-xl text-white/90">
              {t.subtitle}
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-white">
                {t.name}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-white focus:ring-white bg-white/90"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                {t.email}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-white focus:ring-white bg-white/90"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white">
                {t.phone}
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-white focus:ring-white bg-white/90"
                required
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-white">
                {t.service}
              </label>
              <select
                name="service"
                id="service"
                value={formData.service}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-white focus:ring-white bg-white/90"
                required
              >
                <option value="">{t.serviceOptions.default}</option>
                <option value="pet-sitting">{t.serviceOptions.petSitting}</option>
                <option value="dog-walking">{t.serviceOptions.dogWalking}</option>
                <option value="daycare">{t.serviceOptions.daycare}</option>
                <option value="transport">{t.serviceOptions.transport}</option>
              </select>
            </div>

            <div>
              <label htmlFor="petType" className="block text-sm font-medium text-white">
                {t.petType}
              </label>
              <select
                name="petType"
                id="petType"
                value={formData.petType}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-white focus:ring-white bg-white/90"
                required
              >
                <option value="">{t.petOptions.default}</option>
                <option value="dog">{t.petOptions.dog}</option>
                <option value="cat">{t.petOptions.cat}</option>
                <option value="both">{t.petOptions.both}</option>
                <option value="other">{t.petOptions.other}</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-white">
                {t.message}
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-white focus:ring-white bg-white/90"
              ></textarea>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#CEBDB6] bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white disabled:opacity-70"
              >
                {isSubmitting ? (
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                ) : (
                  <Send className="h-5 w-5 mr-2" />
                )}
                {t.submit}
              </button>
            </div>

            <div className="sm:col-span-2 text-center">
              <p className="text-sm text-white/90">
                {t.followUp}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}