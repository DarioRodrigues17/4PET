import React from 'react';
import * as Icons from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import InstagramFeed from './components/InstagramFeed';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <FAQ />
        <InstagramFeed />
        <QuoteForm />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;