import toast, { Renderable, Toast, ToastOptions, ValueOrFunction } from 'react-hot-toast';

type Message = ValueOrFunction<Renderable, Toast>;
type ToastType = 'success' | 'error' | 'loading' | 'custom';

interface UseToastOptions extends ToastOptions {
  message: Message;
  type?: ToastType;
}

const useToast = ({ 
  message, 
  type = "success", 
  id = "unique", 
  position = "top-center",
  duration = 2000,
  ...props 
}: UseToastOptions) => {
  const toastHandler: Record<ToastType, (message: Message, options?: ToastOptions) => string> = {
    success: toast.success,
    error: toast.error,
    loading: toast.loading,
    custom: toast.custom,
  };

  return toastHandler[type](message, { id, position, ...props });
};

export default useToast;
