import React, { createContext, useContext, useState, useEffect } from 'react';

interface EffectsContextType {
  effectsEnabled: boolean;
  toggleEffects: () => void;
}

const EffectsContext = createContext<EffectsContextType>({
  effectsEnabled: true,
  toggleEffects: () => {},
});

export const EffectsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Check user's OS reduced motion preference on mount
  const [effectsEnabled, setEffectsEnabled] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const stored = localStorage.getItem('ajay_portfolio_fx');
      if (stored !== null) return stored === 'true';
      return !prefersReduced;
    }
    return true;
  });

  useEffect(() => {
    localStorage.setItem('ajay_portfolio_fx', String(effectsEnabled));
  }, [effectsEnabled]);

  const toggleEffects = () => {
    setEffectsEnabled((prev) => !prev);
  };

  return (
    <EffectsContext.Provider value={{ effectsEnabled, toggleEffects }}>
      {children}
    </EffectsContext.Provider>
  );
};

export const useEffects = () => useContext(EffectsContext);

