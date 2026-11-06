import React, { createContext, useContext, useState, useEffect } from 'react';

interface EffectsContextType {
  effectsEnabled: boolean;
  toggleEffects: () => void;
  setEffectsEnabled: (enabled: boolean) => void;
}

const EffectsContext = createContext<EffectsContextType>({
  effectsEnabled: true,
  toggleEffects: () => {},
  setEffectsEnabled: () => {},
});

export const EffectsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [effectsEnabled, setEffectsEnabledState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const stored = localStorage.getItem('ajay_portfolio_fx');
      if (stored !== null) return stored === 'true';
      return !prefersReduced;
    }
    return true;
  });

  // Listen to system prefers-reduced-motion changes if user hasn't explicitly overridden
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem('ajay_portfolio_fx');
      if (stored === null) {
        setEffectsEnabledState(!e.matches);
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  const toggleEffects = () => {
    setEffectsEnabledState((prev) => {
      const next = !prev;
      localStorage.setItem('ajay_portfolio_fx', String(next));
      return next;
    });
  };

  const setEffectsEnabled = (enabled: boolean) => {
    setEffectsEnabledState(enabled);
    localStorage.setItem('ajay_portfolio_fx', String(enabled));
  };

  return (
    <EffectsContext.Provider value={{ effectsEnabled, toggleEffects, setEffectsEnabled }}>
      {children}
    </EffectsContext.Provider>
  );
};

export const useEffects = () => useContext(EffectsContext);
