import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedLogisticsBackground } from '@/components/AnimatedLogisticsBackground';
import { ContactBadge } from '@/components/ContactBadge';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Toaster } from '@/components/ui/sonner';
export function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-logistics-cream flex flex-col">
      <ThemeToggle className="absolute top-6 right-6" />
      {/* Background Layer */}
      <AnimatedLogisticsBackground />
      {/* Main Content Layer */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col items-center text-center"
        >
          {/* Glassmorphism Card */}
          <div className="backdrop-blur-md bg-white/40 border border-white/60 p-10 md:p-16 rounded-[2.5rem] shadow-2xl max-w-3xl w-full relative">
            {/* Subtle decorative accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-1.5 bg-logistics-orange rounded-full shadow-sm" />
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.h1 
                  className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-logistics-navy leading-[1.1] tracking-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Seamless Logistics for a <span className="text-logistics-orange italic">Connected</span> World
                </motion.h1>
                <motion.p 
                  className="text-lg md:text-xl text-logistics-navy/70 max-w-xl mx-auto font-sans leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  We are currently building a new digital home for our logistics services. 
                  Our commitment to precision and movement remains unchanged.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                className="flex flex-col items-center gap-6"
              >
                <ContactBadge />
                <p className="text-sm text-logistics-navy/50 font-medium">
                  Reach out for more information regarding our global services.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
      {/* Footer */}
      <footer className="relative z-10 p-8 text-center">
        <p className="text-sm font-medium text-logistics-navy/40 uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} WPServices. All Rights Reserved.
        </p>
      </footer>
      <Toaster richColors closeButton />
    </div>
  );
}