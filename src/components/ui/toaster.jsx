
import React from 'react';
import { useToast } from '../../hooks/use-toast';

export const Toaster = () => {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`bg-white border rounded-lg shadow-lg p-4 min-w-[300px] ${
            toast.variant === 'destructive' ? 'border-red-500' : 'border-gray-200'
          }`}
        >
          <div className="flex justify-between items-start">
            <div>
              {toast.title && (
                <h4 className="font-semibold mb-1">{toast.title}</h4>
              )}
              {toast.description && (
                <p className="text-sm text-gray-600">{toast.description}</p>
              )}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};