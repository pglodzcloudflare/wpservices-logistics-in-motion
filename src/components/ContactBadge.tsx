import React from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
interface ContactBadgeProps {
  className?: string;
}
export const ContactBadge: React.FC<ContactBadgeProps> = ({ className }) => {
  return (
    <motion.a
      href="mailto:sales@wpservices.org"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "inline-flex items-center gap-3 px-6 py-4 bg-logistics-navy text-white rounded-full shadow-lg transition-all hover:bg-logistics-navy/90 hover:shadow-xl hover:ring-2 hover:ring-logistics-orange/50",
        className
      )}
    >
      <div className="bg-white/20 p-2 rounded-full">
        <Mail className="w-5 h-5 text-white" />
      </div>
      <div className="flex flex-col items-start text-left">
        <span className="text-xs font-medium opacity-80 uppercase tracking-wider">Get in touch</span>
        <span className="text-sm font-semibold">sales@wpservices.org</span>
      </div>
    </motion.a>
  );
};