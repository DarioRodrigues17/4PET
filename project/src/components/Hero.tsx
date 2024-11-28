import React from 'react';
import * as Icons from 'lucide-react';
import SchedulingForm from './SchedulingForm';

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/494252666.hd.mp4?s=2f448cf4273283af52d22c0d32c10dc8f7ec6cb3&profile_id=175"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute top-20 left-10 animate-float-slow">
          <Icons.PawPrint className="h-12 w-12 text-white/20" />
        </div>
        <div className="absolute top-40 right-20 animate-float-medium">
          <Icons.PawPrint className="h-8 w-8 text-white/20" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float-fast">
          <Icons.PawPrint className="h-10 w-10 text-white/20" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column - Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="animate-bounce mb-8 inline-block">
            <Icons.PawPrint className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Cuidados Profissionais para Animais</span>
            <span className="block text-[#CEBDB6] mt-2">Com Amor e Dedicação</span>
          </h1>
          <p className="mt-3 text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl max-w-md">
            Oferecemos serviços premium de pet sitting, passeios e creche. Os seus animais merecem os melhores cuidados quando está ausente.
          </p>
          <div className="mt-8">
            <a
              href="#services"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#8B7B74] bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all transform hover:scale-105"
            >
              Nossos Serviços
            </a>
          </div>
        </div>

        {/* Right Column - Scheduling Form */}
        <div className="lg:w-1/2">
          <SchedulingForm />
        </div>
      </div>
    </div>
  );
}