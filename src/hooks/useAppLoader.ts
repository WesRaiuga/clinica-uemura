import { useState, useEffect } from 'react';

const LOADER_TIME = Math.random() * (600 - 300) + 300; // tempo aleatório entre 300ms e 600ms
const CONTENT_TIME = 400; // tempo fixo para mostrar o conteúdo após o loader

/**
 * Hook para gerenciar o estado de carregamento da aplicação.
 * Encapsula a lógica de temporização do Loader e exibição do conteúdo.
 */
export const useAppLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldShowContent, setShouldShowContent] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const loaderTimer = setTimeout(() => setIsLoading(false), LOADER_TIME);
    
    return () => clearTimeout(loaderTimer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const contentTimer = setTimeout(() => setShouldShowContent(true), CONTENT_TIME);
      return () => clearTimeout(contentTimer);
    } else {
      setShouldShowContent(false);
    }
  }, [isLoading]);

  return { isLoading, shouldShowContent };
};
