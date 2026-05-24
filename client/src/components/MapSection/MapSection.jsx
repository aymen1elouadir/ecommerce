import React from 'react';
import { MapPin } from 'lucide-react';

const MapSection = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center border-t border-gray-200 bg-[#f5f5f5] overflow-hidden">
      
      {/* --- L'MAP BACKGROUND --- */}
      <div 
        className="absolute inset-0 opacity-40 grayscale"
        style={{ 
          // Hna dir l-lien dyal tswira dyal l-khrita li dwiyna 3liha 9bila
          backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')", 
          backgroundSize: 'cover',       
          backgroundPosition: 'center',  
        }}
      ></div>

      {/* --- L'KARTA LI F L-WST --- */}
      <div className="relative z-10 bg-white px-10 py-14 md:px-16 md:py-16 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] flex flex-col items-center text-center max-w-[420px] w-[90%]">
        
        <MapPin size={28} strokeWidth={1.5} className="text-[#4a2e20] mb-6" />
        
        <h3 className="text-2xl md:text-3xl font-serif text-[#0f3325] mb-3">
          Visit our Safi Atelier
        </h3>
        
        <p className="text-[10px] font-bold tracking-[0.25em] text-gray-500 uppercase mb-8 leading-relaxed">
          108 Kawki Rd <br/>
          Safi 46000, Morocco
        </p>
        
        {/* L-lien l-79i9i dyal Google Maps dyalek! */}
        <a 
          href="https://maps.google.com/?cid=17060301487290472003&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNl" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[10px] font-bold tracking-[0.2em] text-[#3b4b6b] uppercase border-b border-[#3b4b6b] pb-1 hover:text-indigo-500 hover:border-indigo-500 transition-colors"
        >
          Open in Maps
        </a>

      </div>
    </div>
  );
};

export default MapSection;