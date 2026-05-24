import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const NeomorphicSelectAdmin = ({ 
  label,
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  name,
  disabled = false,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !buttonRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);
  const selectedLabel = selectedOption?.label || placeholder;

  const handleSelect = (optionValue) => {
    onChange({ target: { value: optionValue, name: name || '' } });
    setIsOpen(false);
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label className="text-[10px] font-bold tracking-widest text-gray-600 uppercase ml-2">
          {label}
        </label>
      )}
      
      <div className="relative w-full">
        {/* Dropdown Button */}
        <motion.button
          ref={buttonRef}
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className="w-full bg-[#E0E5EC] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] rounded-xl px-4 py-4 text-xs text-gray-700 font-bold uppercase tracking-tighter focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all text-left flex items-center justify-between group hover:shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] disabled:opacity-50 disabled:cursor-not-allowed"
          whileTap={{ scale: 0.98 }}
        >
          <span className={value ? 'text-gray-800 font-bold' : 'text-gray-500'}>
            {selectedLabel}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0 ml-3"
          >
            <ChevronDown size={16} className="text-indigo-600 group-hover:text-indigo-700" strokeWidth={2.5} />
          </motion.div>
        </motion.button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={dropdownRef}
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.15, type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute top-full left-0 right-0 mt-2 bg-[#E0E5EC] rounded-xl shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] z-50 overflow-hidden"
            >
              <div className="max-h-64 overflow-y-auto">
                {options.map((option, index) => (
                  <motion.button
                    key={option.value}
                    type="button"
                    onClick={() => handleSelect(option.value)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                    className={`w-full px-4 py-3 text-left text-xs font-bold uppercase tracking-tighter transition-all flex items-center justify-between group ${
                      value === option.value
                        ? 'bg-indigo-600 text-white shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)]'
                        : 'text-gray-700 hover:bg-[#d0d8e8] hover:shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]'
                    }`}
                  >
                    <span>{option.label}</span>
                    {value === option.value && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NeomorphicSelectAdmin;
