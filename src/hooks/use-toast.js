
import { useState, useCallback } from 'react';

let toastCounter = 0;
const listeners = new Set();

export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((toast) => {
    const id = toastCounter++;
    const newToast = { ...toast, id };
    
    setToasts((prev) => [...prev, newToast]);
    listeners.forEach((listener) => listener([...toasts, newToast]));

    setTimeout(() => {
      removeToast(id);
    }, 5000);

    return id;
  }, [toasts]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
    listeners.forEach((listener) => 
      listener((prev) => prev.filter((toast) => toast.id !== id))
    );
  }, []);

  const toast = useCallback((props) => {
    return addToast(props);
  }, [addToast]);

  return {
    toast,
    toasts,
    removeToast,
  };
};